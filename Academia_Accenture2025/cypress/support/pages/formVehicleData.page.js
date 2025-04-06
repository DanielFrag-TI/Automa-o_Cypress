import { selectRandomOption, verificarCamposObrigatorios } from "../utils/utils"
import { faker } from "@faker-js/faker"
import { VEHICLE_ELEMENTS, ABA_IDS } from "../elements/elements"

const fake_date_manufacture = faker.date.past().toLocaleDateString('en-US', {year: 'numeric',month: '2-digit',day: '2-digit'})

Cypress.Commands.add('selecionarMarcadoCarro', () => {
  selectRandomOption(VEHICLE_ELEMENTS.CAR_MAKER)
})

Cypress.Commands.add('enginePerformanceValue', () => {
  cy.get(VEHICLE_ELEMENTS.INPUT_ENGINE_PERFORMANCE)
    .type(Math.floor(Math.random() * 2000) + 1)
})

Cypress.Commands.add('inputDateofManufacute', () => {
  cy.get(VEHICLE_ELEMENTS.INPUT_DATE_MANUFACTURE)
    .type(fake_date_manufacture)
})

Cypress.Commands.add('selectNumberofSeats', () => {
  selectRandomOption(VEHICLE_ELEMENTS.SELECT_NUMBER_SEATS)
})

Cypress.Commands.add('selectFuelType', () => {
  selectRandomOption(VEHICLE_ELEMENTS.SELECT_FUEL_TYPE)
})

Cypress.Commands.add('inputListPrice', () => {
  cy.get(VEHICLE_ELEMENTS.INPUT_LIST_PRICE)
    .type(Math.floor(Math.random() * (100000 - 500 + 1)) + 500)
})

Cypress.Commands.add('inputAnnualMileage', () => {
  cy.get(VEHICLE_ELEMENTS.INPUT_ANNUAL_MILEAGE)
    .type(Math.floor(Math.random() * (100000 - 100 + 1)) + 100)
})

Cypress.Commands.add('clickBTNNext', () => {
  verificarCamposObrigatorios(ABA_IDS.VEHICLE)
  cy.get(VEHICLE_ELEMENTS.BTN_NEXT).click()
})
