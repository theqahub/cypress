// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.location()
describe('Tests para usar cy.location()', () => {
  beforeEach(() => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io'); 
    cy.get(".home-list").eq(0).should("exist").within(() => {
      // Hacer clic en el botón para abrir la sección "Location"
      cy.get('a[href="/commands/location"]').contains("Location").should("exist").click();
    });
    // Verificar que estamos en la URL correcta después del clic
    cy.url().should('eq', 'https://example.cypress.io/commands/location');
  });

  it('Verificar propiedades del objeto location', () => {
    // cy.location() accede a window.location y permite validar sus propiedades
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq('https://example.cypress.io/commands/location');
      expect(location.host).to.eq('example.cypress.io');
      expect(location.hostname).to.eq('example.cypress.io');
      expect(location.origin).to.eq('https://example.cypress.io');
      expect(location.pathname).to.eq('/commands/location');
      expect(location.port).to.eq('');
      expect(location.protocol).to.eq('https:');
      expect(location.search).to.be.empty;
    });
  });
});
