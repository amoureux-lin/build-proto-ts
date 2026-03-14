import fs from 'node:fs';
import path from 'node:path';

import { parseErrorProto } from './parseErrorProto.js';
import { syncPlannerMetadata, writeErrorCsv } from './writeErrorCsv.js';

export function runErrorCodePipeline(context, collector) {
  if (!context.config.errorCode.enabled) {
    return;
  }

  const { errorSourceProtoPath, errorCodeWorkspaceDir, outputCsvPath, plannerCsvPath } = context.paths;
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
}
