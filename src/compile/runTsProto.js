/**
 * 使用 protoc + ts-proto 插件，按 bundle 从 .proto 生成纯 TypeScript（.ts）
 * 替代原 pbjs + pbts 的 .js + .d.ts 流程。
 * 优先使用项目内 npm 包 protoc（无需系统安装），若无则回退到 PATH 中的 protoc。
 * protoc/ts-proto 不允许 import 路径含 "./" 或 "../"，故需在临时副本中重写为 workspace 相对路径。
 */

import { execFileSync, execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import { getBundleBuildDir, getBundleProtoDir } from '../paths/index.js';

const PLUGIN_NAME = 'protoc-gen-ts_proto';
const TEMP_WORKSPACE_DIR = '.proto-ts-workspace';

function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const srcPath = path.join(src, name);
    const destPath = path.join(dest, name);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * 重写单个 .proto 文件中的 import，使路径相对 workspace 根且不含 "." 或 ".."。
 * - "../common/..." -> "common/..."
 * - "./..." (仅在 common 目录下) -> "common/..."
 */
function rewriteProtoImportsInFile(filePath, workspaceDir) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(workspaceDir, filePath).replace(/\\/g, '/');
  const isInCommon = relativePath.startsWith('common/');
  let next = content
    .replace(/import\s+"\.\.\/common\//g, 'import "common/')
    .replace(/import\s+"\.\//g, isInCommon ? 'import "common/' : (m) => m);
  if (next === content) return;
  fs.writeFileSync(filePath, next, 'utf8');
}

function walkProtoFiles(dir, fn) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walkProtoFiles(full, fn);
    } else if (name.endsWith('.proto')) {
      fn(full);
    }
  }
}

/**
 * 将 proto 工作区复制到临时目录并重写所有 .proto 的 import（去掉 "./" "../"），
 * 返回临时目录路径。调用方在构建结束后需删除该目录。
 */
export function prepareProtoWorkspaceForTsProto(workspaceDir, buildDir) {
  const tempDir = path.join(buildDir, TEMP_WORKSPACE_DIR);
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  copyDirRecursive(workspaceDir, tempDir);
  walkProtoFiles(tempDir, (filePath) => rewriteProtoImportsInFile(filePath, tempDir));
  return tempDir;
}

