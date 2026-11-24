import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "It had my name on it. My name. So I ate it. You wrote my name on a snack and then acted surprised.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
