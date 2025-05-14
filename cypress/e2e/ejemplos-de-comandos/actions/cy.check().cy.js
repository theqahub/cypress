// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.check() 
describe('Tests para usar cy.check() básico', () => {
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

  it("Marcar todos los checkboxes activos", () => {
    // Seleccionar todos los checkboxes disponibles
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check()
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked')
  })

  it("Marcar todos los radios activos", () => {
    // Seleccionar todos los radios disponibles
    cy.get('.action-radios [type="radio"]').not('[disabled]').check()
    cy.get('.action-radios [type="radio"]').not('[disabled]').should('be.checked')
  })

  it("Marcar un radio específico por valor", () => {
    // Seleccionar un radio concreto usando su valor
    cy.get('.action-radios [type="radio"]').check('radio1')
    cy.get('.action-radios [type="radio"]').should('be.checked')
  })

  it("Marcar múltiples checkboxes por valor", () => {
    // Seleccionar múltiples checkboxes pasando un array
    cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2'])
    cy.get('.action-multiple-checkboxes [type="checkbox"]').should('be.checked')
  })

  it("Forzar selección en inputs deshabilitados", () => {
    // Usar force:true para seleccionar elementos desactivados
    cy.get('.action-checkboxes [disabled]').check({ force: true })
    cy.get('.action-checkboxes [disabled]').should('be.checked')
    cy.get('.action-radios [type="radio"]').check('radio3', { force: true })
    cy.get('.action-radios [type="radio"]').should('be.checked')
  })
})
