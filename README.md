# DeckList Assistant

Userscript gratuito e open source para auxiliar o preenchimento da função **Comprar por Lista** no site Liga One Piece.

> Projeto independente, não afiliado, patrocinado ou aprovado pela Liga One Piece.

## Instalação para usuários

### 1. Instale o Tampermonkey

Instale a extensão Tampermonkey no Chrome, Edge ou Firefox.

### 2. Instale o DeckList Assistant

Depois que este repositório estiver publicado, use o link abaixo, substituindo `SEU_USUARIO` pelo seu usuário do GitHub:

```text
https://raw.githubusercontent.com/SEU_USUARIO/decklist-assistant/main/dist/decklist-assistant.user.js
```

Ao abrir o link, o Tampermonkey exibirá a tela de instalação. Clique em **Instalar**.

### 3. Abra a página Comprar por Lista

Acesse a função Comprar por Lista e clique no campo de cards. O painel do DeckList Assistant aparecerá na página.

### 4. Cole sua lista

```text
4xEB03-053
3xOP06-116
2xST30-012
```

Confira a validação e clique em **Iniciar preenchimento**.

## Recursos

- Validação e normalização da lista.
- Soma automática de códigos duplicados.
- Histórico e restauração de sessão no navegador.
- Controle detalhado de velocidade com alertas de risco.
- Seleção preferencial da impressão padrão.
- Relatório, exportação TXT/CSV e repetição das falhas.
- Temas, diagnóstico, contato e doações PIX.
- Atualizações por GitHub Releases e mecanismo nativo do Tampermonkey.

## Como publicar no GitHub

O passo a passo completo está em [`docs/PUBLICAR_NO_GITHUB.md`](docs/PUBLICAR_NO_GITHUB.md).

Resumo:

1. Crie um repositório público chamado `decklist-assistant`.
2. Envie todos os arquivos desta pasta.
3. Substitua `SEU_USUARIO/decklist-assistant` no código pelo endereço real.
4. Rode `npm install` e `npm run build`.
5. Faça commit da pasta `dist`.
6. Crie uma tag como `v6.0.0`; o GitHub Actions criará a Release.

## Desenvolvimento

Requisitos: Node.js 22 e npm.

```bash
npm install
npm run dev
npm run check
npm run build
```

O arquivo distribuível é gerado em:

```text
dist/decklist-assistant.user.js
```

## Atualizações

Há duas formas complementares:

1. O programa consulta a última Release pública pela API do GitHub ao iniciar e ao clicar em **Buscar atualizações**.
2. O cabeçalho do userscript contém `@updateURL` e `@downloadURL`, permitindo que o Tampermonkey verifique o arquivo hospedado no GitHub.

## Privacidade

Listas, histórico, sessão e preferências permanecem no navegador. O programa não lê senhas ou dados de pagamento e não envia as listas para servidores externos.

## Contato

`luiz.traghia@gmail.com`

## Licença

MIT. Consulte [`LICENSE`](LICENSE).
