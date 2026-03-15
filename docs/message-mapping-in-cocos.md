# 消息映射在 Cocos Creator 中的使用讨论（不修改构建代码）

当前产物有两类东西：

- **Proto 生成 TS**（如 `bato.ts`）：每个 message 有 `MessageName.decode(bytes)`、`MessageName.encode(msg)`，类型安全。
- **消息映射**（如 `batoMsg.ts`）：`CodeToMsg`（码→名字）、`MsgToCode`（名字→码）、`MapTable`（Res 对应的 Req 码等），用于按「数字消息码」做分发和配对。

下面讨论在 Cocos 里**如何把「码」和「解码函数」连起来**，只谈用法和设计，不改构建脚本。

---

## 1. 当前数据形态

- **batoMsg.ts** 大致是：
  - `CodeToMsg`: `{ "2501": "JoinRoomReq", "2502": "JoinRoomRes", ... }`
  - `MsgToCode`: `{ "JoinRoomReq": "2501", ... }`
  - `MapTable`: 响应码 → 请求码（用于匹配请求/响应）
- **bato.ts** 里：`JoinRoomReq.decode(u8)`, `JoinRoomRes.decode(u8)` 等，每个消息类型一个解码函数。

网络层一般是：先读包头得到 `msg_type`（如 2502），再根据码查「该用哪个 decode」解包体。

---

## 2. 思路一：手写「码 → decode」映射（最直接）

在 Cocos 里为每个 bundle 维护一个「消息码 → 解码函数」的映射，用现有的 `CodeToMsg` 只做「码→名字」，解码自己写一层。

- **做法**：  
  - 从 `batoMsg` 读 `CodeToMsg`。  
  - 自己写一个对象：`code -> 对应的 Message.decode`，例如  
    `decodeMap[2501] = JoinRoomReq.decode`，`decodeMap[2502] = JoinRoomRes.decode`，…  
  - 收到包：`const name = batoMsg.CodeToMsg[msgType]; const decode = decodeMap[msgType]; const body = decode(payload);`，再按 `name` 或 `msgType` 做业务分发。
- **优点**：类型清晰、不依赖构建改动、IDE 友好。  
- **缺点**：每增加一个消息要在 Cocos 里手写一行；多 bundle 要多个 decodeMap。

适合：消息量不大、希望完全掌控、不想动构建。

---

## 3. 思路二：按「名字」从一个大对象里取 decode（半自动）

利用「消息名 = 类型名」的约定，把同一 bundle 里所有 Message 的 decode 挂到一个对象上，用 `CodeToMsg[code]` 得到名字再取 decode。

- **做法**：  
  - 在 bato 的入口里集中 import 所有消息类型，并做一个对象，例如  
    `const batoDecoders = { JoinRoomReq, JoinRoomRes, StartGameReq, ... }`（每个 value 上有 `.decode`）。  
  - 收到包：`const name = batoMsg.CodeToMsg[msgType]; const MessageClass = batoDecoders[name]; const body = MessageClass.decode(payload);`  
  - 发请求时用 `MsgToCode` 把「要发的消息名」换成码填进包头；需要配对请求/响应时用 `MapTable`。
- **优点**：不用为每个码手写 decode，只维护「名字 → 类型」的一个对象；和现有 `CodeToMsg` 天然配套。  
- **缺点**：新消息要记得在 `batoDecoders` 里加一项（可以约定「凡是从 bato.ts 导出的 message 都放进去」减少遗漏）。

适合：希望少写重复代码、又能接受在 Cocos 里维护一个「名字→类型」的集中列表。

---

## 4. 思路三：构建时生成「码 → decode」注册表（后续可做）

不改「当前」构建逻辑，只讨论：若以后在构建里加一步「根据 CodeToMsg + 已生成的 TS」生成一个「注册表 TS」，会是什么样。

- **形态**：例如生成 `batoRegistry.ts`，里面有一个 `decodeByCode: Record<number, (bytes: Uint8Array) => unknown>`（或更具体的类型），以及可选的 `encodeByCode`、或直接暴露 `getDecoder(code)`。  
- **在 Cocos 里**：网络层只做 `registry.getDecoder(msgType).decode(payload)`，或 `batoRegistry.decodeByCode[msgType](payload)`，业务层仍可用 `CodeToMsg`/`MapTable` 做逻辑分支或请求/响应配对。  
- **优点**：Cocos 侧几乎不用手写映射；新消息只要重新跑构建就有。  
- **缺点**：需要构建脚本多生成一个文件（读 CodeToMsg + 扫描生成的 TS 或依赖一份「消息名→类型」的元数据）。

