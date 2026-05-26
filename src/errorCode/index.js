import fs from 'node:fs';
import path from 'node:path';

import { parseErrorProto, parseWsCloseProto } from './parseErrorProto.js';
import { getWsCloseCsvOptions, syncPlannerMetadata, writeErrorCsv, writeWsCloseCsv } from './writeErrorCsv.js';

export function runErrorCodePipeline(context, collector) {
  if (!context.config.errorCode.enabled) {
    return;
  }

  const {
    errorSourceProtoPath,
    errorCodeWorkspaceDir,
    outputCsvPath,
    plannerCsvPath,
    wsCloseSourceProtoPath,
    wsCloseOutputCsvPath,
    wsClosePlannerCsvPath,
  } = context.paths;
  if (!fs.existsSync(errorSourceProtoPath)) {
    collector.addWarning(`错误码 proto 不存在，跳过导出: ${errorSourceProtoPath}`);
    return;
  }

  fs.mkdirSync(errorCodeWorkspaceDir, { recursive: true });
  const copiedProtoPath = path.join(errorCodeWorkspaceDir, `${context.config.errorCode.protoName}.proto`);
  fs.copyFileSync(errorSourceProtoPath, copiedProtoPath);

  const protoContent = fs.readFileSync(copiedProtoPath, 'utf8');
  let rows = parseErrorProto(protoContent);

  if (context.config.errorCode.syncPlanner) {
    rows = syncPlannerMetadata(rows, plannerCsvPath);
  }

  writeErrorCsv(outputCsvPath, rows);

  if (!wsCloseSourceProtoPath || !fs.existsSync(wsCloseSourceProtoPath)) {
    return;
  }

  const wsCloseProtoName = context.config.errorCode.wsCloseProtoName ?? 'ws_err_code';
  const copiedWsCloseProtoPath = path.join(errorCodeWorkspaceDir, `${wsCloseProtoName}.proto`);
  fs.copyFileSync(wsCloseSourceProtoPath, copiedWsCloseProtoPath);

  const wsCloseProtoContent = fs.readFileSync(copiedWsCloseProtoPath, 'utf8');
  let wsCloseRows = parseWsCloseProto(wsCloseProtoContent);
  if (context.config.errorCode.syncPlanner) {
    wsCloseRows = syncPlannerMetadata(wsCloseRows, wsClosePlannerCsvPath, getWsCloseCsvOptions());
  }
  writeWsCloseCsv(wsCloseOutputCsvPath, wsCloseRows);
}
