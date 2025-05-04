// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .next()
describe('Tests para usar cy.next() básico', () => {
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
    
    it('Debe verificar que el siguiente a "apples" sea "oranges"', () => {
        // Encuentra el elemento "apples" y verifica que su siguiente hermano sea "oranges"
        cy.get('.traversal-ul')
          .contains('apples')
          .next()
          .should('contain', 'oranges');
    });
  });