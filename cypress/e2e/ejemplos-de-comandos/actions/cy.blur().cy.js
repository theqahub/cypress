// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.blur() 
describe('Tests para usar cy.blur() básico', () => {
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

  it("Perder el foco de un input", () => {
    // Escribir en un campo y luego perder el foco para aplicar estilos
    cy.get('.action-blur').type('About to blur')
    cy.get('.action-blur').blur()
    cy.get('.action-blur').should('have.class', 'error')
        .prev().should('have.attr', 'style', 'color: red;')
  })
})
