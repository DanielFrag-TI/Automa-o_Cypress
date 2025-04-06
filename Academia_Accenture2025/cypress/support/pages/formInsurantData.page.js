import { faker } from '@faker-js/faker'
import { selectRandomOption, selectRandomInput, selectRandomCheckboxes, verificarCamposObrigatorios } from '../utils/utils'
import { INSURANT_ELEMENTS,ABA_IDS  } from '../elements/elements'

const BirthDate = faker.date.birthdate({ min: 18, max: 70, mode: 'age' }).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
const zipCode = faker.helpers.replaceSymbols('########').substring(0, faker.number.int({ min: 4, max: 8 }))

Cypress.Commands.add('preencherInsurantData', () => {
  cy.get(INSURANT_ELEMENTS.FIRST_NAME).type(faker.person.firstName().split(/[\s-]/)[0])
  cy.get(INSURANT_ELEMENTS.LAST_NAME).type(faker.person.lastName().split(/[\s-]/)[0])
  cy.get(INSURANT_ELEMENTS.DATE_BIRTH).type(BirthDate)

  selectRandomInput(INSURANT_ELEMENTS.IDS_GENDERS)
  cy.get(INSURANT_ELEMENTS.STREET_ADDRESS).type(faker.location.streetAddress())
  selectRandomOption(INSURANT_ELEMENTS.COUNTRY)
  cy.get(INSURANT_ELEMENTS.ZIP_CODE).type(zipCode)
  cy.get(INSURANT_ELEMENTS.CITY).type(faker.location.city())
  selectRandomOption(INSURANT_ELEMENTS.OCCUPATION)
  selectRandomCheckboxes(INSURANT_ELEMENTS.IDS_HOBBIESELECTOR)

  cy.get(INSURANT_ELEMENTS.WEBSITE).type(faker.internet.url())
  cy.get(INSURANT_ELEMENTS.PICTURE_CONTAINER).selectFile('cypress/fixtures/Images/Quack.jpg', { force: true })
  verificarCamposObrigatorios(ABA_IDS.INSURANT)
  cy.get(INSURANT_ELEMENTS.BTN_NEXT).click()
})