// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .its()
describe('Tests para usar .its() en Cypress', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/connectors');
    cy.url().should('include', '/commands/connectors');
  });

  it('Obtener la propiedad length de una lista con .its()', () => {
    // .its() permite acceder a propiedades del subject actual
    cy.get('.connectors-its-ul>li')
      .its('length')
      .should('be.gt', 2); // esperamos que tenga más de 2 elementos
  });
});
