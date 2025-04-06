import { HOME_ELEMENTS } from '../elements/elements'

Cypress.Commands.add('RedirectFormsAutomobile', () => {
  cy.get(HOME_ELEMENTS.BTN_AUTOMOBILE).click()
  cy.get(HOME_ELEMENTS.SELECT_INSURANCE).should('contain', 'Automobile Insurance')
})