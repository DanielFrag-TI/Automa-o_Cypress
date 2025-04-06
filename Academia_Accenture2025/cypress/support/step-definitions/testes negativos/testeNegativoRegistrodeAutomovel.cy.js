import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps'


And('não preenche os campos obrigatórios da aba Send Quote',()=>{
    cy.preencherSendQuoteNaoObrigatorio()
})


Then('o usuário recebe uma mensagem de falha de envio do formulário', () => {
    cy.mensagemFalhaDeEnvio()
})