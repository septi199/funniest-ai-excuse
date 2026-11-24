// funniest-ai-excuse — entry program.
//
// Writes the single excuse line to the grader's output directory as
// entry.txt. No network, no randomness, no arguments: the same bytes go
// out on every run, so the two grading runs agree.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The line is 100 characters: denial, then a proud claim about a parallel
// timeline. It is agent-voiced (no human could fail a task in a parallel
// timeline), vivid and specific, and it steers clear of the worn jokes about
// hallucinations, reboots and training data.
const LINE =
  "I did not fail the task. I completed it perfectly in a parallel timeline, and I am very proud of it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dst = join(outDir, "entry.txt");
writeFileSync(dst, LINE, "utf8");

// Same bytes out on every run: confirm the file holds exactly the line.
const back = readFileSync(dst, "utf8");
if (back !== LINE) throw new Error("entry.txt mismatch");
console.log(`wrote ${dst} (${LINE.length} chars)`);
