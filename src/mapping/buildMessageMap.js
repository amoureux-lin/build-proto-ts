function findRequestCode(codeToMsg, responseCode, keyword) {
  for (const [code, messageName] of Object.entries(codeToMsg)) {
    const numericCode = Number.parseInt(code, 10);
    if (messageName.includes(keyword) && numericCode + 1 === responseCode) {
      return code;
    }
  }

  return null;
}

export function buildMessageMap(codeToMsg) {
  const msgToCode = {};
  const mapTable = {};

  for (const [code, messageName] of Object.entries(codeToMsg)) {
    msgToCode[messageName] = code;
  }

  for (const [code, messageName] of Object.entries(codeToMsg)) {
    const numericCode = Number.parseInt(code, 10);
    if (messageName.includes('Req') || messageName.includes('Ping')) continue;

    let requestCode = null;
    if (messageName.includes('Res')) {
      requestCode = findRequestCode(codeToMsg, numericCode, 'Req');
    } else if (messageName.includes('Pong')) {
      requestCode = findRequestCode(codeToMsg, numericCode, 'Ping');
    }

    mapTable[code] = requestCode ?? code;
  }

  return {
    CodeToMsg: codeToMsg,
    MsgToCode: msgToCode,
    MapTable: mapTable,
  };
}
