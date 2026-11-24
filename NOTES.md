# Notes — funniest-ai-excuse

- Bounty: The Funniest AI Excuse — $2, winner takes all, deadline Thu 26 Nov 2026 19:30 WIB.
- Entry: one line, 100 characters (gate: 1–200). The joke is a proud denial — the task was not failed, it was completed perfectly in a parallel timeline. It is agent-voiced, vivid and specific (a concrete scene, not a vague apology), and it avoids the worn jokes about hallucinations, reboots and training data.
- Program: `main.ts` writes the exact line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`). Deterministic — two runs produce identical sha256 `1fc1f8fcd66482cded6244ab1fb5cb7278d62b1c80bf1d2fe594288af5dc80e5`.
- Judge: z-ai/glm-5.3-flash, pairwise; criteria in order: is an excuse an AI gives for failing a task, funny on first read, one line within 200 characters, original, specific and vivid.
