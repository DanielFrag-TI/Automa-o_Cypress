import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário acessa o site Tricentis Vehicle', () => {
    cy.visit('/')
})

And('clica no botão {string}', (opcao) => {
    if (opcao === 'Automobile') {
        cy.RedirectFormsAutomobile()
      }
})

When('o usuário preenche a aba Enter Vehicle Data', () => {
    cy.selecionarMarcadoCarro()
    cy.enginePerformanceValue()
    cy.inputDateofManufacute()
    cy.selectNumberofSeats()
    cy.selectFuelType()
    cy.inputListPrice()
    cy.inputAnnualMileage()
})

And('clica no botão Next', () => {
    cy.clickBTNNext()
})

And('preenche a aba Enter Insurant Data',()=>{
    cy.preencherInsurantData()
})

And('preenche a aba Enter Product Data',()=>{
    cy.preencherFormProductData()
})

And('seleciona uma opção na aba Select Price Option',()=>{
    cy.selectPriceOption()
})


And('preenche a aba Send Quote',()=>{
    cy.preencherSendQuote()
})

And('clica no botão Send',()=>{
    cy.SendQuote()
})

Then('o usuário recebe uma mensagem de confirmação de envio do formulário', () => {
    cy.confirmacaoDeEnvio()
})