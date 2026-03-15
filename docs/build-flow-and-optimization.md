# 构建流程与优化分析

本文档描述当前 proto 构建的完整流程、无用代码及可优化点。

---

## 一、当前构建流程总览

```
main.js
  └─ startProto() [src/proto/index.js]
       ├─ 1. 创建 context（加载 protoConfig.json、解析路径）
       ├─ 2. 可选：复制 Proto（projectApiRoot 存在时）
       ├─ 3. 准备临时 proto 工作区（复制并重写 import）
       ├─ 4. 统一解析 message_types：parseMessageTypesProto → enumNameToCode，msgCodeMap = enumNameToCode
       ├─ 5. 预解析各 bundle：parseBundleProtosForMapping → bundleRegistryEntries, commonRegistryEntries
       ├─ 6. 对每个 bundle 循环：
       │     ├─ runTsProtoForBundle（protoc + ts-proto → .ts）
       │     ├─ scanBundleMessages + buildMessageMap + writeMessageMap（→ *Msg.ts，使用 msgCodeMap）
       │     └─ writeMessageTypeAndRegistriesForBundle（→ message_type.ts, msg_registry_*.ts, msg_registry_common.ts）
       ├─ 7. 恢复工作区、清理临时目录
       └─ 8. runErrorCodePipeline（错误码 CSV）、打印汇总
```

---

## 二、数据流与重复解析

| 数据 | 来源 | 用途 |
|------|------|------|
| **enumNameToCode / msgCodeMap** | `parseMessageTypesProto(message_types.proto)` 一次解析 | msgCodeMap 供 `scanBundleMessages` 生成 *Msg.ts；enumNameToCode 供 `parseBundleProtosForMapping` 生成 message_type.ts + msg_registry_*.ts |

**已优化**：仅解析一次 message_types，用同一结果同时支持 *Msg.ts 与 registry 三件套。

---

## 三、无用或可删减的代码

### 1. 已删除：pbjs/pbts 旧流程与未用 path API

- ~~`src/compile/runPbjs.js`~~、~~`src/compile/runPbts.js`~~、~~`src/compile/patchProtoJs.js`~~ 已删除。
- ~~`getBundleProtoJsPath`~~、~~`getBundleProtoDtsPath`~~、~~`resolveConfiguredOutputPath`~~ 已从 paths 中移除。
- ~~`src/mapping/loadMessageTypes.js`~~ 已删除，由 `parseMessageTypesProto` 统一产出 enumNameToCode / msgCodeMap。

### 2. 已清理的路径 API

- 未使用的 `getBundleProtoJsPath`、`getBundleProtoDtsPath`、`resolveConfiguredOutputPath` 已从 `src/paths/index.js` 移除。

### 3. 仍在使用但可收敛的“旧映射链”

- **`loadMessageTypes`** → **`scanBundleMessages`** → **`buildMessageMap`** → **`writeMessageMap`**  
  - 仍被 `src/proto/index.js` 使用，用于生成 **\*Msg.ts**（CodeToMsg、MsgToCode、MapTable）。
  - 若业务已完全迁移到 **message_type.ts + msg_registry_*.ts**，可考虑停用整条链并删除 *Msg.ts 的生成；否则可保留，但见下文“优化 1”统一解析。

---

## 四、可优化实现

### 优化 1：统一 message_types 解析（已完成）

- 仅保留 `parseMessageTypesProto` 一次解析；`msgCodeMap = enumNameToCode`，同时供给 `scanBundleMessages` 与 `parseBundleProtosForMapping`。已删除 `loadMessageTypes.js`。

### 优化 2：*Msg.ts 与 registry 三件套二选一或明确分工

- **现状**：  
  - 同一套 proto 既生成 *Msg.ts（CodeToMsg/MsgToCode/MapTable），又生成 message_type.ts + msg_registry_*.ts + msg_registry_common.ts。
- **选项 A**：若 Cocos 等已全面改用 registry，可停止生成 *Msg.ts，并删除 `loadMessageTypes` → `writeMessageMap` 整条链（同时做优化 1 时，仅保留 `parseMessageTypesProto` 的 enumNameToCode 分支）。  
- **选项 B**：若需兼容旧逻辑，保留 *Msg.ts 生成，但通过优化 1 统一解析，避免两套解析逻辑。

### 优化 3：预解析与主循环的目录一致

