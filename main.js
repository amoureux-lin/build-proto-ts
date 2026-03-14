import { waitForExitOnWindows } from './src/utils/index.js';
import { startProto } from './src/proto/index.js';

async function main() {
  await startProto();
  waitForExitOnWindows();
}
main().catch((err) => {
  console.error(err);
  process.exit(1);
});