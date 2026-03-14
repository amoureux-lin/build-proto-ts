/**
 * Node.js 单可执行应用 (SEA) 构建脚本
 * - Node 25.5+：使用内置 node --build-sea 一步生成 exe
 * - Node 20～25.4：生成 blob + 使用 postject 注入（需先 npm install postject）
 */

import { execSync } from "child_process";
import { build } from "esbuild";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const ROOT = path.resolve(__dirname, "..");
const SEA_CONFIG = path.join(ROOT, "sea-config.json");
const DIST_DIR = path.join(ROOT, "dist");
const SOURCE_ENTRY = path.join(ROOT, "main.js");
const SOURCE_PROTO_CONFIG = path.join(ROOT, "src", "protoConfig.json");
const DIST_PROTO_CONFIG = path.join(DIST_DIR, "protoConfig.json");
const SOURCE_NODE_MODULES = path.join(ROOT, "node_modules");
const RUNTIME_ROOT_PACKAGES = ["protobufjs-cli", "protobufjs", "long"];
const RUNTIME_NODE_BINARY_NAME = process.platform === "win32" ? "node.exe" : "node";
const RUNTIME_ASSETS_MODULE = path.join(ROOT, "src", "runtime", "runtimeAssets.js");

function getNodeVersion() {
  const v = process.version.slice(1).split(".").map(Number);
  return { major: v[0], minor: v[1], patch: v[2] };
}

function hasBuildSea() {
  const { major, minor } = getNodeVersion();
  return major > 25 || (major === 25 && minor >= 5);
}

function listFilesRecursive(rootDir) {
  const files = [];

  function walk(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      if (entry.name === ".bin") continue;

      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile()) {
        files.push(fullPath);
      }
    }
  }

  if (fs.existsSync(rootDir)) {
    walk(rootDir);
  }

  return files;
}

function toAssetKey(prefix, fullPath, rootDir) {
  const relativePath = path.relative(rootDir, fullPath).replace(/\\/g, "/");
  return `${prefix}/${relativePath}`;
}

function resolvePackageDir(packageName) {
  return path.join(SOURCE_NODE_MODULES, ...packageName.split("/"));
}

function collectRuntimePackageFiles() {
  const visited = new Set();
  const packageFiles = [];
  const queue = [...RUNTIME_ROOT_PACKAGES];

  while (queue.length) {
    const packageName = queue.shift();
    if (!packageName || visited.has(packageName)) continue;

    const packageDir = resolvePackageDir(packageName);
    const packageJsonPath = path.join(packageDir, "package.json");
    if (!fs.existsSync(packageJsonPath)) {
      console.error("运行依赖包不存在:", packageName);
      process.exit(1);
    }

    visited.add(packageName);
    packageFiles.push(...listFilesRecursive(packageDir).map((filePath) => ({ packageName, filePath, packageDir })));

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    const dependencyNames = [
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.optionalDependencies || {}),
    ];

    for (const dependencyName of dependencyNames) {
      if (!visited.has(dependencyName)) {
        queue.push(dependencyName);
      }
    }
  }

  return packageFiles;
}

function buildEmbeddedRuntimeAssetsModule() {
  if (!fs.existsSync(SOURCE_NODE_MODULES)) {
    console.error("运行依赖不存在:", SOURCE_NODE_MODULES);
    process.exit(1);
  }

  const assets = {
    [RUNTIME_NODE_BINARY_NAME]: fs.readFileSync(process.execPath).toString("base64"),
  };

  for (const { filePath } of collectRuntimePackageFiles()) {
    assets[toAssetKey("node_modules", filePath, SOURCE_NODE_MODULES)] = fs.readFileSync(filePath).toString("base64");
  }

  return `export const runtimeAssets = ${JSON.stringify(assets)};`;
}

async function bundleSeaEntry() {
  if (!fs.existsSync(SOURCE_ENTRY)) {
    console.error("入口脚本不存在:", SOURCE_ENTRY);
    process.exit(1);
  }

  if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true });

  const bundledEntry = path.join(DIST_DIR, "sea-main.cjs");
  const runtimeAssetsModuleContent = buildEmbeddedRuntimeAssetsModule();
  console.log("0. 打包单文件入口...");
  await build({
    entryPoints: [SOURCE_ENTRY],
    outfile: bundledEntry,
    bundle: true,
    format: "cjs",
    platform: "node",
    target: [`node${process.versions.node}`],
    legalComments: "none",
    external: ["protobufjs", "protobufjs/*", "protobufjs-cli", "protobufjs-cli/*", "long", "long/*"],
    plugins: [
      {
        name: "inject-runtime-assets",
        setup(build) {
          build.onLoad({ filter: /.*/ }, (args) => {
            if (path.resolve(args.path) !== path.resolve(RUNTIME_ASSETS_MODULE)) {
              return null;
            }

            return {
              contents: runtimeAssetsModuleContent,
              loader: "js",
            };
          });
        },
      },
    ],
  });
  return bundledEntry;
}

