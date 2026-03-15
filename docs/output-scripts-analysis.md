# build/output 下 message_type 与 msg_registry 脚本分析

针对 `build/output/bato/` 下的 **message_type.ts**、**msg_registry_bato.ts**、**msg_registry_common.ts** 的职责与关系说明。

---

## 1. 文件概览

| 文件 | 作用 | 依赖 |
|------|------|------|
| **message_type.ts** | 消息码常量（与服务端协议一致） | 无 |
| **msg_registry_bato.ts** | bato 子游戏的「码 → decode/encode」注册表 | message_type、bato.ts |
| **msg_registry_common.ts** | 公共/房间的「码 → decode/encode」注册表 | message_type、game_common_room.ts |

三者一起为 Cocos 侧的 **Nexus 框架**提供：统一的消息码枚举 + 按码编解码的注册表，对应文档里说的「思路三 / 方案 C」形态。

---

## 2. message_type.ts

- **内容**：导出 `MessageType` 对象，键为消息名（如 `BATO_JOIN_ROOM_REQ`），值为数字码（如 2501）；末尾用 `as const` 收窄类型，并导出 `MessageTypeValue`。
- **用途**：
  - 收发时用 `MessageType.BATO_JOIN_ROOM_REQ` 而不是魔法数字，和协议文档/服务端一致。
  - 被两个 registry 引用，保证「注册表里用的码」和「业务里用的码」同一来源。
- **注意**：当前是示例，只列了部分 common / bato 的码；若由生成脚本产出，应与 `message_types.proto` 或 bato.proto 里的 `// MessageType: XXX (2501)` 一致。

---

## 3. msg_registry_bato.ts

- **内容**：
  - 从 `db://nexus-framework/index` 引入类型 `MessageMapping`。
  - 从 `./bato` 引入 bato 的 Message 类型（JoinRoomReq、JoinRoomRes、StartGameReq、StartGameRes、StartGameBroadcast）。
  - 定义 `finish(w)`：ts-proto 的 `encode` 返回的是 `Writer`，需要 `.finish()` 才得到 `Uint8Array`，这里统一封装。
  - 导出 `BATO_MSG_REGISTRY: Record<number, MessageMapping>`，键为 `MessageType.xxx`，值为 `{ decode, encode, name }`。
- **MessageMapping 形态**（由 Nexus 约定）：
  - `decode(buf)`: `Uint8Array` → 解码后的消息对象。
  - `encode(msg)`: 消息对象 → 通过 `finish(Writer)` 得到 `Uint8Array`。
  - `name`: 消息名字符串，便于日志或调试。
- **用途**：在 Cocos 里进入 bato 子游戏时，通过 `Nexus.proto.registerSubgame(BATO_MSG_REGISTRY)` 注册，网络层即可按 `msgType` 从注册表取 decode/encode，无需手写 switch 或 batoMsg。
- **注意**：当前只注册了 5 条（JoinRoomReq/Res、StartGameReq/Res、StartGameBroadcast），bato 还有 SelectCardReq/Res、GameResultBroadcast 等未列；若由脚本生成，应按 bato.proto 中带 MessageType 注释的消息全部生成一条记录。

---

## 4. msg_registry_common.ts

- **内容**：
  - 同样依赖 `MessageMapping`、`message_type`。
  - 从 `./game_common_room` 引入公共消息（示例里是 SendBarrageReq、SendBarrageRes）。
  - 同样的 `finish` 封装。
  - 导出 `COMMON_MSG_REGISTRY`，键为 `MessageType.COMMON_SEND_BARRAGE_REQ/RES`，值为对应的 decode/encode/name。
- **用途**：项目启动时通过 `Nexus.proto.registerCommon(COMMON_MSG_REGISTRY)` 注册，大厅/房间等公共协议按码编解码都走这份表。
- **注意**：示例只有弹幕两条；实际 common 还有大量房间、玩家、麦克风等消息，若由脚本生成，应覆盖 game_common_player.proto / game_common_room.proto 里所有带 MessageType 的消息。

---

## 5. 三者关系与在 Cocos 中的用法

- **message_type.ts**：单一事实来源，定义「消息名 → 数字码」；业务和两个 registry 都只引用它，避免码不一致。
- **msg_registry_common.ts**：公共协议注册表，启动时 `registerCommon(COMMON_MSG_REGISTRY)`。
- **msg_registry_bato.ts**：bato 子游戏协议注册表，进入 bato 时 `registerSubgame(BATO_MSG_REGISTRY)`。

典型用法（伪代码）：

```ts
// 收包：从 Nexus 拿到 msgType 和 payload
const mapping = Nexus.proto.getMapping(msgType); // 先查 common，再查当前 subgame
const body = mapping.decode(payload);

// 发包：根据消息类型取码和 encode
const msgType = MessageType.BATO_JOIN_ROOM_REQ;
const mapping = Nexus.proto.getMapping(msgType);
const payload = mapping.encode(msg);
send(msgType, requestId, payload);
```

即：**不依赖 batoMsg.ts 的 CodeToMsg/MsgToCode**，完全靠「枚举 + 注册表」做收发；若需要请求/响应配对，可再单独维护 MapTable 或由 Nexus 内部用 requestId 配对。

---

## 6. 与 ts-proto 产物的衔接点

- **decode**：ts-proto 生成的 `MessageName.decode(buf: Uint8Array)` 可直接作为 `MessageMapping.decode`。
- **encode**：ts-proto 的 `MessageName.encode(msg)` 返回 `Writer`，需 `.finish()` 得到 `Uint8Array`，故两个 registry 里都用 `finish(MessageName.encode(msg as MessageName))` 再赋给 `encode`。
- **name**：与 bato.proto / game_common_room.proto 里的 message 名一致（JoinRoomReq、SendBarrageReq 等），便于和 message_type 的键名对应（BATO_JOIN_ROOM_REQ → JoinRoomReq）。

---

## 7. 小结

| 脚本 | 角色 | 建议 |
|------|------|------|
| **message_type.ts** | 协议消息码枚举，与服务端一致 | 可由 message_types.proto 或各 proto 的 MessageType 注释生成，保证全量 |
| **msg_registry_bato.ts** | bato 的「码 → decode/encode/name」 | 可由 bato.proto + bato.ts 生成，覆盖所有带 MessageType 的 message |
| **msg_registry_common.ts** | 公共的「码 → decode/encode/name」 | 可由 game_common_room.proto（及 game_common_player） + 生成 TS 生成，覆盖所有公共消息 |

当前三份都是「示例/手写」形态，若要在构建里自动产出，需要：读取已有 *Msg 的 CodeToMsg（或直接扫 proto 的 MessageType 注释）得到「码→消息名」，再对应当前生成的 bato.ts / game_common_room.ts 里的类型，生成上述枚举和两份 registry，并保留 `finish` 对 Writer 的封装。
