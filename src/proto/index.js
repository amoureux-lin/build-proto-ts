import path from 'node:path';
import {
  runTsProtoForBundle,
  prepareProtoWorkspaceForTsProto,
  removePreparedProtoWorkspace,
} from '../compile/runTsProto.js';
import { parseMessageTypesProto, parseBundleProtosForMapping } from '../mapping/parseProtoForRegistry.js';
import { writeMessageTypeAndRegistriesForBundle } from '../mapping/writeMessageTypeAndRegistry.js';
import { createErrorCollector } from '../errors/collector.js';
import { runErrorCodePipeline } from '../errorCode/index.js';
import { createRuntimeContext } from '../runtime/context.js';
import { copyConfiguredProtoFiles } from '../copy/copyProto.js';
import { getBundleProtoDir, getMessageTypesProtoPath } from '../paths/index.js';

/**
 * 执行 proto 构建流程（异步，需 await 完成后再退出或等待按键）
 */
export async function startProto() {
  const collector = createErrorCollector();
  const context = createRuntimeContext();

  console.log('start');
  console.log('使用配置文件:', context.configPath);
  console.log('运行模式:', context.mode);
  console.log('项目 proto 目录:', context.paths.projectApiRoot ?? '(未配置，使用已有 proto 工作区)');
  console.log('工作 proto 目录:', context.paths.protoWorkspaceDir);
  console.log('build 根目录:', context.paths.buildDir);
  console.log('构建输出目录:', context.paths.generatedDir);

  if (context.paths.projectApiRoot) {
    copyConfiguredProtoFiles(context, collector);
  } else {
    console.log('跳过复制 Proto（未配置或不存在 projectApiRoot，直接使用已有 proto 工作区）');
  }

  const originalWorkspaceDir = context.paths.protoWorkspaceDir;
  const tempWorkspaceDir = prepareProtoWorkspaceForTsProto(
    context.paths.protoWorkspaceDir,
    context.paths.buildDir
  );
  context.paths.protoWorkspaceDir = tempWorkspaceDir;

  const messageTypesPath = getMessageTypesProtoPath(context.paths, context.config);
  const { enumNameToCode } = parseMessageTypesProto(messageTypesPath, collector);
  console.log('消息类型映射加载完成:', Object.keys(enumNameToCode).length, '个类型');
  const bundleRegistryEntries = new Map();
  let commonRegistryEntries = [];
  for (const b of context.config.bundles) {
    const entries = parseBundleProtosForMapping(
      getBundleProtoDir(context.paths, b.name),
      b.name,
      enumNameToCode
    );
    bundleRegistryEntries.set(b.name, entries);
    if (b.name === 'common') commonRegistryEntries = entries;
  }

  try {
  for (const bundle of context.config.bundles) {
    console.log(`========== 开始构建 ${bundle.name} ==========`);

    try {
      await runTsProtoForBundle(context, bundle);

      const outputDir = path.join(context.paths.generatedDir, bundle.name);
      const entries = bundleRegistryEntries.get(bundle.name) ?? [];
      writeMessageTypeAndRegistriesForBundle(outputDir, bundle.name, entries, commonRegistryEntries);

      console.log(`========== ${bundle.name} 构建完成 ==========`);
    } catch (error) {
      collector.addError(`${bundle.name} 构建失败: ${error.message}`);
    }
  }
  } finally {
    context.paths.protoWorkspaceDir = originalWorkspaceDir;
    removePreparedProtoWorkspace(context.paths.buildDir);
  }

  runErrorCodePipeline(context, collector);
  collector.printSummary();

  if (collector.hasErrors()) {
    throw new Error('Proto 构建存在错误，请查看上方错误汇总。');
  }
}