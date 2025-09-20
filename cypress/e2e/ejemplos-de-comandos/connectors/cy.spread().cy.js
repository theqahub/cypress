// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .spread()
describe('Tests para usar .spread() en Cypress', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/connectors');
    cy.url().should('include', '/commands/connectors');
  });

  it('Desestructurar un array en argumentos individuales con .spread()', () => {
    const arr = ['foo', 'bar', 'baz', 'theqahub', 'diego', 'sextoTrozo'];
    cy.wrap(arr).spread((primerTrozo, segundoTrozo, tercerTrozo, cuartoTrozo, quintoTrozo, sextoTrozo) => {
        expect(primerTrozo).to.eq('foo')
        expect(segundoTrozo).to.eq('bar')
        expect(tercerTrozo).to.eq('baz')
        expect(cuartoTrozo).to.eq('theqahub')
        expect(quintoTrozo).to.eq('diego')
        expect(sextoTrozo).to.eq('sextoTrozo')
    })
  });
});
