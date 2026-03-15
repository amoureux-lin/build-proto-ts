/**
 * 根据解析结果生成每个子游戏的 message_type.ts、msg_registry_<bundle>.ts、msg_registry_common.ts
 */

import fs from 'node:fs';
import path from 'node:path';

/**
 * 生成 message_type.ts
 * @param outputPath 输出路径，如 build/output/bato/message_type.ts
 * @param entries 该 bundle 的 { code, enumName } 列表（含 common 的则需合并去重）
 */
export function writeMessageTypeTs(outputPath, entries) {
  const byCode = {};
  for (const e of entries) {
    byCode[e.code] = e.enumName;
  }
  const sorted = Object.entries(byCode).sort((a, b) => Number(a[0]) - Number(b[0]));
  const lines = [
    '/**',
    ' * 消息类型枚举，与服务端 message_types.proto 一致，由构建脚本生成。',
    ' */',
    'export const MessageType = {',
    ...sorted.map(([code, name]) => `    ${name}: ${code},`),
    '} as const;',
    '',
    'export type MessageTypeValue = (typeof MessageType)[keyof typeof MessageType];',
    '',
  ];
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, lines.join('\n'), 'utf8');
}

/**
 * 生成 msg_registry_<bundleName>.ts 或 msg_registry_common.ts
 * @param outputPath 输出文件路径
 * @param registryConstName 常量名，如 BATO_MSG_REGISTRY、COMMON_MSG_REGISTRY
 * @param entries [{ code, enumName, messageName, moduleName }]
 * @param messageTypeImport 如 './message_type'
 */
export function writeMsgRegistryTs(outputPath, registryConstName, entries, messageTypeImport = './message_type') {
  if (entries.length === 0) return;

  const byModule = {};
  for (const e of entries) {
    if (!byModule[e.moduleName]) byModule[e.moduleName] = [];
    byModule[e.moduleName].push(e);
  }

  const moduleNames = Object.keys(byModule).sort();
  const importLines = [
    "/**",
    " * 由构建脚本根据 proto 生成，请勿手改。",
    " */",
    "import type { MessageMapping } from 'db://nexus-framework/index';",
    ...moduleNames.map((m) => `import { ${byModule[m].map((e) => e.messageName).join(', ')} } from './${m}';`),
    `import { MessageType } from '${messageTypeImport}';`,
    "",
    "/** 从 Writer 得到 Uint8Array（ts_proto 的 encode 返回 Writer） */",
    "function finish(w: { finish(): Uint8Array }): Uint8Array {",
    "    return w.finish();",
    "}",
    "",
    `export const ${registryConstName}: Record<number, MessageMapping> = {`,
  ];

  const entryLines = [];
  for (const e of entries) {
    entryLines.push(`    [MessageType.${e.enumName}]: {`);
    entryLines.push(`        decode: (buf) => ${e.messageName}.decode(buf),`);
    entryLines.push(`        encode: (msg) => finish(${e.messageName}.encode(msg as ${e.messageName})),`);
    entryLines.push(`        name: '${e.messageName}',`);
    entryLines.push(`    },`);
  }
  importLines.push(...entryLines);
  importLines.push('};');
  importLines.push('');

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, importLines.join('\n'), 'utf8');
}

/**
 * 为单个 bundle 生成三个 TS：message_type.ts、msg_registry_<bundle>.ts、msg_registry_common.ts
 * @param outputDir build/output/<bundleName>
 * @param bundleName common | bato | color | ...
 * @param bundleEntries 该 bundle 解析得到的 entries
 * @param commonEntries common bundle 的 entries（用于生成 msg_registry_common.ts）
 */
export function writeMessageTypeAndRegistriesForBundle(outputDir, bundleName, bundleEntries, commonEntries) {
  const registryConstName =
    bundleName === 'common' ? 'COMMON_MSG_REGISTRY' : `${bundleName.replace(/-/g, '_').toUpperCase()}_MSG_REGISTRY`;
  const commonRegistryConstName = 'COMMON_MSG_REGISTRY';

  const allCodesForType = [...bundleEntries];
  const commonCodesSet = new Set(commonEntries.map((e) => e.code));
  for (const e of commonEntries) {
    if (!allCodesForType.some((x) => x.code === e.code)) allCodesForType.push(e);
  }

  writeMessageTypeTs(path.join(outputDir, 'message_type.ts'), allCodesForType);

  writeMsgRegistryTs(
    path.join(outputDir, `msg_registry_${bundleName}.ts`),
    bundleName === 'common' ? commonRegistryConstName : registryConstName,
    bundleEntries,
    './message_type'
  );

  if (commonEntries.length > 0 && bundleName !== 'common') {
    writeMsgRegistryTs(
      path.join(outputDir, 'msg_registry_common.ts'),
      commonRegistryConstName,
      commonEntries,
      './message_type'
    );
  }
}
