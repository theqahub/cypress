// Funciones en Cypress 
// Misc: cy.exec()

describe('Tests para usar cy.exec()', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/misc');
    cy.url().should('include', '/commands/misc');
  });

  it('Ejecutar comandos del sistema y verificar salida', () => {
    cy.exec('echo Jane Lane')
      .its('stdout').should('contain', 'Jane Lane'); // :contentReference[oaicite:3]{index=3}

    cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)
    
    if (Cypress.platform === 'win32') {
      cy.exec('print cypress.config.js')
        .its('stderr').should('be.empty');
    } else {
      cy.exec('cat cypress.config.js')
        .its('stderr').should('be.empty');

      cy.exec('pwd')
        .its('code').should('eq', 0);
    }
  });
});
