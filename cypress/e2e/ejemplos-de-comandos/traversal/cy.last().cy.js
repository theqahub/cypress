// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .last()
describe('Tests para usar cy.last() básico', () => {
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
    
    it('Debe verificar que el último botón contiene "Submit"', () => {
        // Verifica que el último botón dentro del contenedor .traversal-buttons sea "Submit"
        cy.get('.traversal-buttons .btn')
          .last()
          .should('contain', 'Submit');
    });
  });