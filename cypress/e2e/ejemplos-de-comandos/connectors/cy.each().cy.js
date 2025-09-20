// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .each()
describe('Tests para usar .each() en Cypress', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/connectors');
    cy.url().should('include', '/commands/connectors');
  });

  it('Iterar sobre una lista de elementos con .each()', () => {
    // Usamos .each() para recorrer cada <li> de la lista .connectors-each-ul
    cy.get('.connectors-each-ul>li')
      .each(($el, index, $list) => {
        // Mostramos en consola el contenido de cada elemento
        cy.log(`Elemento ${index + 1}: ${$el.text()}`)
      })
      .then(($lista) => {
        expect($lista).to.have.length(3); // la lista tiene 3 items
      });
  });
});
