// Funciones en Cypress
// Comandos útiles y ejemplos para aprender desde 0

// cy.should() con callback
describe('Tests para usar cy.should() con callback', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/assertions');
    cy.url().should('include', '/commands/assertions');
  });

  it('Verifica los textos de los párrafos con .should(callback)', () => {
    cy.get('.assertions-p').find('p')
      .should(($p) => {
        const texts = $p.map((i, el) => Cypress.$(el).text()).get();
        expect(texts).to.have.length(3);
        expect(texts, 'has expected text in each paragraph').to.deep.eq([
          'Some text from first p',
          'More text from second p',
          'And even more text from third p',
        ]);
      });
  });

  it('Verifica clase y texto en encabezado con retry (.should) y no-retry (.then)', () => {
    cy.get('.docs-header').find('div')
      .should(($div) => {
        expect($div).to.have.length(1);
        const className = $div[0].className;
        expect(className).to.match(/heading-/);
      })
      .then(($div) => {
        expect($div).to.have.text('Introduction');
      });
  });

  it('Lanza errores personalizados si no se cumplen condiciones', () => {
    cy.get('.docs-header').find('div')
      .should(($div) => {
        if ($div.length !== 1) {
          throw new Error('Did not find 1 element');
        }

        const className = $div[0].className;

        if (!className.match(/theqahub-/)) {
          throw new Error(`Could not find class "theqahub-" in ${className}`);
        }
      });
  });

  it('Compara el texto entre dos elementos con normalización', () => {
    let text;
    const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase();

    cy.get('.two-elements')
      .find('.first')
      .then(($first) => {
        text = normalizeText($first.text());
      });

    cy.get('.two-elements')
      .find('.second')
      .should(($div) => {
        const secondText = normalizeText($div.text());
        expect(secondText, 'second text').to.equal(text);
      });
  });

  it('Valida número aleatorio esté entre 1 y 10', () => {
    cy.get('#random-number')
      .should(($div) => {
        const n = parseFloat($div.text());
        expect(n).to.be.gte(1).and.be.lte(10);
      });
  });
});