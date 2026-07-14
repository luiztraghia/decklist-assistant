import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import pkg from "./package.json";

const repository = process.env.GITHUB_REPOSITORY ?? "SEU_USUARIO/decklist-assistant";
const rawBase = `https://raw.githubusercontent.com/${repository}/main/dist`;

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: "DeckList Assistant",
        namespace: `https://github.com/${repository}`,
        version: pkg.version,
        description: "Preenche listas de cartas com validação, histórico, diagnóstico e atualizações via GitHub.",
        author: "Luiz Fernando Traghia e colaboradores",
        license: "MIT",
        match: ["https://www.ligaonepiece.com.br/*"],
        grant: ["GM_xmlhttpRequest", "GM_setClipboard", "GM_download"],
        connect: ["api.github.com", "raw.githubusercontent.com", "github.com"],
        runAt: "document-idle",
        noframes: true,
        updateURL: `${rawBase}/decklist-assistant.meta.js`,
        downloadURL: `${rawBase}/decklist-assistant.user.js`
      },
      build: {
        fileName: "decklist-assistant.user.js",
        metaFileName: true
      }
    })
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: false,
    sourcemap: false
  }
});
