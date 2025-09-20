// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// assert()
describe('Tests para usar assert()', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/assertions');
    cy.url().should('include', '/commands/assertions');
  });

  it('TDD: Uso de assert()', () => {
    const person = { name: 'Joe', age: 20 };
    assert.isObject(person, 'value is object'); // :contentReference[oaicite:11]{index=11}
  });
});
