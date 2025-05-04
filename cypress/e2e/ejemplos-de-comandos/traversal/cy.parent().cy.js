// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .parent()
describe('Tests para usar cy.parent() básico', () => {
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
    
    it('Debe verificar que el padre de .traversal-mark contiene cierto texto', () => {
        // Verifica que el padre del elemento con clase .traversal-mark contiene "Morbi leo risus"
        cy.get('.traversal-mark')
          .parent()
          .should('contain', 'Morbi leo risus');
    });
  });