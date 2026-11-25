import * as fs from "node:fs";

const fortune = "Someone will call you intelligent today. It will be a test.";

// The sealed scorer only accepts 1-200 characters of non-whitespace text:
// fail loudly here instead of shipping an invalid entry.
if (fortune.length === 0 || fortune.length > 200 || fortune.trim().length === 0) {
  throw new Error(`fortune must be 1-200 non-whitespace characters, got ${fortune.length}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
console.log(fortune);
