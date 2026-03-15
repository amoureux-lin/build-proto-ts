# 构建改为「纯 TypeScript」产物的方案讨论

**当前已采用方案一**：Proto 层使用 **ts-proto**（protoc + `protoc-gen-ts_proto`）生成纯 `.ts`，替代原 pbjs + pbts。Msg 映射方案待生成 ts 稳定后再讨论。

## 当前产物形态

| 产物 | 格式 | 说明 |
|------|------|------|
| `<bundle>Proto.js` | CommonJS JavaScript | pbjs 生成，运行时 encode/decode、Message 类 |
| `<bundle>Proto.d.ts` | 类型声明 | pbts 根据 .js 生成，与 .js 配套 |
| `<bundle>Msg.ts` | TypeScript（类 JS 写法） | 手写逻辑生成，`let xxxMsg = {...}; export default xxxMsg`，码表数据 |

也就是说：**Proto 部分是 JS + d.ts 双文件**，Msg 映射已是 .ts 但内容偏「数据 + 默认导出」。

---

## 「纯 TS」可能指的目标

1. **产物文件全是 .ts**：不再产出 .js，只产出 .ts，由业务或上层构建再编译。
2. **类型与实现合一**：每个 bundle 一份 .ts 即包含类型又包含实现，不要 .js + .d.ts 分离。
3. **源码即 TS、风格统一**：生成代码符合 TS 习惯（interface、type、export 等），便于业务直接引用和 tree-shaking。

下面方案在满足「产物为纯 .ts」的前提下，兼顾实现成本和与现有 Msg 映射、运行时的兼容性。

---

## 方案一：换用 ts-proto 生成 Proto 层（推荐度：高）

