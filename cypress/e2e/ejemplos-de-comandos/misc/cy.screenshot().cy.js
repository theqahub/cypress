// Funciones en Cypress 
// Misc: cy.screenshot()

describe('Tests para usar cy.screenshot()', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/misc');
    cy.url().should('include', '/commands/misc');
  });

  it('Tomar screenshot del estado actual', () => {
    cy.screenshot('my-image'); // :contentReference[oaicite:6]{index=6}
  });
});
