describe('Validar requisições API', () => {
    it('GET', () => {
        // requisição GET foi enviada e o response status foi validado
        cy.request({
            method: 'GET',
            url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
          }).then((response) => {
                expect(response.status).to.eq(200);
         })
//            cy.get('.list').contains('nome').then((element) => {
//                
//                const conteudo = element.text();
//          
//                cy.log(`Conteúdo encontrado na classe "list": ${conteudo}`);
//   })
  })
})