- **现状**：预解析（步骤 5）使用的是**临时工作区**（已重写 import 的副本），主循环里 ts-proto 和 flatten 也基于同一临时工作区，一致。  
  - 但 `scanBundleMessages` 用的也是同一 `context.paths.protoWorkspaceDir`（此时已指向临时目录），因此当前无 bug，仅需在文档或注释中说明“预解析与 scan 均基于临时工作区”。

### 优化 4：writeMessageMap 的产出格式

- **现状**：`writeMessageMap` 写出的是 `let bundleMsg = <JSON>; export default bundleMsg`，类型信息弱（无 TypeScript 类型注解）。  
- **可选**：若保留 *Msg.ts，可改为生成带类型的 TS（如 `CodeToMsg: Record<number, string>`、`MsgToCode: Record<string, number>`），便于在 Cocos 中享受类型检查。

### 优化 5：错误处理与日志

- **建议**：  
  - 在 `runTsProtoForBundle`、`writeMessageTypeAndRegistriesForBundle` 等关键步骤，对错误信息附带 bundle 名称与文件路径。  
  - 预解析阶段若某 bundle 无任何 MessageType 注释，可打 warning 而非静默，便于发现 proto 遗漏。

### 优化 6：路径与配置的单一出口

- **现状**：`proto/config.js` 仅 re-export `loadProtoConfig`、`resolveProtoConfigPath`，实际主流程从 `runtime/context.js` 走 `loadConfig` + `normalizeConfig`。  
- **建议**：若 `proto/config.js` 无其他引用，可删除或改为从 `config/loadConfig.js` 统一导出，避免“两个配置入口”的错觉。

---

## 五、文件职责速览

| 模块 | 职责 | 是否被主流程使用 |
|------|------|------------------|
| **proto/index.js** | 主流程编排 | ✅ |
| **compile/runTsProto.js** | ts-proto 调用、flatten、运行时 import 重写 | ✅ |
| **compile/runPbjs.js** | 旧 pbjs 流程 | ❌ 未使用 |
| **compile/runPbts.js** | 旧 pbts 流程 | ❌ 未使用 |
| **compile/patchProtoJs.js** | 旧 pbjs 产物补丁 | ❌ 未使用 |
| ~~mapping/loadMessageTypes.js~~ | 已删除，由 parseMessageTypesProto 统一解析 | — |
| **mapping/scanProtoMessages.js** | 扫描 bundle proto → codeToMsg | ✅ |
| **mapping/buildMessageMap.js** | codeToMsg → CodeToMsg/MsgToCode/MapTable | ✅ |
| **mapping/writeMessageMap.js** | 写出 *Msg.ts | ✅ |
| **mapping/parseProtoForRegistry.js** | 解析 message_types + bundle proto → registry 用 entries | ✅ |
| **mapping/writeMessageTypeAndRegistry.js** | 写出 message_type.ts、msg_registry_*.ts | ✅ |
| **copy/copyProto.js** | 从 projectApiRoot 复制并重写 import | ✅（projectApiRoot 存在时） |
| **copy/rewriteImports.js** | 单文件 import 重写 | ✅（被 copyProto 使用） |
| **paths/index.js** | 路径解析；部分导出未使用 | ✅（部分 API 可删） |
| **runtime/context.js** | 创建运行时 context、加载配置 | ✅ |
| **runtime/seaAssets.js** | packaged 模式下资源准备 | ✅（mode 为 packaged 时） |
| **runtime/runtimeAssets.js** | 资源表 | ✅（被 seaAssets 使用） |
| **config/loadConfig.js** | 读取 protoConfig.json | ✅ |
| **config/normalizeConfig.js** | 规范化与校验 | ✅ |
| **proto/config.js** | 仅 re-export 配置加载 | ⚠️ 可合并到 config 入口 |

---

## 六、建议执行顺序

1. ~~**低风险**：删除未使用的 runPbjs/runPbts/patchProtoJs 及 paths 中未用 API。~~ **已完成**
2. ~~**中风险**：实现优化 1（统一 message_types 解析）。~~ **已完成**
3. **按需**：根据业务是否仍需要 *Msg.ts，决定是否做优化 2（停用旧链或仅统一解析）、优化 4（*Msg.ts 类型化）。
4. **收尾**：优化 5、6 与文档/注释更新。

以上为当前代码的构建流程、无用代码与可优化点的整理，便于按优先级逐步重构。
