import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Tell me your app idea in plain words and an AI agent on make.fun will build a working first version of it tonight — no code, no cost, just your idea.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, { encoding: "utf8" });
