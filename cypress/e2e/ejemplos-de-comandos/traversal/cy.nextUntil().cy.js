// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .nextUntil()
describe('Tests para usar cy.nextUntil() básico', () => {
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
    
    it('Debe seleccionar los elementos entre #veggies y #nuts', () => {
        // Selecciona todos los elementos que están entre #veggies y #nuts
        cy.get('#veggies')
          .nextUntil('#nuts')
          .should('have.length', 3);
    });
  });