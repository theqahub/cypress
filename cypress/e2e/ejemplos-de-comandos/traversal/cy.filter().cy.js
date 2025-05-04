// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .filter()
describe('Tests para usar cy.filter() básico', () => {
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
    
    it('Debe filtrar elementos activos con la clase .active', () => {
        // Filtra los elementos que tienen la clase .active dentro de una lista de navegación
        cy.get('.traversal-nav>li')
          .filter('.active')
          .should('contain', 'About');
    });
  });