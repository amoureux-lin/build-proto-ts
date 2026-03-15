/**
 * 仅通过解析 proto 一步得到：枚举表、各 bundle 的 (code, enumName, messageName, moduleName)。
 * 不依赖 loadMessageTypes / codeToMsg 链。
 */

import fs from 'node:fs';
import path from 'node:path';

/**
 * 解析 message_types.proto，得到 enum 名 ↔ 码。
 * @param {string} messageTypesPath
 * @param {{ addError: (msg: string) => void }} [collector] 可选，文件不存在时上报错误
 * @returns {{ enumNameToCode: Record<string, number>, codeToEnumName: Record<number, string> }}
 */
export function parseMessageTypesProto(messageTypesPath, collector) {
  const enumNameToCode = {};
  if (!fs.existsSync(messageTypesPath)) {
    if (collector) collector.addError(`消息类型文件不存在: ${messageTypesPath}`);
    return { enumNameToCode, codeToEnumName: {} };
  }

  const content = fs.readFileSync(messageTypesPath, 'utf8');
  const lines = content.split('\n');

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.includes('=') || trimmed.startsWith('//')) continue;
    const eq = trimmed.indexOf('=');
    const namePart = trimmed.slice(0, eq).replace(/\s/g, '');
    const valuePart = trimmed.slice(eq + 1);
    const numMatch = valuePart.match(/\d+/);
    if (!namePart || !numMatch) continue;
    const code = Number.parseInt(numMatch[0], 10);
    enumNameToCode[namePart] = code;
  }

  const codeToEnumName = {};
  for (const [name, code] of Object.entries(enumNameToCode)) {
    codeToEnumName[code] = name;
  }
  return { enumNameToCode, codeToEnumName };
}

function findNextMessageLine(lines, startIndex) {
  for (let i = startIndex; i < lines.length; i += 1) {
    const line = lines[i];
    if (line && line.trim().startsWith('message ')) return i;
  }
  return -1;
}

/**
 * 从一行注释中解析 MessageType: ENUM_NAME 或 ENUM_NAME (CODE)
 * @returns {{ enumName: string, code?: number } | null }
 */
function parseMessageTypeComment(line, enumNameToCode) {
  if (!line.includes('MessageType:')) return null;
  const part = line.split('MessageType:')[1];
  if (!part) return null;
  const trimmed = part.trim();
  const paren = trimmed.indexOf('(');
  let enumName;
  let code;
  if (paren >= 0) {
    enumName = trimmed.slice(0, paren).trim().split('|')[0].trim();
    const numMatch = trimmed.slice(paren).match(/\d+/);
    if (numMatch) code = Number.parseInt(numMatch[0], 10);
  } else {
    enumName = trimmed.split('|')[0].trim();
  }
  enumName = enumName.replace(/\s/g, '');
  if (!enumName || enumName.length < 2) return null;
  if (code == null && enumNameToCode[enumName] != null) code = enumNameToCode[enumName];
  if (code == null) return null;
  return { enumName, code };
}

function extractMessageName(line) {
  const m = line.trim().match(/message\s+(\w+)/);
  return m ? m[1] : '';
}

/**
 * 解析单个 proto 文件，得到 { code, enumName, messageName, moduleName } 列表。
 * moduleName = 文件名去掉 .proto
 */
function parseProtoFileForMapping(protoPath, enumNameToCode) {
  const entries = [];
  if (!fs.existsSync(protoPath)) return entries;

  const moduleName = path.basename(protoPath, '.proto');
  const lines = fs.readFileSync(protoPath, 'utf8').split('\n');

  for (let i = 0; i < lines.length; i += 1) {
    const parsed = parseMessageTypeComment(lines[i], enumNameToCode);
    if (!parsed) continue;

    const nextIdx = findNextMessageLine(lines, i + 1);
    if (nextIdx === -1) continue;

    const messageName = extractMessageName(lines[nextIdx]);
    if (!messageName) continue;

    entries.push({
      code: parsed.code,
      enumName: parsed.enumName,
      messageName,
      moduleName,
    });
  }
  return entries;
}

/**
 * 解析某个 bundle 目录下用于映射的 proto，返回 (code, enumName, messageName, moduleName) 列表。
 * 与现有 scan 规则一致：common/gateway 扫所有 .proto，其它只扫 <bundle>.proto。
 */
export function parseBundleProtosForMapping(protoDir, bundleName, enumNameToCode) {
  const entries = [];
  if (!fs.existsSync(protoDir)) return entries;

  const files = fs.readdirSync(protoDir).filter((f) => f.endsWith('.proto'));
  const toScan =
    bundleName === 'common' || bundleName === 'gateway'
      ? files
      : files.filter((f) => f === `${bundleName}.proto`);

  for (const f of toScan) {
    const list = parseProtoFileForMapping(path.join(protoDir, f), enumNameToCode);
    for (const e of list) entries.push(e);
  }
  return entries;
}
