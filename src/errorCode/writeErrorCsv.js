import fs from 'node:fs';
import path from 'node:path';

function escapeCsvField(value) {
  return `"${String(value ?? '').replace(/"/g, '""')}"`;
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

function serializeRows(rows) {
  const lines = ['code,type,message,desc,key'];

  for (const row of rows) {
    lines.push(
      [
        row.code,
        row.type,
        escapeCsvField(row.message),
        escapeCsvField(row.desc),
        escapeCsvField(row.key),
      ].join(',')
    );
  }

  return `${lines.join('\n')}\n`;
}

function parseCsvFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/).filter((line) => line.trim() !== '');
  if (lines.length <= 1) return [];

  return lines.slice(1).map((line) => {
    const [code = '', type = '', message = '', desc = '', key = ''] = parseCsvLine(line);
    return { code, type, message, desc, key };
  });
}

export function syncPlannerMetadata(rows, plannerCsvPath) {
  if (!plannerCsvPath || !fs.existsSync(plannerCsvPath)) {
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
      message: planner.message || row.message,
    };
  });

  const mergedCodes = new Set(plannerRows.map((row) => row.code));
  const missingRows = mergedRows.filter((row) => !mergedCodes.has(row.code));
  if (missingRows.length) {
    fs.mkdirSync(path.dirname(plannerCsvPath), { recursive: true });
    fs.writeFileSync(plannerCsvPath, serializeRows([...plannerRows, ...missingRows]), 'utf8');
  }

  return mergedRows;
}

export function writeErrorCsv(outputPath, rows) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, serializeRows(rows), 'utf8');
}
