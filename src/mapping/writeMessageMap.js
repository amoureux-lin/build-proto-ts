import fs from 'node:fs';
import path from 'node:path';

function formatJson(json, options = {}) {
  let formatted = '';
  let pad = 0;
  const paddingUnit = '    ';
  const normalizedOptions = {
    newlineAfterColonIfBeforeBraceOrBracket: options.newlineAfterColonIfBeforeBraceOrBracket === true,
    spaceAfterColon: options.spaceAfterColon !== false,
  };

  let normalizedJson = typeof json === 'string' ? JSON.stringify(JSON.parse(json)) : JSON.stringify(json);
  normalizedJson = normalizedJson.replace(/([\{\}])/g, '\r\n$1\r\n');
  normalizedJson = normalizedJson.replace(/([\[\]])/g, '\r\n$1\r\n');
  normalizedJson = normalizedJson.replace(/(\,)/g, '$1\r\n');
  normalizedJson = normalizedJson.replace(/(\r\n\r\n)/g, '\r\n');
  normalizedJson = normalizedJson.replace(/\r\n\,/g, ',');

  if (!normalizedOptions.newlineAfterColonIfBeforeBraceOrBracket) {
    normalizedJson = normalizedJson.replace(/\:\r\n\{/g, ':{');
    normalizedJson = normalizedJson.replace(/\:\r\n\[/g, ':[');
  }

  if (normalizedOptions.spaceAfterColon) {
    normalizedJson = normalizedJson.replace(/\:/g, ':');
  }

  for (const node of normalizedJson.split('\r\n')) {
    let indent = 0;
    if (node.match(/\{$/) || node.match(/\[$/)) {
      indent = 1;
    } else if ((node.match(/\}/) || node.match(/\]/)) && pad !== 0) {
      pad -= 1;
    }

    let padding = '';
    for (let index = 0; index < pad; index += 1) {
      padding += paddingUnit;
    }

    formatted += `${padding}${node}\r\n`;
    pad += indent;
  }

  return formatted;
}

export function writeMessageMap(outputPath, bundleName, data) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  const content = `let ${bundleName}Msg = ${formatJson(JSON.stringify(data))} export default ${bundleName}Msg;`;
  fs.writeFileSync(outputPath, content, 'utf8');
}