export function removePreparedProtoWorkspace(buildDir) {
  const tempDir = path.join(buildDir, TEMP_WORKSPACE_DIR);
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function resolvePluginPath(toolRoot) {
  const base = path.join(toolRoot, 'node_modules');
  const isWin = process.platform === 'win32';
  // Windows 下 protoc 会直接执行 --plugin= 的路径，必须用 .cmd 才能跑 Node 插件，否则报 "%1 is not a valid Win32 application"
  const candidates = isWin
    ? [
        path.join(base, '.bin', `${PLUGIN_NAME}.cmd`),
        path.join(base, '.bin', PLUGIN_NAME),
        path.join(base, 'ts-proto', `${PLUGIN_NAME}.js`),
      ]
    : [
        path.join(base, '.bin', PLUGIN_NAME),
        path.join(base, '.bin', `${PLUGIN_NAME}.cmd`),
        path.join(base, 'ts-proto', PLUGIN_NAME),
        path.join(base, 'ts-proto', `${PLUGIN_NAME}.js`),
      ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return path.join(base, '.bin', isWin ? `${PLUGIN_NAME}.cmd` : PLUGIN_NAME);
}

/**
 * 解析 protoc 可执行方式：优先使用 node_modules 中的 protoc 包（npx protoc），否则用 PATH 中的 protoc。
 * @returns {{ useNpx: boolean, protocPath: string }} useNpx 为 true 时用 execFileSync('npx', ['protoc', ...args], { cwd })
 */
function resolveProtoc(toolRoot) {
  const protocPkg = path.join(toolRoot, 'node_modules', 'protoc');
  const protocBin = path.join(toolRoot, 'node_modules', '.bin', 'protoc');
  const hasWinBin = fs.existsSync(protocBin + '.cmd');
  const hasUnixBin = fs.existsSync(protocBin);
  if (fs.existsSync(protocPkg) && (hasWinBin || hasUnixBin)) {
    return { useNpx: true, protocPath: 'npx' };
  }
  const isWin = process.platform === 'win32';
  const name = isWin ? 'protoc.exe' : 'protoc';
  const pathEnv = process.env.PATH || process.env.Path || '';
  const sep = isWin ? ';' : ':';
  for (const dir of pathEnv.split(sep)) {
    const full = path.join(dir.trim(), name);
    if (fs.existsSync(full)) return { useNpx: false, protocPath: full };
  }
  return { useNpx: false, protocPath: name };
}

/**
 * 对单个 bundle 运行 protoc + ts-proto，将 bundle 目录下所有 .proto 生成到 outputDir 的 .ts
 * -I 为 proto 工作区根目录，保证 import "../common/..." 等能解析
 */
export async function runTsProtoForBundle(context, bundle) {
  const protoDir = getBundleProtoDir(context.paths, bundle.name);
  if (!fs.existsSync(protoDir)) {
    throw new Error(`Proto 目录不存在: ${protoDir}`);
  }

  const protoFiles = fs
    .readdirSync(protoDir)
    .filter((f) => f.endsWith('.proto'))
    .map((f) => path.join(protoDir, f));

  if (!protoFiles.length) {
    throw new Error(`目录下没有找到 .proto 文件: ${protoDir}`);
  }

  const outputDir = getBundleBuildDir(context.paths, bundle.name);
  const workspaceDir = context.paths.protoWorkspaceDir;
  const toolRoot = context.toolRoot;
  const pluginPath = resolvePluginPath(toolRoot);

  if (!fs.existsSync(path.dirname(pluginPath))) {
    throw new Error(
      `未找到 ts-proto 插件，请先 npm install。期望路径: ${pluginPath}`
    );
  }

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  // protoc: --plugin=protoc-gen-ts_proto=<path> --ts_proto_out=<out> -I <workspace> <files...>
  const { useNpx, protocPath } = resolveProtoc(toolRoot);
  const args = [
    `--plugin=protoc-gen-ts_proto=${pluginPath}`,
    `--ts_proto_out=${outputDir}`,
    `--ts_proto_opt=esModuleInterop=true`,
    '-I',
    workspaceDir,
    ...protoFiles,
  ];

  const execOpts = {
    stdio: 'inherit',
    maxBuffer: 10 * 1024 * 1024,
    cwd: toolRoot,
  };

  try {
    if (useNpx) {
      const quoted = args.map((a) => (/[\s"]/.test(a) ? `"${String(a).replace(/"/g, '\\"')}"` : a)).join(' ');
      execSync(`npx protoc ${quoted}`, { ...execOpts, shell: true });
    } else {
      execFileSync(protocPath, args, execOpts);
    }
  } catch (err) {
    if (err.code === 'ENOENT' && !useNpx) {
      throw new Error(
        '未找到 protoc。请先执行 npm install 以使用项目内的 protoc，或将系统 protoc 加入 PATH（如 winget install Google.Protobuf 或从 https://github.com/protocolbuffers/protobuf/releases 下载）'
      );
    }
    throw err;
  }

  flattenBundleOutput(outputDir, bundle.name);
  rewriteRuntimeImports(outputDir, context.config.tsProto);
  return outputDir;
}

/**
 * 将 outputDir/<bundleName>/*.ts 移到 outputDir/，使产物为 output/<bundle>/xxx.ts；并修正 import 路径。
 * 再将 outputDir/common/*.ts 移到 outputDir/，去掉 common 目录，并修正所有文件中的 "./common/xxx" → "./xxx"。
 * 保留 outputDir/google/ 等其它依赖子目录不动。
 */
function flattenBundleOutput(outputDir, bundleName) {
  const bundleSubdir = path.join(outputDir, bundleName);
  if (fs.existsSync(bundleSubdir) && fs.statSync(bundleSubdir).isDirectory()) {
    const files = fs.readdirSync(bundleSubdir);
    for (const name of files) {
      const src = path.join(bundleSubdir, name);
      const stat = fs.statSync(src);
      if (stat.isFile() && name.endsWith('.ts')) {
        let content = fs.readFileSync(src, 'utf8');
        content = content
          .replace(/from\s+["']\.\.\/common\//g, 'from "./common/')
          .replace(/from\s+["']\.\.\/google\//g, 'from "./google/');
        const dest = path.join(outputDir, name);
        fs.writeFileSync(dest, content, 'utf8');
      } else if (stat.isDirectory()) {
        const destDir = path.join(outputDir, name);
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
        copyDirRecursive(src, destDir);
      }
    }
    fs.rmSync(bundleSubdir, { recursive: true, force: true });
  }

  const commonDir = path.join(outputDir, 'common');
  if (!fs.existsSync(commonDir) || !fs.statSync(commonDir).isDirectory()) {
    return;
  }
  moveDirContentsUp(commonDir, outputDir);
  fs.rmSync(commonDir, { recursive: true, force: true });
  for (const name of fs.readdirSync(outputDir)) {
    const filePath = path.join(outputDir, name);
    if (!name.endsWith('.ts') || !fs.statSync(filePath).isFile()) continue;
    let content = fs.readFileSync(filePath, 'utf8');
    const next = content.replace(/from\s+["']\.\/common\//g, 'from "./');
    if (next !== content) fs.writeFileSync(filePath, next, 'utf8');
  }
}

/**
 * 将生成文件中的 "protobufjs/minimal"、"long" 等 import 替换为配置路径，便于 Cocos Creator 等环境解析。
 */
function rewriteRuntimeImports(outputDir, tsProto) {
  if (!tsProto || (!tsProto.protobufjsMinimalImport && !tsProto.longImport)) return;
  const replacers = [];
  if (tsProto.protobufjsMinimalImport) {
    replacers.push([
      /from\s+["']protobufjs\/minimal["']/g,
      `from "${tsProto.protobufjsMinimalImport.replace(/\\/g, '/')}"`,
    ]);
  }
  if (tsProto.longImport) {
    replacers.push([
      /from\s+["']long["']/g,
      `from "${tsProto.longImport.replace(/\\/g, '/')}"`,
    ]);
  }
  if (!replacers.length) return;
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (name.endsWith('.ts')) {
        let content = fs.readFileSync(full, 'utf8');
        for (const [re, replacement] of replacers) content = content.replace(re, replacement);
        fs.writeFileSync(full, content, 'utf8');
      }
    }
  }
  walk(outputDir);
}

function moveDirContentsUp(srcDir, destDir) {
  for (const name of fs.readdirSync(srcDir)) {
    const src = path.join(srcDir, name);
    const dest = path.join(destDir, name);
    if (fs.statSync(src).isDirectory()) {
      if (fs.existsSync(dest)) {
        moveDirContentsUp(src, dest);
        fs.rmSync(src, { recursive: true, force: true });
      } else {
        fs.renameSync(src, dest);
      }
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}
