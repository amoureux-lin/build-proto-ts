export function parseErrorProto(protoText) {
  const lines = protoText.trim().split('\n');
  const rows = [];
  const pattern = /^\s*(\w+)\s*=\s*(\d+)\s*;\s*(?:\/\/\s*(.*))?$/;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\r$/, '');
    const match = line.match(pattern);
    if (!match) continue;

    rows.push({
      code: match[2],
      type: '0',
      message: '',
      desc: match[3] || '',
      key: match[1],
    });
  }

  return rows;
}
