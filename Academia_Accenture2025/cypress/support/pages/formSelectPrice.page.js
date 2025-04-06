import { selectRandomInput, verificarCamposObrigatorios } from '../utils/utils'
import { PRICE_ELEMENTS, ABA_IDS } from '../elements/elements'

Cypress.Commands.add('selectPriceOption', () => {
  selectRandomInput(PRICE_ELEMENTS.IDS_PRICE_OPTIONS)
  verificarCamposObrigatorios(ABA_IDS.PRICE)
  cy.get(PRICE_ELEMENTS.BTN_NEXT).click()
})