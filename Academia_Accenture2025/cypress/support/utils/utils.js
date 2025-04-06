export const selectRandomOption = (selector) => {
    cy.get(selector)
      .find('option:not(:first-child)') // ignora o primeiro (<option>- please select -</option>)
      .then(($options) => {
        const randomIndex = Cypress._.random(0, $options.length - 1)
        const randomValue = $options[randomIndex].value
        cy.get(selector).select(randomValue)
      })
  }



export const selectRandomInput = (selectors) => {
  const selected = selectors[Cypress._.random(0, selectors.length - 1)]
  cy.get(selected).check({ force: true })
}



export function selectRandomCheckboxes(options) {
  const selected = Cypress._.sampleSize(options, Cypress._.random(1, options.length))

  selected.forEach((option) => {
    cy.get(option).check({ force: true })
  })
}


export function verificarCamposObrigatorios(abaId) {
  cy.get(`${abaId} .counter`).should('be.visible').and('have.text', '0');
}