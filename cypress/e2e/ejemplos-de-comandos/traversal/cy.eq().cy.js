// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .eq()
describe('Tests para usar cy.eq() básico', () => {
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
    
    it('Debe verificar que el segundo elemento contiene "siamese"', () => {
        // Selecciona el segundo elemento de la lista y verifica su contenido
        cy.get('.traversal-list>li')
          .eq(3)
          .should('contain', 'sphynx');
    });
  });