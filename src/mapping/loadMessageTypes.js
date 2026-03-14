import fs from 'node:fs';

export function loadMessageTypes(messageTypesPath, collector) {
  if (!fs.existsSync(messageTypesPath)) {
    collector.addError(`消息类型文件不存在: ${messageTypesPath}`);
    return {};
  }

  const file = fs.readFileSync(messageTypesPath, 'utf8');
  const lines = file.split('\n');
  const result = {};

  for (const line of lines) {
    if (!line.includes('=')) continue;

    const parts = line.split('=');
    if (parts.length < 2) continue;

    const name = parts[0].replace(/ |\t/g, '');
    const code = Number.parseInt(parts[1].split(';')[0].replace(/[^0-9]/g, ''), 10);

    if (!name || Number.isNaN(code)) continue;
    result[name] = code;
  }

  return result;
}
