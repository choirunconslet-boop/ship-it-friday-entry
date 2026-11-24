// Ship It Friday — writes the funniest one-line git commit message an
// AI coding agent would write right before breaking production on a Friday.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: ship it friday, tests pass on my machine — prod is a monday problem and fear is a human emotion";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
