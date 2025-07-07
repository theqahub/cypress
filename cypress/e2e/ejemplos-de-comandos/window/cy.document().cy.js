// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.document()
describe('Tests para usar cy.document()', () => {
  beforeEach(() => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io'); 
    cy.get(".home-list").eq(0).should("exist").within(() => {
      // Hacer clic en el botón para abrir la sección "Window"
      cy.get('a[href="/commands/window"]').contains("Window").should("exist").click();
    })
    // Verificar que estamos en la URL correcta después del clic
    cy.url().should('eq', 'https://example.cypress.io/commands/window');
  });

  it('Obtener el objeto document y verificar el charset', () => {
    // cy.document() accede al objeto document del DOM
    cy.document()
      .should('have.property', 'charset')
      .and('eq', 'UTF-8'); // Verificamos que el charset sea UTF-8
  });
});
