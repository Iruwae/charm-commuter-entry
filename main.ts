import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });

const line =
  "Mirell: gale-force winds all afternoon — the washing on every line in Old Town has officially emigrated.";

writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
