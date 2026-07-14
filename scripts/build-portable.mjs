import { readFile, writeFile } from 'node:fs/promises';

const source = await readFile('src/main.ts', 'utf8');
const version = JSON.parse(await readFile('package.json', 'utf8')).version;
const base = 'https://raw.githubusercontent.com/luiztraghia/decklist-assistant/main/dist';
const metadata = `// ==UserScript==
// @name         DeckList Assistant
// @namespace    https://github.com/luiztraghia/decklist-assistant
// @version      ${version}
// @description  Preenche listas de cartas com validação, relatório e atualizações via GitHub.
// @author       Luiz Fernando Traghia e colaboradores
// @license      MIT
// @match        https://www.ligaonepiece.com.br/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        GM_download
// @connect      api.github.com
// @connect      raw.githubusercontent.com
// @connect      github.com
// @run-at       document-idle
// @noframes
// @updateURL    ${base}/decklist-assistant.meta.js
// @downloadURL  ${base}/decklist-assistant.user.js
// ==/UserScript==`;

await writeFile('dist/decklist-assistant.user.js', `${metadata}\n\n${source}\n`);
await writeFile('dist/decklist-assistant.meta.js', `${metadata}\n`);