这里只讨论「更好映射」的方向：**当前不改代码**的话，用思路一或二；若以后愿意在构建里加一层生成，再考虑思路三。

---

## 5. 在 Cocos 里怎么用 MapTable

- **请求/响应配对**：发 Req 时记下 `requestId` 和「请求码」；收到 Res 时用包头里的 `msg_type` 查 `MapTable[msg_type]` 得到对应的请求码，再和本地记录的 requestId 配对，做 Promise resolve 或回调。  
- **不需要改构建**：MapTable 已经是「响应码 → 请求码」的静态表，在 Cocos 里直接读即可。

---

## 6. 小结（不修改构建代码的前提下）

| 方式 | 做法 | 适用 |
|------|------|------|
| **手写码→decode** | CodeToMsg 查名字，自己维护 code→decode 表 | 消息少、要完全可控 |
| **名字→类型对象** | CodeToMsg 得名字，再从「名字→Message 类型」对象取 .decode | 想少写、接受维护一个集中列表 |
| **MapTable** | 直接用于请求/响应码配对 | 所有场景，无需改构建 |

当前生成 TS 后，**更好的映射方式**就是：在 Cocos 里选「手写映射」或「名字→类型对象」中的一种，和现有 `batoMsg` 的 `CodeToMsg`/`MsgToCode`/`MapTable` 一起用；若后续要再进一步「更好」，再考虑在构建里增加「码→decode 注册表」的生成（思路三）。

---

## 7. 不依赖当前 *Msg.ts 的其它方案

下面几种方式**完全不用**现有的 CodeToMsg/MsgToCode/MapTable，只靠 proto 生成的 TS 或其它约定来做「码 → 解码/分发」。

---

### 方案 A：码即枚举，手写 switch + decode

- **约定**：消息码和业务枚举一一对应（枚举值就是协议里的数字），在 Cocos 里自己维护一个「枚举 ↔ 消息码」的常量或枚举。
- **做法**：收到包后 `switch (msgType) { case 2501: return JoinRoomReq.decode(payload); case 2502: return JoinRoomRes.decode(payload); ... }`；发包时同样用 switch 或反向枚举把「要发的类型」转成码写进包头。
- **优点**：不依赖任何映射 TS；类型和码的对应关系集中在一处，清晰。
- **缺点**：每加一个消息要改 switch 两处（收/发）；多 bundle 要多个 switch 或按 bundle 分文件。

---

### 方案 B：用 ts-proto 的 package + 消息名约定，运行时按名字取类型

- **约定**：协议里 `package bato.v1`，消息名和生成的类型名一致（JoinRoomReq、JoinRoomRes…）；**码与名字的对应**只存在于 Cocos 侧的一个配置或枚举里，而不是 *Msg.ts。
- **做法**：在 Cocos 里维护「码 → 消息名字」的配置（可以是纯对象、枚举或从服务端拉一份），再维护「消息名字 → 类型」的映射（例如 `const byName = { JoinRoomReq, JoinRoomRes, ... }`）。收到包：`const name = yourCodeToName[msgType]; const body = byName[name].decode(payload);`。
- **优点**：不依赖构建产出的 *Msg.ts；码→名字可以自己定（甚至从配置/表驱动），名字→decode 只和生成的 TS 类型挂钩。
- **缺点**：码→名字这一层还是要自己维护（手写或从别处生成）。

---

### 方案 C：构建时从 proto 生成「仅码→decode」的注册表（不生成 CodeToMsg/MsgToCode）

- **思路**：构建时扫描 proto 的 `// MessageType: XXX (2501)` 或 message_types 枚举，得到「码 → 消息名」；再结合已生成的 TS（或 ts-proto 的产物结构），生成一个只包含「码 → decode 函数」的注册表 TS，例如 `batoDecodeRegistry.ts`，不生成 CodeToMsg/MsgToCode/MapTable。
- **在 Cocos 里**：`import { decodeByCode } from './batoDecodeRegistry'; const body = decodeByCode[msgType](payload);`；发包时若需要「类型→码」，可以再生成一个小的 `encodeByCode` 或 `msgNameToCode`（仅构建时从 proto 推导）。
- **优点**：Cocos 完全不依赖现有 *Msg.ts；按码解码/编码都走注册表，类型由构建保证。
- **缺点**：需要改构建脚本，增加「从 proto + 生成 TS 产出注册表」的一步；请求/响应配对若需要 MapTable 等价物，也要在构建里一并生成或单独约定。

