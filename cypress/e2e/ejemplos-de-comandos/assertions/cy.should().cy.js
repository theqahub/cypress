// Funciones en Cypress 
// Assertions: cy.should()

describe('Tests para usar cy.should()', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/assertions');
    cy.url().should('include', '/commands/assertions');
  });

  it('Uso de .should() con aserciones encadenadas y RegEx', () => {
    cy.get('.assertion-table')
      .find('tbody tr:last').should('have.class', 'success')
      .find('td')
      .first()
      // comprobaciones sobre el contenido del elemento
      .should('have.text', 'Column content')
      .should('contain', 'Column content')
      .should('have.html', 'Column content')
      // chai-jquery usa internamente jQuery .is('td') para comprobar si el elemento coincide con el selector
      .should('match', 'td')
      // Para comprobar texto con una expresión regular:
      // 1. Invocamos el método jQuery .text() con .invoke('text')
      // 2. Luego usamos .should('match', /expresion/)
      // La 'i' al final de la RegEx significa "case insensitive"
      // → no importa si es mayúscula o minúscula
      .invoke('text')
      .should('match', /column content/i);
  });

  it('Uso de .contains() con expresión regular', () => {
    cy.get('.assertion-table')
      .find('tbody tr:last')
      // .contains busca el primer elemento <td> cuyo texto coincida con la RegEx
      // La 'i' en /column content/i ignora mayúsculas y minúsculas
      .contains('td', /column content/i)
      .should('be.visible');
  });
});