function removeIfExists(filePath) {
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch (_) {}
}

function removeDirIfExists(dirPath) {
  try {
    fs.rmSync(dirPath, { recursive: true, force: true });
  } catch (_) {}
}

function copyRuntimeConfig() {
  if (!fs.existsSync(SOURCE_PROTO_CONFIG)) {
    console.error("运行配置不存在:", SOURCE_PROTO_CONFIG);
    process.exit(1);
  }

  if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true });
  fs.copyFileSync(SOURCE_PROTO_CONFIG, DIST_PROTO_CONFIG);
}

function cleanDistRuntimeOutputs() {
  removeDirIfExists(path.join(DIST_DIR, "build"));
  removeDirIfExists(path.join(DIST_DIR, "errorCode"));
}

async function buildWithNativeSea() {
  console.log("使用 Node 内置 --build-sea 生成 exe...\n");
  if (!fs.existsSync(SEA_CONFIG)) {
    console.error("未找到 sea-config.json，请放在项目根目录。");
    process.exit(1);
  }
  const bundledEntry = await bundleSeaEntry();
  if (!fs.existsSync(bundledEntry)) {
    console.error("打包入口失败，未找到:", bundledEntry);
    process.exit(1);
  }
  try {
    cleanDistRuntimeOutputs();
    execSync(`node --build-sea "${SEA_CONFIG}"`, {
      cwd: ROOT,
      stdio: "inherit",
    });
    copyRuntimeConfig();
  } finally {
    removeIfExists(bundledEntry);
    removeIfExists(path.join(DIST_DIR, "buildProtoJs-temp.exe"));
  }
  console.log("\n生成完成，输出目录: dist/");
}

async function buildWithPostject() {
  console.log("使用 postject 流程生成 exe（Node 20～25.4）...\n");

  if (!fs.existsSync(SEA_CONFIG)) {
    console.error("未找到 sea-config.json");
    process.exit(1);
  }

  const bundledEntry = await bundleSeaEntry();
  const config = JSON.parse(fs.readFileSync(SEA_CONFIG, "utf8"));
  const outputExe = path.resolve(ROOT, config.output);
  const blobPath = path.join(DIST_DIR, "sea.blob");
  const blobOutputRelative = "dist/sea.blob";

  if (!fs.existsSync(bundledEntry) || !fs.existsSync(path.resolve(ROOT, config.main))) {
    console.error("入口脚本不存在:", config.main);
    process.exit(1);
  }

  try {
    require.resolve("postject");
  } catch (_) {
    console.error("请先安装 postject: npm install postject --save-dev");
    process.exit(1);
  }

  if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true });

  const blobConfig = { ...config, output: blobOutputRelative };
  const blobConfigPath = path.join(ROOT, "sea-config-blob.json");
  fs.writeFileSync(blobConfigPath, JSON.stringify(blobConfig, null, 2), "utf8");

  try {
    cleanDistRuntimeOutputs();
    console.log("1. 生成 SEA blob...");
    execSync(`node --experimental-sea-config "${blobConfigPath}"`, {
      cwd: ROOT,
      stdio: "inherit",
    });

    if (!fs.existsSync(blobPath)) {
      console.error("blob 生成失败，未找到:", blobPath);
      process.exit(1);
    }

    console.log("2. 复制 Node 二进制...");
    const nodeBinary = process.execPath;
    const exeTemp = path.join(DIST_DIR, "buildProtoJs-temp.exe");
    fs.copyFileSync(nodeBinary, exeTemp);

    console.log("3. 注入 blob (postject)...");
    const sentinelFuse = "NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2";
    execSync(
      `npx postject "${exeTemp}" NODE_SEA_BLOB "${blobPath}" --sentinel-fuse ${sentinelFuse}`,
      { cwd: ROOT, stdio: "inherit" }
    );

    removeIfExists(outputExe);
    fs.renameSync(exeTemp, outputExe);
    copyRuntimeConfig();
  } finally {
    removeIfExists(blobConfigPath);
    removeIfExists(blobPath);
    removeIfExists(bundledEntry);
    removeIfExists(path.join(DIST_DIR, "buildProtoJs-temp.exe"));
  }
  console.log("\n生成完成:", outputExe);
}

async function main() {
  console.log("Node 版本:", process.version);
  console.log("项目根目录:", ROOT);
  console.log("");

  if (hasBuildSea()) {
    await buildWithNativeSea();
  } else {
    await buildWithPostject();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