---

### 方案 D：服务端下发或配置驱动「码→消息名」

- **约定**：消息码与消息名的对应关系由服务端接口或配置表提供（例如 JSON），Cocos 启动时或按场景加载。
- **做法**：运行时拿到 `{ 2501: "JoinRoomReq", 2502: "JoinRoomRes", ... }` 后，和「名字→类型」的本地映射（方案 B 的 byName）组合，得到「码→decode」；发包时用同一份配置反查「名字→码」。
- **优点**：协议扩展时只需改服务端/配置，客户端不一定要重新发版；完全不依赖构建时的 *Msg.ts。
- **缺点**：依赖网络或配置；要保证客户端 TS 里的类型名和配置里的名字一致；需要本地维护「名字→类型」映射。

---

### 方案 E：单一分发 + 类型收窄（仅 decode，不关心码）

- **思路**：不按码分支，而是按「当前场景/游戏」固定用某几个消息类型；收到包后根据业务上下文（例如当前在 bato 房间）只尝试该 bundle 下的若干类型 decode，直到成功或报错。
- **做法**：例如当前场景已知只有 JoinRoomRes、StartGameBroadcast 等几种，就按顺序或按某种简单规则尝试 `JoinRoomRes.decode(payload)`、`StartGameBroadcast.decode(payload)`… 或用一个 small 的「可能类型列表」逐个 decode。
- **优点**：不依赖任何码表或 *Msg.ts；实现极简。
- **缺点**：不可靠（错误包可能被错误类型误解析）；性能差；不适合码很多、需要严格按码分发的场景。仅适合原型或消息极少的场景。

---

### 小结（不依赖当前映射 TS）

| 方案 | 是否依赖 *Msg.ts | 码从哪来 | 适用 |
|------|------------------|----------|------|
| **A. switch + 枚举** | 否 | 手写枚举/常量 | 消息不多、希望全手控 |
| **B. 自维护 码→名 + 名→类型** | 否 | 手写或配置 | 想脱离 *Msg.ts，名字→类型自己集中维护 |
| **C. 构建生成仅 码→decode 注册表** | 否 | 构建从 proto 生成 | 愿意改构建，Cocos 只认注册表 |
| **D. 服务端/配置 码→名** | 否 | 服务端或配置表 | 协议要动态扩展、少发版 |
| **E. 按场景尝试 decode** | 否 | 无 | 仅原型或消息极少 |

若**完全不考虑当前映射 TS**，可在这五类里选：手写（A/B）、构建生成（C）、配置/服务端驱动（D）、或极简尝试解码（E）。

---

## 8. 各方案在 Cocos 中的收发示例

假设：包头已解析出 `msgType`（数字）、`requestId`、包体 `payload: Uint8Array`；发包时需把 `msgType`、`requestId`、编码后的 body 写入包头再发送。下面以 **bato** 的 `JoinRoomReq(2501)` / `JoinRoomRes(2502)` 为例，每种方案各写「收」和「发」的用法。

---

### 思路一：手写「码 → decode」+ 使用 batoMsg

```typescript
// === 维护：码 → decode（手写） ===
import * as bato from './proto/bato';
import batoMsg from './proto/batoMsg';

const batoDecodeByCode: Record<number, (bytes: Uint8Array) => unknown> = {
  2501: bato.JoinRoomReq.decode,
  2502: bato.JoinRoomRes.decode,
  2505: bato.StartGameReq.decode,
  2506: bato.StartGameRes.decode,
  // ... 其余消息
};

// === 收消息 ===
function onBatoPacket(msgType: number, requestId: number, payload: Uint8Array) {
  const decoder = batoDecodeByCode[msgType];
  if (!decoder) return;
  const body = decoder(payload);
  const name = batoMsg.CodeToMsg[String(msgType)]; // 可选：用于日志或分支
  if (name === 'JoinRoomRes') {
    // (body as bato.JoinRoomRes)
    handleJoinRoomRes(body as bato.JoinRoomRes);
  }
}

// === 发消息（用 batoMsg.MsgToCode 取码） ===
function sendJoinRoomReq(roomId: number) {
  const msg: bato.JoinRoomReq = { roomId };
  const msgType = Number(batoMsg.MsgToCode['JoinRoomReq']); // 2501
  const body = bato.JoinRoomReq.encode(msg).finish();
  sendPacket(msgType, nextRequestId(), body);
}
```

