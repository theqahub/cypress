// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .parents()
describe('Tests para usar cy.parents() básico', () => {
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
    
    it('Debe verificar que .traversal-cite tiene un ancestro blockquote', () => {
        // Verifica que el elemento .traversal-cite tiene un ancestro que es blockquote
        cy.get('.traversal-cite')
          .parents()
          .should('match', 'blockquote');
    });
  });