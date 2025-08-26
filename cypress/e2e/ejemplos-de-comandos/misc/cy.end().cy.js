// Funciones en Cypress 
// Misc: cy.end()

describe('Tests para usar cy.end()', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/misc');
    cy.url().should('include', '/commands/misc');
  });

  it('Terminar una cadena de comandos y volver al root', () => {
    cy.get('.misc-table').within(() => {
      cy.contains('Cheryl').click().end(); // finaliza la cadena actual :contentReference[oaicite:2]{index=2}
      cy.contains('Charles').click(); // nueva consulta al root del DOM
    });
  });
});