---

### 思路二：名字→类型对象 + batoMsg

```typescript
// === 维护：名字 → 类型（带 .decode / .encode） ===
import * as bato from './proto/bato';
import batoMsg from './proto/batoMsg';

const batoByName: Record<string, { decode: (u: Uint8Array) => unknown; encode: (m: any) => { finish: () => Uint8Array } }> = {
  JoinRoomReq: bato.JoinRoomReq,
  JoinRoomRes: bato.JoinRoomRes,
  StartGameReq: bato.StartGameReq,
  StartGameRes: bato.StartGameRes,
  // ...
};

// === 收消息 ===
function onBatoPacket(msgType: number, requestId: number, payload: Uint8Array) {
  const name = batoMsg.CodeToMsg[String(msgType)];
  if (!name) return;
  const MessageType = batoByName[name];
  if (!MessageType) return;
  const body = MessageType.decode(payload);
  if (name === 'JoinRoomRes') handleJoinRoomRes(body as bato.JoinRoomRes);
}

// === 发消息 ===
function sendJoinRoomReq(roomId: number) {
  const msg: bato.JoinRoomReq = { roomId };
  const name = 'JoinRoomReq';
  const msgType = Number(batoMsg.MsgToCode[name]);
  const body = batoByName[name].encode(msg).finish();
  sendPacket(msgType, nextRequestId(), body);
}
```

---

### 思路三：构建生成「码→decode」注册表（假设已有 batoRegistry）

```typescript
// 假设构建生成了 batoRegistry.ts，内有 decodeByCode、encodeByCode 或 getEncoder(name)
import { decodeByCode, getCodeByName, encodeByName } from './proto/batoRegistry';

// === 收消息 ===
function onBatoPacket(msgType: number, requestId: number, payload: Uint8Array) {
  const decode = decodeByCode[msgType];
  if (!decode) return;
  const body = decode(payload);
  // 若注册表同时导出 CodeToName，可按名分支；否则用 msgType 分支
  handleByMsgType(msgType, body);
}

// === 发消息 ===
function sendJoinRoomReq(roomId: number) {
  const msg = { roomId };
  const msgType = getCodeByName('JoinRoomReq');
  const body = encodeByName('JoinRoomReq', msg).finish();
  sendPacket(msgType, nextRequestId(), body);
}
```

---

### 方案 A：码即枚举 + switch

```typescript
import * as bato from './proto/bato';

// 手写枚举，与协议一致
enum BatoMsgCode {
  JoinRoomReq = 2501,
  JoinRoomRes = 2502,
  StartGameReq = 2505,
  StartGameRes = 2506,
  // ...
}

// === 收消息 ===
function onBatoPacket(msgType: number, requestId: number, payload: Uint8Array) {
  let body: unknown;
  switch (msgType) {
    case BatoMsgCode.JoinRoomRes:
      body = bato.JoinRoomRes.decode(payload);
      handleJoinRoomRes(body as bato.JoinRoomRes);
      break;
    case BatoMsgCode.StartGameBroadcast:
      body = bato.StartGameBroadcast.decode(payload);
      break;
    // ...
    default:
      return;
  }
}

// === 发消息 ===
function sendJoinRoomReq(roomId: number) {
  const msg: bato.JoinRoomReq = { roomId };
  const body = bato.JoinRoomReq.encode(msg).finish();
  sendPacket(BatoMsgCode.JoinRoomReq, nextRequestId(), body);
}
```

---

### 方案 B：自维护 码→名 + 名→类型（不用 *Msg.ts）

```typescript
import * as bato from './proto/bato';

// 自维护：码 → 名字（可手写或从配置读）
const codeToName: Record<number, string> = {
  2501: 'JoinRoomReq',
  2502: 'JoinRoomRes',
  2505: 'StartGameReq',
  2506: 'StartGameRes',
  // ...
};

const byName: Record<string, { decode: (u: Uint8Array) => unknown }> = {
  JoinRoomReq: bato.JoinRoomReq,
  JoinRoomRes: bato.JoinRoomRes,
  // ...
};

// === 收消息 ===
function onBatoPacket(msgType: number, requestId: number, payload: Uint8Array) {
  const name = codeToName[msgType];
  if (!name) return;
  const MessageType = byName[name];
  if (!MessageType) return;
  const body = MessageType.decode(payload);
  if (name === 'JoinRoomRes') handleJoinRoomRes(body as bato.JoinRoomRes);
}

// === 发消息（需自维护 名字→码，或从 codeToName 反查） ===
const nameToCode: Record<string, number> = {};
Object.entries(codeToName).forEach(([code, name]) => { nameToCode[name] = Number(code); });

function sendJoinRoomReq(roomId: number) {
  const msg: bato.JoinRoomReq = { roomId };
  const msgType = nameToCode['JoinRoomReq'];
  const body = bato.JoinRoomReq.encode(msg).finish();
  sendPacket(msgType, nextRequestId(), body);
}
```

