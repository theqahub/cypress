// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .find()
describe('Tests para usar cy.find() básico', () => {
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
    
    it('Debe encontrar 7 enlaces dentro de la paginación', () => {
        // Encuentra todos los enlaces <a> dentro de la paginación y valida que hay 7
        cy.get('.traversal-pagination')
          .find('li')
          .find('a')
          .should('have.length', 7);
    });
  });