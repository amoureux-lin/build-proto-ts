import { runPbjsForBundle } from '../compile/runPbjs.js';
import { runPbtsForBundle } from '../compile/runPbts.js';
import { patchProtoJs } from '../compile/patchProtoJs.js';
import { loadMessageTypes } from '../mapping/loadMessageTypes.js';
import { scanBundleMessages } from '../mapping/scanProtoMessages.js';
import { buildMessageMap } from '../mapping/buildMessageMap.js';
import { writeMessageMap } from '../mapping/writeMessageMap.js';
import { createErrorCollector } from '../errors/collector.js';
import { runErrorCodePipeline } from '../errorCode/index.js';
import { createRuntimeContext } from '../runtime/context.js';
import { copyConfiguredProtoFiles } from '../copy/copyProto.js';
import {
  getBundleMessageMapPath,
  getBundleProtoDir,
  getMessageTypesProtoPath,
} from '../paths/index.js';

function sortCodeToMsgMap(codeToMsg) {
  return Object.fromEntries(
    Object.entries(codeToMsg).sort((left, right) => Number(left[0]) - Number(right[0]))
  );
}

/**
 * 执行 proto 构建流程（异步，需 await 完成后再退出或等待按键）
 */
export async function startProto() {
  const collector = createErrorCollector();
  const context = createRuntimeContext();

  console.log('start');
  console.log('使用配置文件:', context.configPath);
  console.log('运行模式:', context.mode);
  console.log('项目 proto 目录:', context.paths.projectApiRoot);
  console.log('工作 proto 目录:', context.paths.protoWorkspaceDir);
  console.log('build 根目录:', context.paths.buildDir);
  console.log('构建输出目录:', context.paths.generatedDir);

  copyConfiguredProtoFiles(context, collector);

  const messageTypesPath = getMessageTypesProtoPath(context.paths, context.config);
  const msgCodeMap = loadMessageTypes(messageTypesPath, collector);
  console.log('消息类型映射加载完成:', Object.keys(msgCodeMap).length, '个类型');

  for (const bundle of context.config.bundles) {
    console.log(`========== 开始构建 ${bundle.name} ==========`);

    try {
      const protoJsPath = await runPbjsForBundle(context, bundle);
      await runPbtsForBundle(context, bundle, protoJsPath);
      patchProtoJs(protoJsPath, bundle.name);

      const codeToMsg = scanBundleMessages(
        bundle,
        getBundleProtoDir(context.paths, bundle.name),
        msgCodeMap,
        collector
      );
      const messageMap = buildMessageMap(sortCodeToMsgMap(codeToMsg));
      writeMessageMap(getBundleMessageMapPath(context.paths, bundle.name), bundle.name, messageMap);
      console.log(`========== ${bundle.name} 构建完成 ==========`);
    } catch (error) {
      collector.addError(`${bundle.name} 构建失败: ${error.message}`);
    }
  }

  runErrorCodePipeline(context, collector);
  collector.printSummary();

  if (collector.hasErrors()) {
    throw new Error('Proto 构建存在错误，请查看上方错误汇总。');
  }
}