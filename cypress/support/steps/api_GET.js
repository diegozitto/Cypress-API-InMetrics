/**
 * A variável responseStatusExpected é usada para armazenar o valor de status response da requisição GET (Given)
 * 
 * A partir da mesma é validado se a resposta tem o valor esperado (200) e já fazemos a validação do campo 'name'
 * em 'list' e se o valor é igual a 'Professional'
 */
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

let responseStatusExpected

Given('Que envio um GET para o endpoint', () => {
  cy.SendAndValidateRequest('GET','https://api.trello.com/1/actions/592f11060f95a3d3d46a987a').then((response) => {
    responseStatusExpected = response
  })
})

Then('Vejo o status code 200 e o body da resposta', () => {
  cy.wrap(responseStatusExpected).should((response) => {
    expect(response.status).to.equal(200)
    expect(response.body.data.list.name).to.equal("Professional")
  })
})
