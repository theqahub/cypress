// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .children()
describe('Tests para usar cy.children() básico', () => {
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
    
    it('Debe encontrar hijos con la clase .active dentro de .traversal-breadcrumb', () => {
        // Selecciona el breadcrumb y verifica que su hijo con clase .active contiene el texto "Data"
        cy.get('.traversal-breadcrumb')
        .children('.active')
        .should('contain', 'Data');
    });
  });