// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .siblings()
describe('Tests para usar cy.siblings() básico', () => {
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
    
    it('Debe contar los elementos hermanos del elemento que se le especifica a cypress', () => {
        // Selecciona los elementos entre hermanos a el <li> de Home con .active
        cy.get('.traversal-pills .active')
        .siblings().should('have.length', 2)
    });
  });