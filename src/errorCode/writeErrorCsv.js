import fs from 'node:fs';
import path from 'node:path';

function escapeCsvField(value) {
  const text = String(value ?? '');
  if (!/[",\r\n]/.test(text)) return text;
  return `"${text.replace(/"/g, '""')}"`;
}

function parseCsvLine(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === ',' && !inQuotes) {
      fields.push(current);
      current = '';
      continue;
    }

    current += char;
  }

  fields.push(current);
  return fields;
}

function normalizeDisplayType(type) {
  const value = String(type ?? '').trim();
  const legacyTypes = {
    0: 'silent',
    1: 'toast',
    2: 'popup_close',
    3: 'recharge',
    4: 'popup',
  };

  return legacyTypes[value] ?? value;
}

const ERROR_CODE_HEADER = [
    '# 错误码配置表',
    '# code  — 服务端错误码（整数字符串）',
    '# type  — 展示方式：toast | popup | popup_close | recharge | silent',
    '# extra — 补充描述（仅供参考，实际显示文案由 i18n JSON 中以 code 为 key 的翻译决定）',
    'code,type,extra',
];

const WS_CLOSE_HEADER = [
  '# WS onClose 消息配置表',
  '# code  — WebSocket close code（整数字符串）',
  '# type  — 展示方式：toast | popup | popup_close | recharge | silent',
  '# extra — 补充描述（仅供参考，实际显示文案由 i18n JSON 中以 code 为 key 的翻译决定）',
  'code,type,extra',
];

function serializeRows(rows, options = {}) {
  const lines = [...(options.header ?? ERROR_CODE_HEADER)];
  const getSection = options.getSection ?? getErrorSectionByCode;
  let currentSection = null;

  for (const row of rows) {
    const section = getSection(row.code);
    if (section && section !== currentSection) {
      lines.push(section);
      currentSection = section;
    }
    lines.push([row.code, normalizeDisplayType(row.type), escapeCsvField(row.extra)].join(','));
  }

  return `${lines.join('\n')}\n`;
}

function getErrorSectionByCode(code) {
  const numericCode = Number(code);
  if (Number.isNaN(numericCode)) return null;

  if (numericCode <= 999) return '# ── 通用 ─────────────────────────────────────────────────────────────────────';
  if (numericCode <= 1099) return '# ── 连接 ─────────────────────────────────────────────────────────────────────';
  if (numericCode <= 1199) return '# ── 认证 ─────────────────────────────────────────────────────────────────────';
  if (numericCode <= 1999) return '# ── 参数 ─────────────────────────────────────────────────────────────────────';
  if (numericCode <= 2199) return '# ── 房间 / 公共 ──────────────────────────────────────────────────────────────';
  if (numericCode <= 2299) return '# ── 开麦 ─────────────────────────────────────────────────────────────────────';
  if (numericCode <= 2999) return '# ── 游戏状态 ─────────────────────────────────────────────────────────────────';
  if (numericCode <= 3499) return '# ── 聊天 ─────────────────────────────────────────────────────────────────────';
  if (numericCode <= 3999) return '# ── Solitaire ────────────────────────────────────────────────────────────────';
  if (numericCode <= 4499) return '# ── Mines ─────────────────────────────────────────────────────────────────────';
  if (numericCode <= 4999) return '# ── Bato ──────────────────────────────────────────────────────────────────────';
  if (numericCode <= 5499) return '# ── Tongits ───────────────────────────────────────────────────────────────────';
  if (numericCode <= 5999) return '# ── Unleash ───────────────────────────────────────────────────────────────────';
  if (numericCode <= 6499) return '# ── Color ─────────────────────────────────────────────────────────────────────';
  if (numericCode <= 6999) return '# ── Pusoy ─────────────────────────────────────────────────────────────────────';
  if (numericCode <= 7999) return '# ── Texas ─────────────────────────────────────────────────────────────────────';
  return '# ── Bingoshow ─────────────────────────────────────────────────────────────────';
}

function getWsCloseSectionByCode(code) {
  const numericCode = Number(code);
  if (Number.isNaN(numericCode)) return null;

  if (numericCode === 0) return '# ── 无效 / 占位 ───────────────────────────────────────────────────────────────';
  if (numericCode >= 4400 && numericCode <= 4410) return '# ── 认证与握手 ───────────────────────────────────────────────────────────────';
  if (numericCode === 4429 || (numericCode >= 4501 && numericCode <= 4507)) {
    return '# ── 连接控制 ─────────────────────────────────────────────────────────────────';
  }
  if (numericCode >= 4508 && numericCode <= 4517) return '# ── 加入房间链路 ─────────────────────────────────────────────────────────────';
  return '# ── 其他 WS onClose ─────────────────────────────────────────────────────────';
}

function parseCsvFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== '' && !line.startsWith('#'));
  if (lines.length <= 1) return [];

  const header = parseCsvLine(lines[0]);
  const codeIndex = header.indexOf('code');
  const typeIndex = header.indexOf('type');
  const extraIndex = header.indexOf('extra');
  const descIndex = header.indexOf('desc');
  const messageIndex = header.indexOf('message');

  return lines.slice(1).map((line) => {
    const fields = parseCsvLine(line);
    const code = fields[codeIndex] ?? '';
    const type = normalizeDisplayType(fields[typeIndex]);
    const extra =
      fields[extraIndex] ??
      fields[descIndex] ??
      fields[messageIndex] ??
      '';
    return { code, type, extra };
  });
}

export function syncPlannerMetadata(rows, plannerCsvPath, options = {}) {
  if (!plannerCsvPath) {
    return rows;
  }

  if (!fs.existsSync(plannerCsvPath)) {
    fs.mkdirSync(path.dirname(plannerCsvPath), { recursive: true });
    fs.writeFileSync(plannerCsvPath, serializeRows(rows, options), 'utf8');
    return rows;
  }

  const plannerRows = parseCsvFile(plannerCsvPath);
  const plannerMap = new Map(plannerRows.map((row) => [row.code, row]));

  const mergedRows = rows.map((row) => {
    const planner = plannerMap.get(row.code);
    if (!planner) return row;

    return {
      ...row,
      type: planner.type || row.type,
      extra: planner.extra || row.extra,
    };
  });

  const mergedCodes = new Set(plannerRows.map((row) => row.code));
  const missingRows = mergedRows.filter((row) => !mergedCodes.has(row.code));
  if (missingRows.length) {
    fs.mkdirSync(path.dirname(plannerCsvPath), { recursive: true });
    fs.writeFileSync(plannerCsvPath, serializeRows([...plannerRows, ...missingRows], options), 'utf8');
  }

  return mergedRows;
}

export function writeErrorCsv(outputPath, rows) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, serializeRows(rows), 'utf8');
}

export function writeWsCloseCsv(outputPath, rows) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(
    outputPath,
    serializeRows(rows, getWsCloseCsvOptions()),
    'utf8'
  );
}

export function getErrorCodeCsvOptions() {
  return {
    header: ERROR_CODE_HEADER,
    getSection: getErrorSectionByCode,
  };
}

export function getWsCloseCsvOptions() {
  return {
    header: WS_CLOSE_HEADER,
    getSection: getWsCloseSectionByCode,
  };
}
