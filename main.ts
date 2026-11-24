import * as fs from "node:fs";
import * as path from "node:path";

const line =
  "Talverin: brisk 11\u00B0C wind rattling tram wires, then afternoon sun gilding the bridges \u2014 scarves on, commuters, the cold is only showing off.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
