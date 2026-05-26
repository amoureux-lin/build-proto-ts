const CLIENT_DISPLAY_TYPE_BY_CODE = new Map([
  ['500', 'popup_close'],
  ['501', 'popup_close'],
  ['502', 'toast'],
  ['1001', 'popup_close'],
  ['1002', 'popup_close'],
  ['1004', 'popup_close'],
  ['1005', 'popup'],
  ['1100', 'popup_close'],
  ['1101', 'popup_close'],
  ['1102', 'popup_close'],
  ['1103', 'popup_close'],
  ['1104', 'popup_close'],
  ['1105', 'popup_close'],
  ['1106', 'popup_close'],
  ['1107', 'recharge'],
  ['2009', 'toast'],
  ['2010', 'toast'],
  ['2018', 'toast'],
  ['2019', 'toast'],
  ['2026', 'toast'],
  ['2035', 'toast'],
  ['2043', 'recharge'],
  ['2202', 'toast'],
  ['2204', 'toast'],
  ['2205', 'toast'],
  ['2207', 'toast'],
  ['2208', 'toast'],
  ['2210', 'toast'],
  ['2302', 'toast'],
  ['3506', 'toast'],
  ['3508', 'toast'],
  ['3509', 'toast'],
  ['4017', 'toast'],
  ['4018', 'toast'],
  ['4020', 'toast'],
  ['4021', 'toast'],
  ['4508', 'toast'],
  ['4509', 'toast'],
  ['6004', 'toast'],
  ['6006', 'toast'],
]);

function getClientDisplayType(code) {
  return CLIENT_DISPLAY_TYPE_BY_CODE.get(code) ?? 'silent';
}

function getWsCloseDisplayType(code) {
  return code === '0' ? 'silent' : 'popup_close';
}

function normalizeExtra(extra, code, key) {
  const text = (extra || (code === '0' ? key : '')).trim();
  return text.replace(/[，,]/g, '');
}

function parseEnumProto(protoText, getDisplayType) {
  const lines = protoText.trim().split('\n');
  const rows = [];
  const pattern = /^\s*(\w+)\s*=\s*(\d+)\s*;\s*(?:\/\/\s*(.*))?$/;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\r$/, '');
    const match = line.match(pattern);
    if (!match) continue;

    rows.push({
      code: match[2],
      type: getDisplayType(match[2]),
      extra: normalizeExtra(match[3], match[2], match[1]),
      key: match[1],
    });
  }

  return rows;
}

export function parseErrorProto(protoText) {
  return parseEnumProto(protoText, getClientDisplayType);
}

export function parseWsCloseProto(protoText) {
  return parseEnumProto(protoText, getWsCloseDisplayType);
}
