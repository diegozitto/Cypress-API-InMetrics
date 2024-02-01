describe('Validar requisições API', () => {
  it('POST', () => {

    cy.request({
      //requisição desejada
      method : 'POST',
      // url da aplicação
      url: 'https://curso-automacao-user-service.herokuapp.com/auth',
      //formato do conteúdo, request body
      headers:{"Content-type": "application/json" 
      },
      //o que será enviado para teste e o formato
      body:{
        username: "admin@automacao.org.br",
        password: "password01"
      }
          //validando se a requisição retornou o status desejado      
    }).then((response) => {
            expect(response.status).to.eq(200)
      })

  })
})