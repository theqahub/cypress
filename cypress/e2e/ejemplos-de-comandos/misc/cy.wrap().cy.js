// Funciones en Cypress 
// Misc: cy.wrap()

describe('Tests para usar cy.wrap()', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/misc');
    cy.url().should('include', '/commands/misc');
  });

  it('Envolver un objeto y hacer assertions encadenadas', () => {
    cy.wrap({ foo: 'bar' })
      .should('have.property', 'foo')
      .and('include', 'bar'); // :contentReference[oaicite:7]{index=7}
  });
});
