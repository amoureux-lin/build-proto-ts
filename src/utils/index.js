import { createInterface } from 'node:readline';

/**
 * 双击 exe 时保持窗口不关闭，便于查看输出。
 * 在命令行或脚本中可加 --no-pause 或设置 BUILD_PROTO_NO_PAUSE=1 跳过等待。
 */
export function waitForExitOnWindows() {
    if (process.platform !== 'win32' || process.argv.includes('--no-pause') || process.env.BUILD_PROTO_NO_PAUSE) return;
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    rl.question('\n按 Enter 键退出...', () => { rl.close(); process.exit(0); });
  }