import fs from 'node:fs';
import path from 'node:path';

import { getMessageTypesProtoPath, getBundleProtoDir } from '../paths/index.js';
import { rewriteProtoImports } from './rewriteImports.js';

function recreateDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  fs.mkdirSync(dirPath, { recursive: true });
}

function prepareBuildRoot(buildDir, preservedNames) {
  fs.mkdirSync(buildDir, { recursive: true });

  for (const name of fs.readdirSync(buildDir)) {
    if (preservedNames.has(name)) continue;
    fs.rmSync(path.join(buildDir, name), { recursive: true, force: true });
  }
}

function ensureParentDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function buildSourceProtoPath(projectApiRoot, dir, version, protoName) {
  return path.join(projectApiRoot, dir, version, 'proto', `${protoName}.proto`);
}

export function copyConfiguredProtoFiles(context, collector) {
  const { config, paths } = context;
  prepareBuildRoot(paths.buildDir, new Set(['proto', 'output', '.runtime']));
  recreateDir(paths.protoWorkspaceDir);
  fs.mkdirSync(paths.generatedDir, { recursive: true });

  for (const bundle of config.bundles) {
    const bundleProtoDir = getBundleProtoDir(paths, bundle.name);
    fs.mkdirSync(bundleProtoDir, { recursive: true });

    for (const entry of bundle.entries) {
      const sourcePath = buildSourceProtoPath(paths.projectApiRoot, entry.dir, bundle.version, entry.protoName);
      const targetPath = path.join(bundleProtoDir, `${entry.protoName}.proto`);

      if (!fs.existsSync(sourcePath)) {
        collector.addError(`Proto 文件不存在: ${sourcePath}`);
        continue;
      }

      ensureParentDir(targetPath);
      fs.copyFileSync(sourcePath, targetPath);
      rewriteProtoImports(targetPath, paths.protoWorkspaceDir);
    }
  }

  const messageTypesSource = buildSourceProtoPath(
    paths.projectApiRoot,
    config.messageTypes.name,
    config.messageTypes.version,
    config.messageTypes.protoName
  );
  const messageTypesTarget = getMessageTypesProtoPath(paths, config);

  if (!fs.existsSync(messageTypesSource)) {
    collector.addError(`消息类型 proto 不存在: ${messageTypesSource}`);
    return;
  }

  ensureParentDir(messageTypesTarget);
  fs.copyFileSync(messageTypesSource, messageTypesTarget);
  rewriteProtoImports(messageTypesTarget, paths.protoWorkspaceDir);
}
