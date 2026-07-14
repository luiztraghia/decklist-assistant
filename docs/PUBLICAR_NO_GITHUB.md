# Publicar o DeckList Assistant no GitHub

## 1. Criar o repositório

1. Entre no GitHub.
2. Clique em **New repository**.
3. Use o nome `decklist-assistant`.
4. Marque como **Public**.
5. Não crie README ou licença nessa etapa, pois eles já existem no pacote.

## 2. Enviar os arquivos pelo navegador

1. Extraia o ZIP.
2. Abra o repositório criado.
3. Clique em **Add file → Upload files**.
4. Arraste todo o conteúdo da pasta extraída.
5. Confirme em **Commit changes**.

> O upload pelo navegador pode não preservar pastas vazias, mas este projeto não depende delas.

## 3. Configurar o endereço do repositório

Pesquise no projeto por:

```text
luiztraghia/decklist-assistant
```

Substitua pelo endereço real, por exemplo:

```text
LuizTraghia/decklist-assistant
```

Faça a substituição principalmente em `src/main.ts`, `dist/decklist-assistant.user.js`, `vite.config.ts` e README.

## 4. Link público de instalação

O link será:

```text
https://raw.githubusercontent.com/luiztraghia/decklist-assistant/main/dist/decklist-assistant.user.js
```

Esse é o endereço que você deve compartilhar nos grupos. O navegador encaminhará o arquivo ao Tampermonkey.

## 5. Criar uma Release

1. Abra **Releases → Draft a new release**.
2. Crie a tag `v6.0.0`.
3. Publique a Release.

Ao usar tags futuras como `v6.0.1`, o workflow `.github/workflows/release.yml` compila o projeto e anexa o userscript automaticamente.

## 6. Atualizar o programa

1. Atualize a versão em `package.json`.
2. Faça as alterações em `src`.
3. Execute `npm run check`.
4. Envie o commit.
5. Crie uma tag correspondente, por exemplo `v6.0.1`.

O programa encontrará a nova Release sem servidor dedicado.
