// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.submit() 
describe('Tests para usar cy.submit() básico', () => {
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

  it("Enviar un formulario con texto", () => {
    // Escribir en el formulario y enviarlo
    cy.get('.action-form')
        .find('[type="text"]').type('HALFOFF')
    cy.get('.action-form').submit()
    cy.get('.action-form').next().should('contain', 'Your form has been submitted!')
  })
})
