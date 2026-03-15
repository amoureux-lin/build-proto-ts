# 不依赖现有映射链：仅靠解析 proto 一步得到 message_type + CodeToMsg + registry

可以**不从** `loadMessageTypes` 的 msgCodeMap、也不从现有 codeToMsg/CodeToMsg 链上扩展，而是**只解析 proto**，一步得到「枚举表、码→消息名、来源文件」，再据此生成 message_type.ts、*Msg.ts、msg_registry_*.ts。

---

## 1. proto 里已经有的信息

- **message_types.proto**  
  - 一个 `enum MessageType { ENUM_NAME = code; ... }`。  
  - 解析一次即可得到：**enumName → code**（以及反表 code → enumName）。

- **各业务 proto（bato.proto、game_common_player.proto 等）**  
  - 注释两种形式：  
    - `// MessageType: BATO_JOIN_ROOM_REQ (2501)`：**枚举名 + 括号内码**  
    - `// MessageType: COMMON_SERVER_CLOSED_BROADCAST`：**仅枚举名**（码需查 message_types）  
  - 下一行是 `message JoinRoomReq { ... }`，即**消息名**。  
  - 当前文件路径即可作为**来源 proto**，用于后续决定「从哪个生成 TS 模块 import」。

所以：**只读 proto 文件**，就能在**一次解析流程**里同时得到：

- 所有 (enumName, code)
- 每个 (code, messageName, protoPath)，以及可选的 enumName

不需要先跑 loadMessageTypes 再跑 scanBundleMessages，也不依赖 CodeToMsg 的中间结构。

---

## 2. 一步到位的解析流程（思路）

- **Step A：解析 message_types.proto**  
  - 按行找 `ENUM_NAME = number;`（可兼容注释、空格）。  
  - 得到 `enumNameToCode: Record<string, number>`，再反表 `codeToEnumName: Record<number, string>`。

- **Step B：按 bundle 扫描业务 proto**  
  - 对该 bundle 下的每个 `.proto` 做一次遍历：  
    - 匹配 `// ... MessageType: ENUM_NAME (可选: (CODE))`。  
    - 从注释取出 **enumName**，若有括号则取出 **code**，否则用 Step A 的 `enumNameToCode[enumName]` 得到 code。  
    - 向后找最近一行 `message MessageName`，得到 **messageName**。  
    - 记录 **(code, enumName, messageName, protoPath)**，其中 protoPath 可规范为「相对 bundle 的路径」或「将来生成 TS 的模块名」（如 bato.proto → `bato`，game_common_player.proto → `game_common_player`）。

- **Step C：从 Step B 的列表直接产出**  
  - **message_type.ts**：按 bundle 聚合，对出现过的 (code, enumName) 去重，生成 `MessageType = { [enumName]: code } as const`。  
  - **CodeToMsg / MsgToCode / MapTable**：code → messageName 已有；MsgToCode 是反表；MapTable 仍可按 Req/Res、Ping/Pong 约定用 code 推算（或从注释扩展，若需要）。  
  - **msg_registry_*.ts**：对每条 (code, enumName, messageName, protoPath) 生成一条 registry 项；import 路径由 protoPath → 模块名 的规则得到（如 `./bato`、`./game_common_room`）。

这样就不再依赖「先 loadMessageTypes 得到 msgCodeMap，再 scanBundleMessages 得到 codeToMsg」这条链；**只解析 proto，一步得到全部中间数据**。

---

## 3. 和「从 msgCodeMap/codeToMsg 扩展」的对比

| 维度 | 现有链（loadMessageTypes + scan + buildMessageMap） | 仅解析 proto 一步到位 |
|------|------------------------------------------------------|---------------------------|
| 数据来源 | message_types 解析一次，业务 proto 再扫一次，且 scan 依赖 msgCodeMap | 只读 proto：message_types 一次，业务 proto 一次，不依赖已有映射结果 |
| 码的来源 | 注释里只有枚举名时，必须用 msgCodeMap 查码 | 注释有 `(2501)` 时直接用；没有时用 message_types 解析结果查 |
| 消息来源（用于 registry import） | 当前 scan 不产出「来自哪个 proto」 | 解析时自然有 proto 路径 → 可导出「来自哪个模块」 |
| MapTable | 在 buildMessageMap 里用 Req/Res 约定算 | 同样可在解析后按 code/名字约定算，不依赖 CodeToMsg 结构 |
| 与现有 *Msg.ts 的兼容 | 沿用同一套 CodeToMsg/MsgToCode | 可生成同一形态的 *Msg.ts，仅数据来源改为「解析结果」 |

结论：**可以不从 loadMessageTypes / codeToMsg 中新增逻辑，而是单独做「只解析 proto」的一步，从解析结果直接生成 message_type、*Msg、registry**；若需要与现有 *Msg 完全一致，只需在 Step C 里按同一格式写 CodeToMsg/MsgToCode/MapTable 即可。

---

## 4. 实现上要注意的点

- **注释格式**：兼容两种——`MessageType: ENUM_NAME (CODE)` 和 `MessageType: ENUM_NAME`；若只有枚举名，必须能查到 message_types 的解析结果，否则报错或告警。  
- **message 名**：取「当前 MessageType 注释后最近一条 message」的逻辑要与现有一致（避免空 message、嵌套 message 等边界情况）。  
- **protoPath → 模块名**：约定好规则（例如 `bato.proto` → `bato`，`game_common_player.proto` → `game_common_player`），这样 registry 的 import 路径唯一。  
- **MapTable**：若仍用「Res 码 = Req 码 + 1」等约定，可在 Step C 从 (code, messageName) 列表里算，不依赖现有 buildMessageMap。  
- **bundle 划分**：按当前配置（protoConfig 里各 bundle 的 dir）决定扫哪些 proto；message_types 只读一次，供所有 bundle 用。

这样，**不依赖 loadMessageTypes 的 msgCodeMap 和 codeToMsg/CodeToMsg**，仅从 proto 解析就能一步得到全部所需数据并生成三类 TS。