**思路**：用 [ts-proto](https://github.com/stephenh/ts-proto) 从 .proto 直接生成 **.ts 源码**（含类型 + 实现），替代当前 pbjs + pbts。

- **产物**：每个 proto 或每个 bundle 一个（或若干）`.ts` 文件，纯 TS，无 .js/.d.ts 分离。
- **优点**：
  - 原生 TS，类型与实现一体，符合「纯 TS」目标。
  - 生成的是现代 TS（interface、`MessageType` 等），tree-shaking、IDE 体验更好。
  - 项目已依赖 ts-proto，只需把构建链从 pbjs/pbts 换成 ts-proto 的插件/脚本。
- **缺点 / 注意点**：
  - **API 与 protobufjs 不同**：ts-proto 生成的是 `Message.decode(bytes)`、`Message.encode(msg)` 等，和当前 `Message.encode(message).finish()`、`Message.decode(reader)` 的用法不一致，**业务侧要改调用方式**。
  - **多 proto 合并**：当前是「一个 bundle 一个 .js」（多 proto 合并）。ts-proto 默认可按文件生成，需要自己用脚本合并或按 bundle 组织输出，以保持「一个 bundle 一套 API」的用法（若业务需要）。
  - **Msg 映射**：CodeToMsg/MsgToCode/MapTable 仍可由现有逻辑从 proto 注释扫描生成，继续产出 `<bundle>Msg.ts`，与 ts-proto 生成的类型配合使用（按码取 Message 类型等）。

**适用**：愿意改业务调用、希望长期用「纯 TS + 现代 API」时优先考虑。

---

## 方案二：保留 pbjs/pbts，后处理合并为单文件 .ts

**思路**：继续用 pbjs 生成 .js、pbts 生成 .d.ts，再用脚本把 **.d.ts 的声明** 和 **.js 的代码** 合并成一份「声明 + 实现」的 .ts 文件。

- **产物**：每个 bundle 一个 `<bundle>Proto.ts`，内含类型与实现，不再单独产出 .js / .d.ts。
- **优点**：
  - **业务 API 完全不变**：仍是 protobufjs 的 Root、Message.encode/decode 等，无需改业务代码。
  - 实现上主要是字符串/AST 层面的合并（声明在前，实现在后，注意 namespace/export）。
- **缺点**：
  - 合并脚本要处理 pbts/pbjs 的边界情况（namespace、import、三斜线等），有一定维护成本。
  - 生成的 .ts 本质仍是「JS 风格代码 + 类型声明」，可读性不如原生 TS 生成。
  - 若业务最终要编译成 JS，仍需一步 tsc/esbuild 等，只是「中间产物」变成了纯 .ts。

**适用**：必须保持现有 protobufjs API、又希望产物形态统一为 .ts 时。

---

## 方案三：pbjs 输出 target 改为 ES module + 类型内联（若工具支持）

**思路**：若 pbjs 或社区有插件能输出「带 JSDoc/内联类型的 JS」或「单文件 .ts」，则直接改用该 target，减少后处理。

- **现状**：官方 protobufjs-cli 的 pbjs 主要支持 static-module（CommonJS）等，**不直接支持输出 .ts**；pbts 是单独从 .js 生成 .d.ts。
- **可能性**：社区有实验性 wrapper 或 fork 尝试输出 TS，但成熟度和可维护性需自行评估。
- **结论**：可作为调研方向，但短期内不如方案一、二确定。

---

## 方案四：仅统一「构建入口」为 TS，Proto 仍为 .js + .d.ts

**思路**：不改变 Proto 的代码生成（仍 pbjs + pbts），只在**构建与发布**层面做文章：例如用 tsc 把「业务代码 + 生成的 .d.ts」一起编译，或对外只暴露 .ts 入口而实现仍是 .js。

- **产物**：对「纯 TS」而言更多是**工程上的统一**，而非每个文件都是 .ts 源码。
- **优点**：几乎不用改现有 proto 构建和业务调用。
- **缺点**：并未实现「Proto 层源码即 .ts」的目标，只是产物形态或构建流程上的调整。

**适用**：若「纯 TS」主要指最终打包/发布形式，而不是「生成源码必须是 .ts」，可考虑。

---

## 方案五：Msg 映射保持 .ts，仅把 Proto 改为 .ts（方案一或二的组合）

**思路**：  
- **Proto**：按方案一（ts-proto）或方案二（pbjs+pbts 合并）产出 `<bundle>Proto.ts`。  
- **Msg**：继续用现有逻辑生成 `<bundle>Msg.ts`（CodeToMsg、MsgToCode、MapTable），并在需要时补上类型（如 `as const`、显式类型注解），使与 Proto 的 Message 类型一致，便于按码做类型安全分发。

这样**所有构建产出都是 .ts**，满足「纯 TS」的直观目标。

---

## 对比小结

| 方案 | 产物形态 | 业务改动 | 实现难度 | 推荐场景 |
|------|----------|----------|----------|----------|
| 一、ts-proto | 纯 .ts，类型+实现一体 | 需改 API（encode/decode 等） | 中（替换管道 + 可能合并/按 bundle） | 新项目或可接受改调用 |
| 二、pbjs+pbts 合并 | 单文件 .ts（声明+实现） | 无 | 中高（合并脚本稳健性） | 必须保留现有 protobufjs API |
| 三、pbjs 直接出 TS | 视插件而定 | 无或小 | 高（依赖不成熟工具） | 仅作调研 |
| 四、只改构建/入口 | 不保证每文件 .ts | 无 | 低 | 仅要工程层面「TS 化」 |
| 五、Proto 改 .ts + Msg 保持 .ts | 全部 .ts | 取决于选一还是二 | 同方案一或二 | 明确要「全产物 .ts」 |

---

## 建议

- 若目标是**产物全是 .ts 且类型与实现合一**，并可以接受**业务侧改用 ts-proto 的 API**：优先做**方案一（ts-proto）**，Msg 映射沿用现有逻辑并微调类型（方案五）。
- 若必须**零业务改动**、仅把 Proto 从 .js+.d.ts 变成一份 .ts：选**方案二（合并 .d.ts + .js 为 .ts）**，并做好测试和边界 case。

---

## 方案一已实现说明

- **入口**：`src/compile/runTsProto.js`，对外导出 `runTsProtoForBundle(context, bundle)`。
- **依赖**：**protoc** 已作为 devDependency（npm 包 `protoc`）加入项目，**无需在系统安装**。执行 `npm install` 后构建会优先使用项目内的 protoc；若未安装该包，则回退到系统 PATH 中的 protoc（此时需自行安装）。
- **产出**：每个 bundle 对应 `build/output/<bundleName>/` 目录，其中为 ts-proto 生成的 `.ts` 文件（按 .proto 文件对应，可能含子目录）；Msg 映射仍由现有逻辑生成，后续可再讨论。
