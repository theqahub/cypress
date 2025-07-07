// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.title()
describe('Tests para usar cy.title()', () => {
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

  it('Verificar que el título de la página incluya "Kitchen Sink"', () => {
    // cy.title() obtiene el título actual de la página
    cy.title().should('include', 'Kitchen Sink');
  });
});
