import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { parseWsCloseProto } from '../src/errorCode/parseErrorProto.js';
import { runErrorCodePipeline } from '../src/errorCode/index.js';
import { writeWsCloseCsv } from '../src/errorCode/writeErrorCsv.js';

const protoText = `
enum WsErrCode {
  WsErrCodeInvalid = 0; // 无效错误
  WsErrCodeAuthFailed = 4400; // 认证失败
  WsErrCodeConnectionReplaced = 4501; // 连接被新连接替换
  WsErrCodeJoinRoomRPCFailed = 4513; // JoinRoom RPC 失败
}
`;

test('parseWsCloseProto builds websocket onClose message rows', () => {
  const rows = parseWsCloseProto(protoText);

  assert.deepEqual(
    rows.map((row) => [row.code, row.type, row.extra]),
    [
      ['0', 'silent', '无效错误'],
      ['4400', 'popup_close', '认证失败'],
      ['4501', 'popup_close', '连接被新连接替换'],
      ['4513', 'popup_close', 'JoinRoom RPC 失败'],
    ]
  );
});

test('writeWsCloseCsv emits websocket onClose CSV sections', () => {
  const rows = parseWsCloseProto(protoText);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ws-close-code-csv-'));
  const outputPath = path.join(dir, 'ws_err_code.csv');

  writeWsCloseCsv(outputPath, rows);

  const content = fs.readFileSync(outputPath, 'utf8');
  assert.equal(
    content,
    [
      '# WS onClose 消息配置表',
      '# code  — WebSocket close code（整数字符串）',
      '# type  — 展示方式：toast | popup | popup_close | recharge | silent',
      '# extra — 补充描述（仅供参考，实际显示文案由 i18n JSON 中以 code 为 key 的翻译决定）',
      'code,type,extra',
      '# ── 无效 / 占位 ───────────────────────────────────────────────────────────────',
      '0,silent,无效错误',
      '# ── 认证与握手 ───────────────────────────────────────────────────────────────',
      '4400,popup_close,认证失败',
      '# ── 连接控制 ─────────────────────────────────────────────────────────────────',
      '4501,popup_close,连接被新连接替换',
      '# ── 加入房间链路 ─────────────────────────────────────────────────────────────',
      '4513,popup_close,JoinRoom RPC 失败',
      '',
    ].join('\n')
  );
});

test('runErrorCodePipeline writes websocket onClose CSV when ws_err_code proto exists', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ws-close-pipeline-'));
  const sourceDir = path.join(dir, 'source');
  const workspaceDir = path.join(dir, 'workspace');
  const outputDir = path.join(dir, 'output');
  fs.mkdirSync(sourceDir, { recursive: true });

  fs.writeFileSync(path.join(sourceDir, 'error_codes.proto'), 'enum ErrorCode { SUCCESS = 0; }', 'utf8');
  fs.writeFileSync(path.join(sourceDir, 'ws_err_code.proto'), protoText, 'utf8');

  const context = {
    config: {
      errorCode: {
        enabled: true,
        protoName: 'error_codes',
        wsCloseProtoName: 'ws_err_code',
        syncPlanner: false,
      },
    },
    paths: {
      errorSourceProtoPath: path.join(sourceDir, 'error_codes.proto'),
      wsCloseSourceProtoPath: path.join(sourceDir, 'ws_err_code.proto'),
      errorCodeWorkspaceDir: workspaceDir,
      outputCsvPath: path.join(outputDir, 'error_codes.csv'),
      wsCloseOutputCsvPath: path.join(outputDir, 'ws_err_code.csv'),
      plannerCsvPath: null,
    },
  };
  const collector = {
    addWarning(message) {
      throw new Error(message);
    },
  };

  runErrorCodePipeline(context, collector);

  assert.equal(fs.existsSync(path.join(workspaceDir, 'ws_err_code.proto')), true);
  assert.match(
    fs.readFileSync(path.join(outputDir, 'ws_err_code.csv'), 'utf8'),
    /4501,popup_close,连接被新连接替换/
  );
});
