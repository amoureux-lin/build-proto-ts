import fs from 'node:fs';
import path from 'node:path';

function cleanServerMessageName(value) {
  return value
    .replace('(', '')
    .replace('MessageType:', '')
    .replace(')', '')
    .replace('（', '')
    .replace('）', '')
    .replace(/ |\t|[\u4e00-\u9fa5]|{|}|;|，|：|、|-|\/|\(/g, '');
}

function findNextMessageLine(lines, startIndex) {
  for (let index = startIndex; index < lines.length; index += 1) {
    if (lines[index] && lines[index].includes('message')) return index;
  }
  return -1;
}

export function extractProtoMessageMap(protoPath, msgCodeMap, collector) {
  if (!fs.existsSync(protoPath)) {
    collector.addWarning(`Proto 文件不存在，跳过消息扫描: ${protoPath}`);
    return {};
  }

  const lines = fs.readFileSync(protoPath, 'utf8').split('\n');
  const messageMap = {};

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.includes('//') || !line.includes('MessageType:')) continue;

    const nextMessageIndex = findNextMessageLine(lines, index + 1);
    if (nextMessageIndex === -1) continue;

    let messageName = lines[nextMessageIndex].replace('message', '');
    messageName = messageName.replace(/ |\t|\r|\n|[\u4e00-\u9fa5]|}|{|(|)|,/g, '');
    if (!messageName) continue;

    const messageTypePart = line.split('MessageType:')[1];
    if (!messageTypePart) continue;

    const serverNames = messageTypePart.split('(')[0]?.trim().split('|') ?? [];
    for (const rawName of serverNames) {
      const serverName = cleanServerMessageName(rawName.trim());
      if (!serverName || serverName.length < 5) continue;

      const msgCode = msgCodeMap[serverName];
      if (msgCode) {
        messageMap[msgCode] = messageName;
      } else {
        collector.addWarning(`${path.basename(protoPath)} 中的 ${messageName} 无法找到对应服务消息 ${serverName}`);
      }
    }
  }

  return messageMap;
}

export function scanBundleMessages(bundle, protoDir, msgCodeMap, collector) {
  if (!fs.existsSync(protoDir)) {
    collector.addError(`Proto 目录不存在: ${protoDir}`);
    return {};
  }

  const files = fs.readdirSync(protoDir).filter((file) => file.endsWith('.proto'));
  const protoFiles =
    bundle.name !== 'common' && bundle.name !== 'gateway'
      ? files.filter((file) => file === `${bundle.name}.proto`)
      : files;

  const result = {};
  for (const protoFile of protoFiles) {
    Object.assign(result, extractProtoMessageMap(path.join(protoDir, protoFile), msgCodeMap, collector));
  }

  return result;
}
