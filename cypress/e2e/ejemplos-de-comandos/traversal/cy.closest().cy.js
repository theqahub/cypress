// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .closest()
describe('Tests para usar cy.closest() básico', () => {
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
    
    it('Debe encontrar el elemento padre más cercano (ul) de .traversal-badge', () => {
        // Verifica que el elemento más cercano de tipo 'ul' tenga la clase 'list-group'
        cy.get('.traversal-badge')
          .closest('ul')
          .should('have.class', 'list-group');
    });
  });