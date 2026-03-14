import path from 'node:path';

import { loadProtoConfig } from '../config/loadConfig.js';
import { normalizeProtoConfig, validateProtoConfig } from '../config/normalizeConfig.js';
import { resolvePaths } from '../paths/index.js';
import { ensureSeaRuntimeAssets } from './seaAssets.js';

function getOutputRoot(configPath) {
  const configDir = path.dirname(configPath);
  return path.basename(configDir).toLowerCase() === 'src' ? path.dirname(configDir) : configDir;
}

export function createRuntimeContext() {
  const loaded = loadProtoConfig();
  const config = normalizeProtoConfig(loaded.config);
  validateProtoConfig(config);

  const configDir = path.dirname(loaded.configPath);
  const outputRoot = getOutputRoot(loaded.configPath);
  const toolRoot = outputRoot;
  const mode = path.basename(configDir).toLowerCase() === 'src' ? 'source' : 'packaged';

  const context = {
    mode,
    cwd: process.cwd(),
    configPath: loaded.configPath,
    configDir,
    outputRoot,
    toolRoot,
    config,
  };

  const resolvedPaths = resolvePaths(context);
  if (mode === 'packaged') {
    ensureSeaRuntimeAssets(resolvedPaths);
  }

  return {
    ...context,
    paths: resolvedPaths,
  };
}
