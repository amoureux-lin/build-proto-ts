# proto 目录分析

## 1. 目录结构概览

当前项目根目录下的 `proto/` 已包含复制好的 proto 文件，结构与构建工具期望的 **按 bundle 分子目录** 一致：

```
proto/
├── message_types/
│   └── message_types.proto    # 全局消息类型枚举（码表）
├── common/
│   ├── game_common_player.proto
│   ├── game_common_room.proto
│   └── gateway.proto
├── color/
│   ├── color.proto
│   └── game_common_player.proto
├── solitaire/
│   ├── solitaire.proto
│   └── game_common_player.proto
├── mines/
│   ├── mines.proto
│   └── game_common_player.proto
├── bato/
│   ├── bato.proto
│   └── game_common_player.proto
├── tongits/
│   ├── tongits.proto
│   └── game_common_player.proto
└── unleash/
    ├── unleash.proto
    └── game_common_player.proto
```

与 `protoConfig.json` 中的 `games` 一致：每个游戏一个子目录，目录名即 bundle 名；`message_types` 单独一目录，供构建时解析「枚举名 → 数字码」映射。

---

## 2. 各层 proto 职责

### 2.1 `message_types/message_types.proto`

- **作用**：全局消息类型枚举，定义服务端与客户端共用的「消息码」。
- **内容**：`enum MessageType { ... }`，码段大致为：
  - 1–99：网关（GATEWAY_*）
  - 100–199：公共（COMMON_*）
  - 201–350：房间（ROOM_*）
  - 1000–1500：聊天（CHAT_*）
  - 1500–2000：接龙（SOLITAIRE_*）
  - 2001–2500：扫雷（MINES_*）
  - 2501–3000：猜拳（BATO_*）
  - 3001–3500：Tongits
  - 3501–4000：木头人（UNLEASH_*）
  - 4001–4500：color
  - 4501–5000：pusoy
- **构建用途**：`loadMessageTypes()` 解析该文件，得到 `枚举名 → 数字`，用于后续在业务 proto 里通过 `// MessageType: XXX` 注释把「本地 message 名」绑到「消息码」。

### 2.2 `common/`（公共 + 网关）

- **game_common_room.proto**：房间、玩家等基础类型（如 `PacketHeader`、`RoomInfo`、`PlayerInfo` 等），被各游戏 proto 通过 `import "../common/game_common_room.proto"` 引用。
- **game_common_player.proto**：公共玩家相关请求/响应/广播（坐下、站起、弹幕、麦克风等），带 `// MessageType: COMMON_*` / `ROOM_*` 等注释。
- **gateway.proto**：网关消息（Connected、Ping、Pong、Test），使用 `google/protobuf/timestamp.proto`。

### 2.3 各游戏 bundle（color、solitaire、mines、bato、tongits、unleash）

- 每个 bundle 目录下通常有：
  - **game_common_player.proto**：与 common 同名的副本，用于该 bundle 的 pbjs 输入（保证 common 类型在该 bundle 内可用）。
  - **\<游戏名\>.proto**：该游戏独有消息，`import "../common/game_common_room.proto"`（或 room），内部使用 `common.v1.*` 类型。
- 业务 message 通过注释绑定消息码，例如：
  - `// MessageType: COLOR_JOIN_ROOM_REQ` → 对应 `message_types` 里的 `COLOR_JOIN_ROOM_REQ = 4001`，构建后得到「4001 → JoinRoomReq」等映射。

---

## 3. Import 方式

当前 `proto/` 内全部为**工作区相对路径**，无 `api/...` 形式：

| 形式 | 示例 | 说明 |
|------|------|------|
| 同目录 | `import "./game_common_room.proto";` | 仅 common 内使用 |
| 上级 + 目录 | `import "../common/game_common_room.proto";` | 各游戏引用 common |
| 标准库 | `import "google/protobuf/timestamp.proto";` | gateway 使用 |

构建工具里的 `rewriteProtoImports` 只处理 `import "api/.../proto/...";`（即从 heroncloud-game/api 复制过来时的格式）。当前目录已是「复制并重写后」的状态，因此**无需再执行重写**；若之后不再从 api 目录复制，也可以不调用复制步骤，直接使用本目录。

---

## 4. 与构建流程的对应关系

- **复制步骤**：从 `projectApiRoot`（如 `heroncloud-game/api`）按 `protoConfig.json` 的 `games` 配置拷贝到 `build/proto/<bundleName>/` 并重写 import。若暂无上游 api 目录，可**不执行复制**，改为直接使用已有 `proto/` 目录。
- **工作区目录**：构建时 `protoWorkspaceDir` 应指向当前这份 proto 的根目录（例如项目根下的 `proto`），这样：
  - `getMessageTypesProtoPath` → `proto/message_types/message_types.proto`
  - `getBundleProtoDir(paths, bundleName)` → `proto/common`、`proto/color` 等
- **消息映射**：  
  - 从 `message_types.proto` 解析出 `COMMON_*`、`COLOR_*` 等 → 数字码。  
  - 扫描各 bundle 下 `.proto` 中 `// MessageType: XXX`，找到下一行 `message Foo`，建立「码 → Foo」。  
  - 输出到 `build/output/<bundle>/<bundle>Msg.ts`（CodeToMsg、MsgToCode、MapTable）。

---

## 5. 使用「仅现有 proto、不复制」的方式

1. 在 `protoConfig.json` 的 `paths` 中显式设置 **protoWorkspaceDir** 指向当前 proto 根目录（例如 `"proto"`，相对项目根）。
2. **不配置** `projectApiRoot`，或确保其路径不存在。
3. 构建逻辑中：若未配置或不存在 `projectApiRoot`，则**跳过复制步骤**，直接使用 `protoWorkspaceDir` 下的现有文件进行 pbjs/pbts 与消息映射。

这样即可在「暂无 heroncloud-game/api 等上游目录」时，仅依赖当前 `proto/` 目录完成编译与消息映射生成。
