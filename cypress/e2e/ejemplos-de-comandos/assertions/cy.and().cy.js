// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.and()
describe('Tests para usar cy.and()', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/assertions');
    cy.url().should('include', '/commands/assertions');
  });

  it('Encadenar múltiples assertions con .and()', () => {
    cy.get('.assertions-link')
      .should('have.class', 'active')
      .and('have.attr', 'href')
      .and('include', 'cypress.io');
  });
});
