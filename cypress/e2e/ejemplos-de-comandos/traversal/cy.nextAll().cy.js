// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .nextAll()
describe('Tests para usar cy.nextAll() básico', () => {
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
    
    it('Debe contar los elementos siguientes a "oranges"', () => {
        // Encuentra "oranges" y selecciona todos los elementos hermanos siguientes
        cy.get('.traversal-next-all')
          .contains('apples')
          .nextAll()
          .should('have.length', 4);
    });
  });