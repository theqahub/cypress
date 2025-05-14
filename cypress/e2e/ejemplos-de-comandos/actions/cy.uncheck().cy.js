// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.uncheck() 
describe('Tests para usar cy.uncheck() básico', () => {
  beforeEach(() => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io'); 
    cy.get(".home-list").eq(0).should("exist").within(() => {
      // Hacer clic en el botón para abrir la sección "Actions"
      cy.get('a[href="/commands/actions"]').contains("Actions").should("exist").click();
    })
    // Verificar que estamos en la URL correcta después del clic
    cy.url().should('eq', 'https://example.cypress.io/commands/actions');
  })

  it("Desmarcar múltiples checkboxes activos", () => {
    // Desmarcar todos los checkboxes uno tras otro
    cy.get('.action-check [type="checkbox"]')
        .not('[disabled]')
        .uncheck()
    cy.get('.action-check [type="checkbox"]')
        .not('[disabled]')
        .should('not.be.checked')
  })

  it("Desmarcar un checkbox específico por valor", () => {
    // .uncheck() acepta un argumento de valor
    cy.get('.action-check [type="checkbox"]')
        .check('checkbox1')
    cy.get('.action-check [type="checkbox"]')
        .uncheck('checkbox1')
    cy.get('.action-check [type="checkbox"][value="checkbox1"]')
        .should('not.be.checked')
  })

  it("Desmarcar múltiples checkboxes usando un array de valores", () => {
    // .uncheck() acepta un array de valores
    cy.get('.action-check [type="checkbox"]')
        .check(['checkbox1', 'checkbox3'])
    cy.get('.action-check [type="checkbox"]')
        .uncheck(['checkbox1', 'checkbox3'])
    cy.get('.action-check [type="checkbox"][value="checkbox1"]')
        .should('not.be.checked')
    cy.get('.action-check [type="checkbox"][value="checkbox3"]')
        .should('not.be.checked')
  })

  it("Forzar desmarcado de checkboxes deshabilitados", () => {
    // Ignorar validaciones antes de desmarcar
    cy.get('.action-check [disabled]').uncheck({ force: true })
    cy.get('.action-check [disabled]').should('not.be.checked')
  })
})
