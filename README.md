# 👒 DeckList Assistant

Assistente gratuito e open source para preencher automaticamente as decklists ou função **Comprar por Lista** da Liga One Piece.

> Projeto independente, não afiliado, patrocinado ou aprovado pela Liga One Piece.

## Instalação

### 1. Instale o Tampermonkey

Escolha seu navegador:

- [Instalar no Google Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Instalar no Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
- [Instalar no Mozilla Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)

O Tampermonkey é a extensão que permite instalar e executar o DeckList Assistant no navegador.

### 2. Instale o DeckList Assistant

Com o Tampermonkey instalado, clique no botão abaixo:

## [➡️ Instalar DeckList Assistant](https://raw.githubusercontent.com/luiztraghia/decklist-assistant/main/dist/decklist-assistant.user.js)

O Tampermonkey abrirá uma tela mostrando as informações do programa. Clique em **Instalar**.

> Se aparecer apenas uma página com código, confirme se o Tampermonkey está instalado e ativado no navegador.

### 3. Abra a Liga One Piece

Acesse a página [Comprar por Lista](https://www.ligaonepiece.com.br/?view=cards/lista).

O painel **👒 DeckList Assistant** aparecerá no canto da tela.

### 4. Selecione o campo da Liga

Clique no campo **Adicione a lista de cards** da página. Isso permite que o DeckList Assistant identifique onde deve preencher as cartas.

### 5. Cole sua lista

Use uma carta por linha neste formato (mesmo formato de importação dos simuladores e deckbuilders):

```text
4xEB03-053
3xOP06-116
2xST30-012
```

O número antes do `x` representa a quantidade desejada. O restante é o código da carta.

### 6. Inicie o preenchimento

Clique em **Iniciar preenchimento** e acompanhe o progresso na aba **Execução**.

No primeiro uso, faça um teste com apenas duas ou três cartas e selecione a velocidade **Médio**. Se tudo funcionar corretamente, você poderá experimentar as velocidades mais rápidas.

## Configurações

Na aba **Configurações**, você pode escolher:

- Muito rápido;
- Rápido;
- Médio;
- Lento.

Também é possível ignorar individualmente:

- Arte Alternativa;
- Parallel;
- SP;
- Manga.

As velocidades mais rápidas podem falhar quando o site ou a conexão estiverem lentos. Nesse caso, use **Médio** ou **Lento**.

## Como atualizar

O DeckList Assistant procura novas versões no GitHub.

1. Abra a aba **Atualizações** no painel.
2. Clique em **Buscar atualizações**.
3. Quando uma nova versão aparecer, clique em **Instalar atualização**.
4. O Tampermonkey abrirá a tela da nova versão.
5. Clique em **Atualizar** ou **Instalar**.
6. Volte à página da Liga e atualize a página.

Se o botão de instalação não aparecer, clique em **Abrir lançamento**, abra o arquivo `.user.js` da versão e confirme a atualização no Tampermonkey.

## Privacidade e segurança

- Não acessa senhas;
- Não lê dados de pagamento;
- Não envia informações para servidores externos;
- Funciona localmente no navegador;
- Atua na página da Liga One Piece;
- Possui código aberto para consulta da comunidade.

## Problemas comuns

### O painel não apareceu

- Confirme se o Tampermonkey está ativado;
- Confirme se o DeckList Assistant aparece como ativado no painel do Tampermonkey;
- Atualize a página da Liga com `Ctrl + F5`.

### As sugestões de cartas não aparecem

- Clique novamente no campo **Adicione a lista de cards**;
- Use a velocidade **Médio** ou **Lento**;
- Teste inicialmente com uma única carta;
- Verifique se o código está correto.

### A atualização apresenta erro 404

Isso normalmente significa que a nova versão ainda não foi publicada como uma Release pública no GitHub. Tente novamente mais tarde ou consulte a página de [Releases](https://github.com/luiztraghia/decklist-assistant/releases).

## Para desenvolvedores

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

As instruções de publicação estão em [`docs/PUBLICAR_NO_GITHUB.md`](docs/PUBLICAR_NO_GITHUB.md).

## Contato

Encontrou um problema, tem uma sugestão ou deseja deixar um elogio?

E-mail: `luiz.traghia@gmail.com`

## Apoie o projeto

Este projeto é gratuito e open source. Se ele economizou seu tempo, considere me ajudar a terminar meu deck. 😊

Chave PIX: luiz.traghia@gmail.com

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [`LICENSE`](LICENSE).
