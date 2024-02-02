Feature: Validação da resposta da API Trello
 
Scenario:  Validação da resposta da API Trello
    Given Que envio um GET para o endpoint
    Then  Vejo o status code 200 e o body da resposta