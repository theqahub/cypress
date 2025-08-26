// Funciones en Cypress 
// Misc: cy.focused()

describe('Tests para usar cy.focused()', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/misc');
    cy.url().should('include', '/commands/misc');
  });

  it('Detectar elementos que reciben foco', () => {
    cy.get('.misc-form').find('#name').click();
    cy.focused().should('have.id', 'name'); // :contentReference[oaicite:4]{index=4}

    cy.get('.misc-form').find('#description').click();
    cy.focused().should('have.id', 'description'); // :contentReference[oaicite:5]{index=5}
  });
});
