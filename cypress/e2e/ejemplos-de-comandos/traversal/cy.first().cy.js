// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .first()
describe('Tests para usar cy.first() básico', () => {
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
    
    it('Debe verificar que el primer td contiene el número 1', () => {
        // Selecciona el primer <td> de una tabla y verifica que contiene el número 1
        cy.get('.traversal-table td')
          .first()
          .should('contain', '1');
    });
  });