---

### 方案 C：构建生成「仅码→decode」注册表（不生成 *Msg.ts）

用法与「思路三」相同：Cocos 只 import 构建生成的 `batoRegistry`（或等价物），收包用 `decodeByCode[msgType](payload)`，发包用 `getCodeByName(name)` + `encodeByName(name, msg)`，不再引用 batoMsg。

---

### 方案 D：服务端/配置 码→名 + 本地 名→类型

```typescript
import * as bato from './proto/bato';

// 运行时从服务端或配置表拿到，例如：{ "2501": "JoinRoomReq", "2502": "JoinRoomRes", ... }
let codeToName: Record<number, string> = {};
async function loadMsgConfig() {
  const res = await fetch('/config/msg_code.json');
  codeToName = await res.json();
}

const byName: Record<string, { decode: (u: Uint8Array) => unknown }> = {
  JoinRoomReq: bato.JoinRoomReq,
  JoinRoomRes: bato.JoinRoomRes,
  // ...
};

// === 收消息（与方案 B 相同，只是 codeToName 来源不同） ===
function onBatoPacket(msgType: number, requestId: number, payload: Uint8Array) {
  const name = codeToName[msgType];
  if (!name) return;
  const body = byName[name].decode(payload);
  if (name === 'JoinRoomRes') handleJoinRoomRes(body as bato.JoinRoomRes);
}

// === 发消息：可从同一份配置反查 name→code ===
let nameToCode: Record<string, number> = {};
// loadMsgConfig 里同时构建：nameToCode[name] = Number(code)
function sendJoinRoomReq(roomId: number) {
  const msg: bato.JoinRoomReq = { roomId };
  const msgType = nameToCode['JoinRoomReq'];
  const body = bato.JoinRoomReq.encode(msg).finish();
  sendPacket(msgType, nextRequestId(), body);
}
```

---

### 方案 E：按场景尝试 decode（不推荐，仅示例）

```typescript
import * as bato from './proto/bato';

// 当前场景只可能收到少数几种
const possibleTypes = [bato.JoinRoomRes, bato.StartGameBroadcast, bato.GameResultBroadcast];

// === 收消息：逐个尝试 decode，先成功先返回 ===
function onBatoPacket(msgType: number, requestId: number, payload: Uint8Array) {
  for (const MessageType of possibleTypes) {
    try {
      const body = MessageType.decode(payload);
      handleBatoMessage(MessageType.name, body);
      return;
    } catch (_) {}
  }
}

// === 发消息：已知类型，直接写死码 ===
function sendJoinRoomReq(roomId: number) {
  const body = bato.JoinRoomReq.encode({ roomId }).finish();
  sendPacket(2501, nextRequestId(), body);
}
```

---

### 请求/响应配对（任选一种映射方案后通用）

以「发 JoinRoomReq 等 JoinRoomRes」为例，用 `requestId` 和（若有）MapTable 的请求码做配对：

```typescript
const pending = new Map<number, { reqCode: number; resolve: (res: unknown) => void }>();

function sendJoinRoomReq(roomId: number): Promise<bato.JoinRoomRes> {
  return new Promise((resolve) => {
    const requestId = nextRequestId();
    const msgType = 2501; // 或从 MsgToCode/nameToCode 取
    const body = bato.JoinRoomReq.encode({ roomId }).finish();
    pending.set(requestId, { reqCode: 2501, resolve });
    sendPacket(msgType, requestId, body);
  });
}

// 收到包时
function onBatoPacket(msgType: number, requestId: number, payload: Uint8Array) {
  const body = decodeByYourChosenScheme(msgType, payload);
  const p = pending.get(requestId);
  if (p && p.reqCode === (batoMsg.MapTable?.[msgType] ?? msgType)) {
    pending.delete(requestId);
    p.resolve(body);
  }
}
```

若没有 MapTable，可用「请求码 = 响应码 - 1」等业务约定，或手写一份 `resCodeToReqCode` 做配对。
