import { faker } from '@faker-js/faker'
import { SEND_QUOTE_ELEMENTS, ABA_IDS } from '../elements/elements'
import { verificarCamposObrigatorios } from '../utils/utils';



Cypress.Commands.add('preencherSendQuote', () => {
  cy.get(SEND_QUOTE_ELEMENTS.EMAIL).type(faker.internet.email())
  cy.get(SEND_QUOTE_ELEMENTS.PHONE).type(faker.phone.number('###########').replace(/\D/g, ''))
  cy.get(SEND_QUOTE_ELEMENTS.USERNAME).type(faker.internet.userName())
  cy.get(SEND_QUOTE_ELEMENTS.PASSWORD).type(Cypress.env("password"), { log: false })
  cy.get(SEND_QUOTE_ELEMENTS.CONFIRM_PASSWORD).type(Cypress.env("password"), { log: false })
  cy.get(SEND_QUOTE_ELEMENTS.COMMENTS).type(faker.lorem.sentences(2))
  verificarCamposObrigatorios(ABA_IDS.QUOTE)
})


Cypress.Commands.add('preencherSendQuoteNaoObrigatorio', () => {
  cy.get(SEND_QUOTE_ELEMENTS.PHONE).type(faker.phone.number('###########').replace(/\D/g, ''))
  cy.get(SEND_QUOTE_ELEMENTS.COMMENTS).type(faker.lorem.sentences(3))
})

Cypress.Commands.add('SendQuote', () => {
  
  cy.get(SEND_QUOTE_ELEMENTS.SEND_BUTTON).click()
})

Cypress.Commands.add('confirmacaoDeEnvio', () => {
  cy.get(SEND_QUOTE_ELEMENTS.LOADING_PDF,{ timeout: 10000 }).should('not.exist')
  cy.contains("Sending e-mail success!").should('be.visible')
})


Cypress.Commands.add('mensagemFalhaDeEnvio', () => {
  cy.get(SEND_QUOTE_ELEMENTS.LOADING_PDF,{ timeout: 10000 }).should('not.exist')
  cy.contains("Not finished yet...").should('be.visible')
})


