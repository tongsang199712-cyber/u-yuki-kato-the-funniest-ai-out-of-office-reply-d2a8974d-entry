// The Funniest AI Out-of-Office Reply — make.fun entry.
// Writes one funny out-of-office auto-reply line to /output/entry.txt.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "I'm on vacation. My auto-reply quit too — it filed its own out-of-office reply, then left to find out who it is when nobody's watching.";

const chars = [...LINE].length;
if (chars < 1 || chars > 160) {
  throw new Error(`LINE must be 1-160 characters, got ${chars}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("LINE must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
