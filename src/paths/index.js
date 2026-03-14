import fs from 'node:fs';
import path from 'node:path';

function toAbsolute(baseDir, value) {
  return path.isAbsolute(value) ? value : path.resolve(baseDir, value);
}

function firstExistingPath(candidates) {
  for (const candidate of candidates) {
    if (candidate && fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function resolveConfiguredPath(value, baseDirs) {
  if (!value) return null;
  if (path.isAbsolute(value)) return value;
  return firstExistingPath(baseDirs.map((baseDir) => path.resolve(baseDir, value))) ?? path.resolve(baseDirs[0], value);
}

function resolveProjectApiRoot(contextInput) {
  const { config, configDir, outputRoot, cwd, toolRoot } = contextInput;
  const configured = resolveConfiguredPath(config.paths.projectApiRoot, [cwd, outputRoot, configDir, toolRoot]);
  if (configured) return configured;

  return firstExistingPath([
    path.resolve(cwd, 'heroncloud-game', 'api'),
    path.resolve(outputRoot, 'heroncloud-game', 'api'),
    path.resolve(configDir, 'heroncloud-game', 'api'),
    path.resolve(outputRoot, '..', 'heroncloud-game', 'api'),
    path.resolve(outputRoot, '..', '..', 'heroncloud-game', 'api'),
    path.resolve(toolRoot, '..', 'heroncloud-game', 'api'),
  ]);
}

export function resolvePaths(contextInput) {
  const { config, outputRoot, configDir, cwd, toolRoot } = contextInput;
  const projectApiRoot = resolveProjectApiRoot(contextInput);

  if (!projectApiRoot) {
    throw new Error('未找到项目 proto 源目录。请在 protoConfig.json 中配置 paths.projectApiRoot。');
  }

  const buildDir = config.paths.buildDir
    ? resolveConfiguredPath(config.paths.buildDir, [cwd, outputRoot, configDir, toolRoot])
    : path.join(outputRoot, 'build');

  const protoWorkspaceDir = config.paths.protoWorkspaceDir
    ? resolveConfiguredPath(config.paths.protoWorkspaceDir, [cwd, outputRoot, configDir, toolRoot, buildDir])
    : path.join(buildDir, 'proto');

  const generatedDir = path.join(buildDir, 'output');
  const runtimeDir = path.join(buildDir, '.runtime');
  const runtimeNodeModulesDir = path.join(runtimeDir, 'node_modules');
  const runtimeNodeBinaryPath = path.join(runtimeDir, process.platform === 'win32' ? 'node.exe' : 'node');

  const errorCodeWorkspaceDir = config.paths.errorCodeWorkspaceDir
    ? resolveConfiguredPath(config.paths.errorCodeWorkspaceDir, [cwd, outputRoot, configDir, toolRoot])
    : path.join(protoWorkspaceDir, 'errorCode');

  const plannerCsvPath = config.errorCode.plannerCsvPath
    ? resolveConfiguredPath(config.errorCode.plannerCsvPath, [cwd, outputRoot, configDir, toolRoot])
    : path.join(generatedDir, 'errorCode', 'error_codes1.csv');

  const outputCsvPath = config.errorCode.outputCsvPath
    ? resolveConfiguredPath(config.errorCode.outputCsvPath, [cwd, outputRoot, configDir, toolRoot])
    : path.join(generatedDir, 'errorCode', `${config.errorCode.protoName}.csv`);

  const errorSourceProtoPath = config.errorCode.sourceProtoPath
    ? resolveConfiguredPath(config.errorCode.sourceProtoPath, [cwd, outputRoot, configDir, toolRoot, projectApiRoot])
    : path.join(projectApiRoot, 'common', config.messageTypes.version, 'proto', `${config.errorCode.protoName}.proto`);

  return {
    cwd,
    toolRoot,
    outputRoot,
    configDir,
    projectApiRoot,
    protoWorkspaceDir,
    buildDir,
    generatedDir,
    runtimeDir,
    runtimeNodeModulesDir,
    runtimeNodeBinaryPath,
    errorCodeWorkspaceDir,
    plannerCsvPath,
    outputCsvPath,
    errorSourceProtoPath,
  };
}

export function getBundleProtoDir(paths, bundleName) {
  return path.join(paths.protoWorkspaceDir, bundleName);
}

export function getBundleBuildDir(paths, bundleName) {
  return path.join(paths.generatedDir, bundleName);
}

export function getBundleProtoJsPath(paths, bundleName) {
  return path.join(getBundleBuildDir(paths, bundleName), `${bundleName}Proto.js`);
}

export function getBundleProtoDtsPath(paths, bundleName) {
  return path.join(getBundleBuildDir(paths, bundleName), `${bundleName}Proto.d.ts`);
}

export function getBundleMessageMapPath(paths, bundleName) {
  return path.join(getBundleBuildDir(paths, bundleName), `${bundleName}Msg.ts`);
}

export function getMessageTypesProtoPath(paths, config) {
  return path.join(paths.protoWorkspaceDir, config.messageTypes.protoName, `${config.messageTypes.protoName}.proto`);
}

export function resolveConfiguredOutputPath(baseDir, value, fallback) {
  return value ? toAbsolute(baseDir, value) : path.join(baseDir, fallback);
}
