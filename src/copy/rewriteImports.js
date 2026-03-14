import fs from 'node:fs';
import path from 'node:path';

const API_IMPORT_PATTERN = /import\s+"api\/([^/]+)\/([^/]+)\/proto\/([^"]+)";/g;

function toPosix(relativePath) {
  return relativePath.replace(/\\/g, '/');
}

export function rewriteProtoImports(filePath, protoWorkspaceDir) {
  const currentDir = path.dirname(filePath);
  const original = fs.readFileSync(filePath, 'utf8');

  const rewritten = original.replace(API_IMPORT_PATTERN, (_, dir, _version, fileName) => {
    const targetPath = path.join(protoWorkspaceDir, dir, fileName);
    let relativePath = toPosix(path.relative(currentDir, targetPath));
    if (!relativePath.startsWith('.')) relativePath = `./${relativePath}`;
    return `import "${relativePath}";`;
  });

  if (rewritten !== original) {
    fs.writeFileSync(filePath, rewritten, 'utf8');
  }
}
