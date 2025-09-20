// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .then()
describe('Tests para usar .then() en Cypress', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/connectors');
    cy.url().should('include', '/commands/connectors');
  });

  it('Validar el contenido de una lista usando .then()', () => {
    cy.get('.connectors-list>li').then(($lis) => {
      expect($lis).to.have.length(3);
      expect($lis.eq(0)).to.contain('Walk the dog');
      expect($lis.eq(1)).to.contain('Feed the cat');
      expect($lis.eq(2)).to.contain('Write JavaScript');
    });
  });

  it('Encadenar valores retornados con .then()', () => {
    cy.wrap(1)
      .then((num) => {
        expect(num).to.equal(1);
        return 2; // pasamos el 2 al siguiente .then()
      })
      .then((num) => {
        expect(num).to.equal(2);
        return 3 // pasamos el 3 al siguiente .then()
      })
      .then((num) => {
        expect(num).to.equal(3);
      });
  });

  it('Mantener el valor original si no retornamos nada en .then()', () => {
    cy.wrap(1)
      .then((num) => {
        expect(num).to.equal(1);
        // no retornamos nada aquí
      })
      .then((num) => {
        // recibimos el valor original 1
        expect(num).to.equal(1);
      });
  });

  it('Usar comandos Cypress dentro de un .then()', () => {
    cy.wrap(1)
      .then((num) => {
        expect(num).to.equal(1);
        cy.wrap(2); // el valor yield será 2
      })
      .then((num) => {
        expect(num).to.equal(2);
        cy.wrap("diego") // el valor yield será diego
      })
      .then((nombre) => {
        expect(nombre).to.equal("diego");
      });
  });
});
