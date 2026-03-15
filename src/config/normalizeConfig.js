function normalizeDirEntry(entry) {
  return {
    dir: String(entry?.dir ?? '').trim(),
    protoName: String(entry?.protoName ?? '').trim(),
  };
}

function normalizeBundle(bundle) {
  return {
    version: String(bundle?.version ?? '').trim(),
    name: String(bundle?.name ?? '').trim(),
    entries: Array.isArray(bundle?.dir) ? bundle.dir.map(normalizeDirEntry) : [],
  };
}

export function normalizeProtoConfig(rawConfig) {
  const messageTypes = {
    version: String(rawConfig?.message_types?.version ?? '').trim(),
    name: String(rawConfig?.message_types?.name ?? '').trim(),
    protoName: String(rawConfig?.message_types?.protoName ?? '').trim(),
  };

  const bundles = Array.isArray(rawConfig?.games) ? rawConfig.games.map(normalizeBundle) : [];
  const paths = rawConfig?.paths ?? {};
  const errorCode = rawConfig?.errorCode ?? {};

  const tsProto = rawConfig?.tsProto ?? {};
  return {
    messageTypes,
    bundles,
    paths: {
      projectApiRoot: paths.projectApiRoot ?? null,
      protoWorkspaceDir: paths.protoWorkspaceDir ?? null,
      buildDir: paths.buildDir ?? null,
      errorCodeWorkspaceDir: paths.errorCodeWorkspaceDir ?? null,
      plannerCsvPath: paths.plannerCsvPath ?? null,
    },
    tsProto: {
      protobufjsMinimalImport: typeof tsProto.protobufjsMinimalImport === 'string' ? tsProto.protobufjsMinimalImport.trim() : null,
      longImport: typeof tsProto.longImport === 'string' ? tsProto.longImport.trim() : null,
    },
    errorCode: {
      enabled: errorCode.enabled ?? true,
      protoName: String(errorCode.protoName ?? 'error_codes').trim(),
      sourceProtoPath: errorCode.sourceProtoPath ?? null,
      outputCsvPath: errorCode.outputCsvPath ?? null,
      plannerCsvPath: errorCode.plannerCsvPath ?? paths.plannerCsvPath ?? null,
      syncPlanner: errorCode.syncPlanner ?? true,
    },
    raw: rawConfig,
  };
}

export function validateProtoConfig(config) {
  if (!config.messageTypes.version || !config.messageTypes.name || !config.messageTypes.protoName) {
    throw new Error('配置缺少 message_types.version / name / protoName。');
  }

  if (!config.bundles.length) {
    throw new Error('配置缺少 games 列表。');
  }

  for (const bundle of config.bundles) {
    if (!bundle.name || !bundle.version) {
      throw new Error('games 中存在缺少 name 或 version 的配置项。');
    }

    if (!bundle.entries.length) {
      throw new Error(`games.${bundle.name} 缺少 dir 配置。`);
    }

    for (const entry of bundle.entries) {
      if (!entry.dir || !entry.protoName) {
        throw new Error(`games.${bundle.name} 中存在缺少 dir 或 protoName 的配置项。`);
      }
    }
  }
}
