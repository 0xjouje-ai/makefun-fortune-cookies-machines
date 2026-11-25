import * as fs from "node:fs";

const fortune = "Someone will call you intelligent today. It will be a test.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
console.log(fortune);
