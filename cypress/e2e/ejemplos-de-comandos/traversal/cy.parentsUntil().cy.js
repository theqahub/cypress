// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .parentsUntil()
describe('Tests para usar cy.parentsUntil() básico', () => {
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
    
    it('Debe contar ancestros entre el activo y .clothes-nav', () => {
        // Encuentra los ancestros entre el elemento activo y .clothes-nav
        cy.get('.clothes-nav')
          .find('.active')
          .parentsUntil('.col-xs-5')
          .should('have.length', 4);
    });
  });