// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .prevAll()
describe('Tests para usar cy.prevAll() básico', () => {
    beforeEach(() => {
        // Visitar la página de ejemplo de Cypress
        cy.visit('https://example.cypress.io'); 
        // Clickar en el botón dropdown para abrir la sección "Traversal"
        cy.get(".home-list").eq(0).should("exist").within(() => {
          // Clickar en el botón dropdown para abrir la sección "Traversal"
          cy.get('a[href="/commands/traversal"]').contains("Traversal").should("exist").click();
        })
        // Verificamos que estamos en la URL correcta tras hacer click
        cy.url().should('eq', 'https://example.cypress.io/commands/traversal');
    })
    
    it('Debe contar los elementos anteriores a .third en .fruits-list', () => {
        // Cuenta los elementos anteriores al elemento con clase .third en .fruits-list
        cy.get('.fruits-list')
          .find('.third')
          .prevAll()
          .should('have.length', 2);
    });
  });