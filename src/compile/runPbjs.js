import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

import { getBundleBuildDir, getBundleProtoDir, getBundleProtoJsPath } from '../paths/index.js';

function runPbjsCli(args, requireBaseDir) {
  const runtimeRequire = createRequire(path.join(requireBaseDir, '__runtime__.cjs'));
  const { main: pbjsMain } = runtimeRequire('protobufjs-cli/pbjs.js');

  return new Promise((resolve, reject) => {
    pbjsMain(args, (error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

export async function runPbjsForBundle(context, bundle) {
  const protoDir = getBundleProtoDir(context.paths, bundle.name);
  if (!fs.existsSync(protoDir)) {
    throw new Error(`Proto 目录不存在: ${protoDir}`);
  }

  const protoFiles = fs
    .readdirSync(protoDir)
    .filter((file) => file.endsWith('.proto'))
    .map((file) => path.join(protoDir, file));

  if (!protoFiles.length) {
    throw new Error(`目录下没有找到 .proto 文件: ${protoDir}`);
  }

  const outputDir = getBundleBuildDir(context.paths, bundle.name);
  const outputPath = getBundleProtoJsPath(context.paths, bundle.name);
  fs.rmSync(outputDir, { recursive: true, force: true });
  fs.mkdirSync(outputDir, { recursive: true });

  const args = [
    '-t',
    'static-module',
    '-w',
    'commonjs',
    '-p',
    context.paths.protoWorkspaceDir,
    '-o',
    outputPath,
    ...protoFiles,
  ];

  const requireBaseDir = context.mode === 'packaged' ? context.paths.runtimeDir : context.toolRoot;
  await runPbjsCli(args, requireBaseDir);
  return outputPath;
}
