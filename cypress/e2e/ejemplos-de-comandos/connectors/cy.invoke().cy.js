// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// .invoke()
describe('Tests para usar .invoke() en Cypress', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/connectors');
    cy.url().should('include', '/commands/connectors');
  });

  it('Invocar un método jQuery para mostrar un div oculto', () => {
    // Validamos que inicialmente esté oculto
    cy.get('.connectors-div').should('be.hidden');
    // Usamos .invoke() para ejecutar el método show()
    cy.get('.connectors-div')
      .invoke('show')
      .should('be.visible');
  });
});
