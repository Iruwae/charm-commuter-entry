import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Read the entry text shipped next to this file, byte for byte.
const data = readFileSync(new URL("./entry.txt", import.meta.url));

// Write the exact bytes to $OUTPUT_DIR/entry.txt (default "/output").
const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), data);
