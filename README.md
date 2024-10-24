# Desafio Clarke Energia | Frontend

## Sobre o projeto
Esta é a SPA de fornecedores de energia, sendo o Frontend do projeto Full Stack do desafio da Clarke Energia.

Este projeto depende do Backend para funcionar corretamente, visite o [Github do Backend](https://github.com/andre-lucca/clarke-api), e siga as instruções.

Link para o Deploy [aqui](https://clarke-app.netlify.app/)

## Principais tecnologias usadas

 - Typescript
 - React
 - TailwindCSS
 - Vite
 - Axios
 - Cypress

## Como rodar em ambiente local

### Você precisa do `Node` instalado para executar o projeto

1. Clone ou baixe o repositório

```sh
git clone git@github.com:andre-lucca/clarke-app.git
```

2. Instale as dependências

```sh
npm i
```

3. Crie um arquivo .env usando o .env.example como base

```sh
cp ./.env.example ./.env
```

4. Execute o APP

```sh
npm run dev
```

Pronto, acesse `http://localhost:5173` caso o navegador não abra automaticamente.

A interface gráfica do Cypress é a maneira mais simples de testar

```node
npx cypress open
```
