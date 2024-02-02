<h1 align="center">Cypress com Cucumber para API</h1>
Desafio para a API https://api.trello.com/1/actions/592f11060f95a3d3d46a987a
utilizando cypress + cucumber.

### O testes é dividido em 3 etapas
- [x] Enviar requisição 'GET'
- [x] Realizar a validação do seu status response
- [x] exibir o conteúdo do campo “name” da estrutura “list”

### Configurações feitas:

1. npm init
2. npm install cypress@12.1.0 --save-dev
3. npm install --save-dev cypress-cucumber-preprocessor
4. npm install cypress-plugin-api

• Inclusão no [pastaComNomeDoProjeto]/package.json: 
- ,
   "cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/steps"
  }

• Inclusão no [pastaComNomeDoProjeto]/cypress.config.js:
- const cucumber = require('cypress-cucumber-preprocessor').default;
- ,
    specPattern: "cypress/e2e/feature/*.feature",
  },

• Na pasta cypress/support:
 - no arquivo e2e.js --> import './commands' e import 'cypress-plugin-api'
 - criar o arquivo index.js e adicionar --> require("./steps"); e require("./commands");

• Na pasta cypress/plugins:
- criar arquivo index.js e adicionar -->
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

• Nos arquivos dentro da pasta steps:
- Adicionar o --> import { Given, Then } from "cypress-cucumber-preprocessor/steps";
  para habilitar os testes em BDD
  
### Linguagens
- JavaScript
- [Cypress](https://www.cypress.io/) na versão 12.1.0
- [Node.js](https://nodejs.org/en/)

<div style="display: inline_block"><br>
  <img align="center" alt="Diego-Java" height="100" width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain-wordmark.svg"> 
  <img align="center" alt="Diego-Java" height="100" width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"> 
 <img align="center" alt="Diego-Java" height="100" width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"> 
</div>


- [LinkedIn](Diego_Zito): [https://www.linkedin.com/in/diego-zito/](https://www.linkedin.com/in/diego-zito/)
- [GitHub](diegozitto): [https://github.com/diegozitto](https://github.com/diegozitto)
