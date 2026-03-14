import fs from 'node:fs';
import path from 'node:path';
import { runtimeAssets } from './runtimeAssets.js';

function getExecutableSignature() {
  const stat = fs.statSync(process.execPath);
  return `${stat.size}:${stat.mtimeMs}`;
}

function readMarker(markerPath) {
  if (!fs.existsSync(markerPath)) return null;

  try {
    return JSON.parse(fs.readFileSync(markerPath, 'utf8'));
  } catch (_) {
    return null;
  }
}

export function ensureSeaRuntimeAssets(paths) {
  const assetEntries = Object.entries(runtimeAssets);
  if (!assetEntries.length) return;

  const markerPath = path.join(paths.runtimeDir, '.asset-marker.json');
  const currentSignature = getExecutableSignature();
  const marker = readMarker(markerPath);
  if (
    marker?.signature === currentSignature &&
    fs.existsSync(paths.runtimeNodeModulesDir) &&
    fs.existsSync(paths.runtimeNodeBinaryPath)
  ) {
    return;
  }

  fs.rmSync(paths.runtimeDir, { recursive: true, force: true });
  fs.mkdirSync(paths.runtimeDir, { recursive: true });

  for (const [relativePath, base64Content] of assetEntries) {
    const outputPath = path.join(paths.runtimeDir, relativePath);

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, Buffer.from(base64Content, 'base64'));
  }

  fs.writeFileSync(
    markerPath,
    JSON.stringify(
      {
        signature: currentSignature,
        assetCount: assetEntries.length,
      },
      null,
      2
    ),
    'utf8'
  );
}
