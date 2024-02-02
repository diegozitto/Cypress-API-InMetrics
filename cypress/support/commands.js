/**
 * cy.api() no lugar de cy.request() devido ao plugin instalados
 */

Cypress.Commands.add('SendAndValidateRequest', (responseType, url)=>{
   return cy.api({
        method: responseType,
        url: url,
    }).then((response) => {
        return response
     })
})