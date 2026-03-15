# 当前构建能否生成 message_type.ts 与 msg_registry_*.ts

结论：**可以做到**。现有流水线里已有生成这三类 TS 所需的大部分数据，补少量逻辑和约定即可；个别点需要扩展扫描结果（例如「消息来自哪个 proto/模块」）或做简单约定。

---

## 1. 当前构建里已经有的数据

| 数据 | 来源 | 用途 |
|------|------|------|
| **enumName → code** | `loadMessageTypes(message_types.proto)` → `msgCodeMap` | 协议码与枚举名一致 |
| **code → messageName** | `scanBundleMessages` → `codeToMsg`，再 `buildMessageMap` → `CodeToMsg` | 每个 bundle 的「码→消息名」 |
| **messageName → code** | 同上 → `MsgToCode` | 发包时用 |
| **MapTable** | `buildMessageMap` → `MapTable` | 请求/响应配对（可选用于 registry） |

也就是说：**码、枚举名、消息名**的对应关系都已经在现有「映射」流程里算好了，只是目前只写成了 `*Msg.ts`（CodeToMsg/MsgToCode/MapTable）。

---

## 2. message_type.ts：能否生成、缺什么

- **目标形态**：`export const MessageType = { BATO_JOIN_ROOM_REQ: 2501, ... } as const`，且只包含「当前 bundle 会用到的」码（或按需全量）。
- **已有**：
  - `msgCodeMap`：枚举名 → 码（来自 message_types.proto）。
  - 每个 bundle 的 `codeToMsg`：该 bundle 涉及的所有 code。
- **需要**：从「码」反推到「枚举名」。
  - 做法：对 `msgCodeMap` 做一次「反表」：`code → enumName`（例如 `2501 → 'BATO_JOIN_ROOM_REQ'`）。
  - 对当前 bundle，只取 `codeToMsg` 里出现的 code，用反表得到 enumName，生成 `MessageType = { [enumName]: code, ... }` 即可。
- **结论**：**当前构建完全可以生成 message_type.ts**，不需要读新文件，只需在现有流程里加一步「反表 + 按 bundle 写出 MessageType 常量」的生成脚本。

---

## 3. msg_registry_*.ts：能否生成、缺什么

- **目标形态**：`Record<number, { decode(buf), encode(msg), name }>`，且每项对应 ts-proto 生成的 `MessageName.decode` / `MessageName.encode`。
- **已有**：
  - 每个 bundle 的 `codeToMsg`：code → messageName（如 `2501 → 'JoinRoomReq'`）。
  - 枚举名：可由上面「code → enumName」得到（与 message_type.ts 一致）。
  - ts-proto 已生成好的 `bato.ts` / `game_common_room.ts` 等，里面都有 `MessageName.decode`、`MessageName.encode`。
- **缺的一环**：**每个 messageName 对应「从哪个 TS 模块 import」**。
  - 例如：`JoinRoomReq` 在 `./bato`，`SendBarrageReq` 在 `./game_common_room`。
  - 若一个 bundle 只产出一个「游戏主 proto」的 TS（如 bato 只有 `bato.ts` 含这些消息），可以约定「本 bundle 的 registry 只从 `./bato` 或单一入口 import」。
  - 若一个 bundle 会从多个生成文件里取消息（例如 common 同时用 game_common_room.ts 和 game_common_player.ts），就需要知道「messageName 来自哪个 proto/哪个生成文件」。
- **可行做法**：
  1. **约定/启发式**：  
     - 对「子游戏 bundle」（bato、color 等）：约定所有带 MessageType 的消息都从主游戏 TS 引入（如 `./bato`），则可直接用当前 `codeToMsg` 生成 registry，无需改扫描。  
     - 对「common」：约定只从 `./game_common_room` 或再单独列一个 `./game_common_player`，由配置或固定规则决定。
  2. **扩展扫描（更稳）**：  
     - 在 `extractProtoMessageMap` / `scanBundleMessages` 里多返回一层：`(code, messageName, protoPath)` 或 `(code, messageName, moduleName)`。  
     - 生成 registry 时根据 proto 文件名决定 import 路径（如 `bato.proto` → `./bato`，`game_common_player.proto` → `./game_common_player`）。
- **结论**：**当前构建在「约定单一模块」或「扩展一次扫描」的前提下，可以生成 msg_registry_bato.ts / msg_registry_common.ts**；若希望严格按「消息来自哪个 proto」做多模块 import，需要扩展扫描结果（多带一个「来源 proto/模块」字段）。

---

## 4. 生成顺序与依赖关系

- **message_type.ts**：只依赖 `msgCodeMap` + 当前 bundle 的 `codeToMsg`，可在「映射」那一步一起算、先写。
- **msg_registry_*.ts**：依赖同一 bundle 的 `message_type.ts`（用 `MessageType.XXX` 做 key）以及 ts-proto 已生成的 `bato.ts` / `game_common_room.ts` 等，因此要放在 **ts-proto 生成 + 扁平化之后**，和写 `*Msg.ts` 同一阶段或之后。
- 推荐顺序：  
  `ts-proto 生成 → 扁平化 → 扫描得到 codeToMsg / messageMap → 写 *Msg.ts → 生成 message_type.ts → 生成 msg_registry_*.ts`。

---

## 5. 需要补的构建逻辑（小结）

| 产物 | 当前是否可做 | 建议补充 |
|------|--------------|----------|
| **message_type.ts** | 可以 | 用 `msgCodeMap` 建 code→enumName 反表；按 bundle 用其 codeToMsg 的 code 集合生成 `MessageType` 常量并写入 `build/output/<bundle>/message_type.ts`。 |
| **msg_registry_bato.ts**（及其它子游戏） | 可以 | 用该 bundle 的 codeToMsg + message_type 的枚举名，按「约定单模块」或「扫描带出 module」生成 TS；统一用 `finish(MessageName.encode(msg as MessageName))` 封装 encode。 |
| **msg_registry_common.ts** | 可以 | 同 registry 生成逻辑；仅 common bundle 写 `msg_registry_common.ts` 到 `build/output/common/`；若 bato 等也需要引用，可再生成到各 bundle 目录或由 Cocos 从 common 目录 import。 |

---

## 6. 总结

- **message_type.ts**：现有构建已有全部数据，加一段「反表 + 按 bundle 写常量」即可生成。
- **msg_registry_bato.ts / msg_registry_common.ts**：现有构建已有「码→消息名」和 ts-proto 产物；若接受「每个 bundle 的 registry 只从单一/固定模块 import」，当前就够用；若要严格按 proto 来源分多模块 import，只需在扫描阶段多返回「消息来自哪个 proto/模块」即可。

因此：**在当前构建上扩展即可做到这三类 TS 的自动生成**，无需大改架构。
