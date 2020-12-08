# Desafio Processo seletivo estágio Reportei

**Por:** [Igor Westermann Lima ](https://github.com/IgorWestermann) < i.westma@gmail.com >. 

## 1. Sumário

- [1. Sumário](#1-sumário)
- [2. O Projeto](#2-funcionando)
- [3. Iniciando](#3-iniciando)
- [4. O Design](#4-0-design)
- [5. Dependências](#5-dependências)

## 2. Sobre o projeto
O projeto consiste na criação de um biblioteca virtual como desafio do processo de seleção de estágio da empresa [App Masters](https://appmasters.io/en/)


## 3. Inicialização

Para inicializar o projeto primeiro, clone o repositório atraves do comando no terminal 
`git clone https://github.com/IgorWestermann/Desafio-Reportei.git`
`cd desafio-app-masters`
E instale as dependencias.
   - `npm i` para se estiver usando o NPM.
   - `yarn i` para Yarn.
   
Após instalar as dependências abra a pasta do Frontend com `cd frontend` e execute o comando
   - `npm start` para se estiver usando o NPM.
   - `yarn start` para Yarn.
Assim inicializanodo o servidor local do Frontend.

Depois use `cd ..` para voltar uma pasta e entre no backend com `cd backend`:
   - `npm run:dev` para se estiver usando o NPM.
   - `yarn run:dev` para Yarn.
Inicializando o servidor backend.

## 4. O Design

Para o design da aplicação, decidi utilizar padrões simples ,utilizando referencias ao layout do [Twitter](https://twitter.com.br/).

## 5. Dependências 

Para execução do projeto, utilizei o [MongoDB](https://www.mongodb.com/) para banco de dados e as seguintes dependências:

#### 5.1. [React Router Dom](https://reactrouter.com/)
O React Router Dom é uma das bibliotecas mais utilizadas para configurar navegação. 
#### 5.2. [Styled Components](https://styled-components.com/)
O Styled Components facilita muito na hora de criar e estilizar um componente, por isso foi escolhido.
#### 5.3. [Polished](https://polished.js.org/)
O Polished é uma ferramenta que auxilia criação de estilos junto do Styled Components.
#### 5.4. [Express](https://expressjs.com/pt-br/)
Express.js é um dos mais populares frameworks para servidores em Node.js.
#### 5.5. [Mongoose](https://mongoosejs.com/)
O Mongoose é uma biblioteca do Nodejs para modelar os dados da sua aplicação.
#### 5.6. [Nodemon](https://nodemon.io/)
Nodemon é uma ferramenta que ajuda a desenvolver aplicações em Node.js que reinicia a aplicação sempre que arquivos forem alterados.

