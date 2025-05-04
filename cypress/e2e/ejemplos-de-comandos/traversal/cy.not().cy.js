// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .not()
describe('Tests para usar cy.not() básico', () => {
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
    
    it('Debe seleccionar botones que no estén deshabilitados', () => {
        // Selecciona los botones que NO tienen el atributo [disabled]
        cy.get('.traversal-disabled .btn')
          .not('[disabled]')
          .should('not.contain', 'Disabled');
    });
});