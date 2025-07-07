// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.reload()
describe('Tests para usar cy.reload()', () => {
  beforeEach(() => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io'); 
    cy.get(".home-list").eq(0).should("exist").within(() => {
      // Hacer clic en el botón para abrir la sección "Navigation"
      cy.get('a[href="/commands/navigation"]').contains("Navigation").should("exist").click();
    });
    // Verificar que estamos en la URL correcta después del clic
    cy.url().should('eq', 'https://example.cypress.io/commands/navigation');
  });

  it('Recargar la página normalmente y sin caché', () => {
    // Recargar normalmente
    cy.reload();

    // Recargar sin caché (fuerza carga completa)
    cy.reload(true);
  });
});
