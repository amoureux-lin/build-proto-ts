import fs from 'node:fs';
import path from 'node:path';

const CONFIG_FILE_NAME = 'protoConfig.json';

function getConfigCandidates() {
  const candidates = [];
  const entryArg = process.argv[1];

  if (entryArg) {
    const entryPath = path.resolve(process.cwd(), entryArg);
    const entryDir = path.dirname(entryPath);
    candidates.push(path.join(entryDir, CONFIG_FILE_NAME));
    candidates.push(path.join(entryDir, 'src', CONFIG_FILE_NAME));
  }

  if (process.execPath) {
    candidates.push(path.join(path.dirname(process.execPath), CONFIG_FILE_NAME));
  }

  candidates.push(path.resolve(process.cwd(), CONFIG_FILE_NAME));
  candidates.push(path.resolve(process.cwd(), 'src', CONFIG_FILE_NAME));

  return [...new Set(candidates)];
}

export function resolveProtoConfigPath() {
  for (const candidate of getConfigCandidates()) {
    if (fs.existsSync(candidate)) return candidate;
  }

  throw new Error(
    `未找到 ${CONFIG_FILE_NAME}。请确保开发环境存在 src/${CONFIG_FILE_NAME}，或将 ${CONFIG_FILE_NAME} 放在 exe 同级目录。`
  );
}

export function loadProtoConfig() {
  const configPath = resolveProtoConfigPath();
  const raw = fs.readFileSync(configPath, 'utf8');

  try {
    return {
      configPath,
      config: JSON.parse(raw),
    };
  } catch (error) {
    throw new Error(`解析配置文件失败: ${configPath}\n${error.message}`);
  }
}
