import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

import { getBundleProtoDtsPath } from '../paths/index.js';

function resolveNodeBinary(context) {
  if (context.mode === 'packaged' && fs.existsSync(context.paths.runtimeNodeBinaryPath)) {
    return context.paths.runtimeNodeBinaryPath;
  }

  if (path.basename(process.execPath).toLowerCase().startsWith('node')) {
    return process.execPath;
  }

  const locator = process.platform === 'win32' ? 'where' : 'which';
  const output = execFileSync(locator, ['node'], { encoding: 'utf8' });
  const firstLine = output.split(/\r?\n/).find((line) => line.trim());
  if (!firstLine) {
    throw new Error('未找到 node 可执行文件，pbts 无法生成声明文件。');
  }

  return firstLine.trim();
}

function runPbtsCli(args, context, requireBaseDir) {
  const runtimeRequire = createRequire(path.join(requireBaseDir, '__runtime__.cjs'));
  const { main: pbtsMain } = runtimeRequire('protobufjs-cli/pbts.js');
  const nodeBinary = resolveNodeBinary(context);
  const originalExecPath = process.execPath;

  return new Promise((resolve, reject) => {
    Object.defineProperty(process, 'execPath', {
      value: nodeBinary,
      configurable: true,
      writable: true,
    });

    pbtsMain(args, (error) => {
      Object.defineProperty(process, 'execPath', {
        value: originalExecPath,
        configurable: true,
        writable: true,
      });

      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

export async function runPbtsForBundle(context, bundle, inputJsPath) {
  const outputPath = getBundleProtoDtsPath(context.paths, bundle.name);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const requireBaseDir = context.mode === 'packaged' ? context.paths.runtimeDir : context.toolRoot;
  await runPbtsCli(['-o', outputPath, inputJsPath], context, requireBaseDir);
  return outputPath;
}
