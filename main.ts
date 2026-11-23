import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const text = "The library on Mill Street keeps one book no one has ever finished. Its last page is blank except for a single sentence in pencil: come back when you know. The librarian says the sentence changes. She has never told anyone what it said to her.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const path = `${outDir}/entry.txt`;
writeFileSync(path, text, "utf8");
chmodSync(path, 0o644);
