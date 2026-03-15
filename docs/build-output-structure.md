# build 输出目录结构说明

## 当前结构（已扁平化，无 common 子目录）

构建会在生成后做两次扁平化：  
1）把 `output/<bundle>/<bundle>/*.ts` 移到 `output/<bundle>/*.ts`；  
2）把 `output/<bundle>/common/*.ts` 移到 `output/<bundle>/*.ts` 并删除 `common/` 目录，import 改为 `./xxx`。

```
build/output/
├── common/
│   ├── game_common_player.ts
│   ├── game_common_room.ts
│   ├── gateway.ts
│   ├── google/                 ← 仅保留 google/protobuf 子目录
│   │   └── protobuf/timestamp.ts
│   └── commonMsg.ts
├── bato/
│   ├── bato.ts
│   ├── game_common_player.ts
│   ├── game_common_room.ts     ← 原 common/ 下文件，已提到根
│   └── batoMsg.ts
├── color/
│   ├── color.ts
│   ├── game_common_player.ts
│   ├── game_common_room.ts
│   └── colorMsg.ts
└── …（其他 bundle 同理）
```

即：**每个 bundle 下所有 .ts 均在 `output/<bundle>/*.ts`，不再有 `common/` 子目录**；仅 `google/` 等其它依赖仍为子目录。

---

## Cocos Creator 中找不到 "protobufjs/minimal"

生成代码使用 `import _m0 from "protobufjs/minimal"`，Cocos 无法解析 npm 包名。可在 **protoConfig.json** 中配置替换路径，构建时会改写所有生成 .ts 的 import：

```json
{
  "tsProto": {
    "protobufjsMinimalImport": "./lib/protobufjs-minimal",
    "longImport": "./lib/long"
  }
}
```

- **protobufjsMinimalImport**：替换 `from "protobufjs/minimal"`。填相对生成文件的路径，例如在 Cocos 里把 protobufjs 的 minimal 导出放到 `assets/.../lib/protobufjs-minimal.ts`，则用 `"./lib/protobufjs-minimal"`。
- **longImport**：替换 `from "long"`，可选。

路径按**拷贝到 Cocos 工程后**的目录写（相对生成的 bato.ts 等文件）。不配则不改写，适合 Node 或已能解析 `protobufjs/minimal` 的环境。
