// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.hash()
describe('Tests para usar cy.hash()', () => {
  beforeEach(() => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io'); 
    cy.get(".home-list").eq(0).should("exist").within(() => {
      // Hacer clic en el botón para abrir la sección "Location"
      cy.get('a[href="/commands/location"]').contains("Location").should("exist").click();
    });
    // Verificar que estamos en la URL correcta después del clic
    cy.url().should('eq', 'https://example.cypress.io/commands/location');
  });

  it('Verificar que el hash esté vacío por defecto', () => {
    // cy.hash() obtiene el fragmento #hash de la URL actual
    cy.hash().should('be.empty');
  });
});
