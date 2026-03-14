import fs from 'node:fs';

export function patchProtoJs(outputPath, bundleName) {
  let content = fs.readFileSync(outputPath, 'utf8');
  content = content.replace('var $protobuf = require("protobufjs/minimal");', 'var $protobuf = require("protobufjs");');

  if (bundleName !== 'common') {
    content = content.replace(/(\$root\.common\s*=\s*\(function\(\)\s*\{[\s\S]*?return\s+common;\s*\}\)\(\);)/g, '');
  }

  fs.writeFileSync(outputPath, content, 'utf8');
}
