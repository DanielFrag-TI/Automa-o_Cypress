import { selectRandomOption, selectRandomCheckboxes, verificarCamposObrigatorios } from "../utils/utils"
import { faker } from "@faker-js/faker"
import { PRODUCT_ELEMENTS, ABA_IDS } from "../elements/elements"

const twoMonthsFromNow = new Date()
twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 1)

const startdate = faker.date.between({ from: twoMonthsFromNow, to: new Date(twoMonthsFromNow.getFullYear() + 1, 11, 31) }).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })

Cypress.Commands.add('preencherFormProductData', () => {
  cy.get(PRODUCT_ELEMENTS.INPUT_FUTURE_DATE).type(startdate)
  selectRandomOption(PRODUCT_ELEMENTS.SELECT_INSURANCE_SUM)
  selectRandomOption(PRODUCT_ELEMENTS.SELECT_MERIT_RATING)
  selectRandomOption(PRODUCT_ELEMENTS.SELECT_DAMAGE_INSURANCE)
  selectRandomCheckboxes(PRODUCT_ELEMENTS.IDS_OPTIONAL_PRODUCTS)
  selectRandomOption(PRODUCT_ELEMENTS.SELECT_COURTESY_CAR)
  verificarCamposObrigatorios(ABA_IDS.PRODUCT)
  cy.get(PRODUCT_ELEMENTS.BTN_NEXT).click()
})
