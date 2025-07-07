// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.go()
describe('Tests para usar cy.go()', () => {
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

  it('Navegar hacia atrás y adelante usando cy.go()', () => {
    cy.location('pathname').should('include', 'navigation');

    // Volver atrás en la historia
    cy.go('back');
    cy.location('pathname').should('not.include', 'navigation');

    // Ir hacia adelante
    cy.go('forward');
    cy.location('pathname').should('include', 'navigation');

    // Alternativas con números
    cy.go(-1);
    cy.location('pathname').should('not.include', 'navigation');

    cy.go(1);
    cy.location('pathname').should('include', 'navigation');
  });
});
