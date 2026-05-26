import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { parseErrorProto } from '../src/errorCode/parseErrorProto.js';
import { syncPlannerMetadata, writeErrorCsv } from '../src/errorCode/writeErrorCsv.js';

const protoText = `
enum ErrorCode {
  SUCCESS = 0; // SUCCESS
  USER_COIN_INSUFFICIENT = 1107; // 用户带入金币余额不足
  PLAYER_COINS_NOT_ENOUGH = 2043; // 金币不足
  BATO_DRAW_CARD_FAILED = 4506; // 出牌失败
  COLOR_GAME_STATE_CANNOT_CANCEL_BET = 6004; // 当前游戏状态无法撤销
}
`;

test('parseErrorProto assigns client display types by error code', () => {
  const rows = parseErrorProto(protoText);

  assert.deepEqual(
    rows.map((row) => [row.code, row.type, row.extra]),
    [
      ['0', 'silent', 'SUCCESS'],
      ['1107', 'recharge', '用户带入金币余额不足'],
      ['2043', 'recharge', '金币不足'],
      ['4506', 'silent', '出牌失败'],
      ['6004', 'toast', '当前游戏状态无法撤销'],
    ]
  );
});

test('writeErrorCsv emits the client error code CSV format', () => {
  const rows = parseErrorProto(protoText);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'error-code-csv-'));
  const outputPath = path.join(dir, 'error_codes.csv');

  writeErrorCsv(outputPath, rows);

  const content = fs.readFileSync(outputPath, 'utf8');
  assert.equal(
    content,
    [
      '# 错误码配置表',
      '# code  — 服务端错误码（整数字符串）',
      '# type  — 展示方式：toast | popup | popup_close | recharge | silent',
      '# extra — 补充描述（仅供参考，实际显示文案由 i18n JSON 中以 code 为 key 的翻译决定）',
      'code,type,extra',
      '# ── 通用 ─────────────────────────────────────────────────────────────────────',
      '0,silent,SUCCESS',
      '# ── 认证 ─────────────────────────────────────────────────────────────────────',
      '1107,recharge,用户带入金币余额不足',
      '# ── 房间 / 公共 ──────────────────────────────────────────────────────────────',
      '2043,recharge,金币不足',
      '# ── Bato ──────────────────────────────────────────────────────────────────────',
      '4506,silent,出牌失败',
      '# ── Color ─────────────────────────────────────────────────────────────────────',
      '6004,toast,当前游戏状态无法撤销',
      '',
    ].join('\n')
  );
});

test('syncPlannerMetadata reads commented client CSV files', () => {
  const rows = parseErrorProto(protoText);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'error-code-planner-'));
  const plannerPath = path.join(dir, 'planner.csv');

  fs.writeFileSync(
    plannerPath,
    [
      '# 错误码配置表',
      'code,type,extra',
      '# ── 认证 ─────────────────────────────────────────────────────────────────────',
      '1107,popup,策划覆盖文案',
      '',
    ].join('\n'),
    'utf8'
  );

  const synced = syncPlannerMetadata(rows, plannerPath);
  const syncedPlannerContent = fs.readFileSync(plannerPath, 'utf8');

  assert.equal(synced.find((row) => row.code === '1107').type, 'popup');
  assert.equal(synced.find((row) => row.code === '1107').extra, '策划覆盖文案');
  assert.equal((syncedPlannerContent.match(/^code,type,extra$/gm) ?? []).length, 1);
  assert.equal(syncedPlannerContent.includes('# ── 认证 ─────────────────────────────────────────────────────────────────────,,'), false);
});

test('syncPlannerMetadata converts legacy numeric display types', () => {
  const rows = parseErrorProto(protoText);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'error-code-legacy-planner-'));
  const plannerPath = path.join(dir, 'planner.csv');

  fs.writeFileSync(
    plannerPath,
    [
      'code,type,message,desc,key',
      '4506,0,"","出牌失败","BATO_DRAW_CARD_FAILED"',
      '6004,1,"6004","当前游戏状态无法撤销","COLOR_GAME_STATE_CANNOT_CANCEL_BET"',
      '1107,3,"1107","用户带入金币余额不足","USER_COIN_INSUFFICIENT"',
      '',
    ].join('\n'),
    'utf8'
  );

  const synced = syncPlannerMetadata(rows, plannerPath);

  assert.equal(synced.find((row) => row.code === '4506').type, 'silent');
  assert.equal(synced.find((row) => row.code === '6004').type, 'toast');
  assert.equal(synced.find((row) => row.code === '1107').type, 'recharge');
});

test('syncPlannerMetadata creates planner CSV when missing', () => {
  const rows = parseErrorProto(protoText);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'error-code-missing-planner-'));
  const plannerPath = path.join(dir, 'error_codes.csv');

  const synced = syncPlannerMetadata(rows, plannerPath);

  assert.equal(synced.length, rows.length);
  assert.match(fs.readFileSync(plannerPath, 'utf8'), /1107,recharge,用户带入金币余额不足/);
});
