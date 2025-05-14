// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.focus() 
describe('Tests para usar cy.focus() básico', () => {
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

  it("Hacer focus en un input", () => {
    // Aplicar el foco sobre un campo e inspeccionar su estilo
    cy.get('.action-focus').focus()
    cy.get('.action-focus').should('have.class', 'focus')
        .prev().should('have.attr', 'style', 'color: orange;')
  })
})
