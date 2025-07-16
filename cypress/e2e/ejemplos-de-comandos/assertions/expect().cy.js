// Funciones en Cypress 
// Assertions: expect()

describe('Tests para usar expect()', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/assertions');
    cy.url().should('include', '/commands/assertions');
  });

  it('BDD: Uso de expect() explícito', () => {
    expect(true).to.be.true;
    const o = { foo: 'bar' };
    expect(o).to.equal(o);
    expect(o).to.deep.equal({ foo: 'bar' });
    expect('FooBar').to.match(/bar$/i); // :contentReference[oaicite:10]{index=10}
  });
});
