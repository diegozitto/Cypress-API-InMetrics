const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    /**
    * necessários para testes com BDD, a partir de onde será feita a leitura dos testes e2e
    */
    specPattern: "cypress/e2e/feature/*.feature",
  },
});