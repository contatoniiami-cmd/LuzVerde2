# LuzVerdeWeb

[![Build Status](https://github.com/unknownskl/greenlight/actions/workflows/build_desktop.yml/badge.svg)](https://github.com/unknownskl/greenlight/actions/workflows/build_desktop.yml)

LuzVerdeWeb é uma aplicação web open-source para streaming de Xbox e xCloud, desenvolvida em Javascript e Typescript. Esta é a versão web do cliente Greenlight desktop.

**AVISO: LuzVerdeWeb não é afiliada com Microsoft, Xbox ou Moonlight. Todos os direitos e marcas registradas são propriedade de seus respectivos donos.**

## Funcionalidades

- Stream de vídeo e áudio do Xbox One e Xbox Series
- Suporte para controles de gamepad
- Suporte a rumble no xCloud
- Controles via teclado
- Lista de amigos online integrada

<img src="images/main.png" width="400" /> <img src="images/stream.png" width="400" />

## Requisitos

- NodeJS ([https://nodejs.org/](https://nodejs.org/))
- Yarn ([https://yarnpkg.com/](https://yarnpkg.com/))

## Instalação e Desenvolvimento Local

Clone o repositório:

```bash
git clone https://github.com/unknownskl/greenlight.git
cd greenlight
```

Instale as dependências:

```bash
yarn
```

### Rodando a versão Web

Para rodar a aplicação web em modo de desenvolvimento:

```bash
cd packages/web
yarn dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build de Produção

Para criar um build de produção:

```bash
cd packages/web
yarn build
yarn start
```

## Controles de Teclado

As teclas são mapeadas da seguinte forma por padrão:

    Dpad: Controles de direção do teclado numérico
    Botões: A, B, X, Y, Backspace (Mapeado como B), Enter (Mapeado como A)
    Nexus (Botão Xbox): N
    Botão Esquerdo: [
    Botão Direito: ]
    Gatilho Esquerdo: -
    Gatilho Direito: =
    View: V
    Menu: M

## Estatísticas de Streaming

Durante o stream, você pode mostrar estatísticas de debug que contêm dados extras sobre as filas de buffer e outras informações. Para trazer isso, pressione `~` no seu teclado.

Quando possível, sempre forneça essas informações com seu problema, se for relacionado.

## Lista de Amigos Online

A aplicação também fornece uma maneira de ver quais de seus amigos estão online. Isso pode ser útil quando você quer verificar rapidamente se alguém está online para jogar :)

## Changelog

Veja [changelog](https://unknownskl.github.io/greenlight/docs/desktop/changelog).

## Licença

Este projeto é open-source e está disponível sob a mesma licença do projeto Greenlight original.
