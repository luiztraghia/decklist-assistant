import { readFile } from "node:fs/promises";

const file = "dist/decklist-assistant.user.js";
const code = await readFile(file, "utf8");
const required = ["// ==UserScript==", "@name", "DeckList Assistant", "@version", "// ==/UserScript=="];
for (const marker of required) {
  if (!code.includes(marker)) throw new Error(`Build inválido: ausente ${marker}`);
}
console.log(`Build verificado: ${file} (${code.length} caracteres)`);
