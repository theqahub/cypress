// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.visit()
describe('Tests para usar cy.visit()', () => {
  beforeEach(() => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io'); 
    cy.get(".home-list").eq(0).should("exist").within(() => {
      // Hacer clic en el botón para abrir la sección "Navigation"
      cy.get('a[href="/commands/navigation"]').contains("Navigation").should("exist").click();
    });
    // Verificar que estamos en la URL correcta después del clic
    cy.url().should('eq', 'https://example.cypress.io/commands/navigation');
  });

  it('Visitar una URL con opciones avanzadas', () => {
    cy.visit('https://example.cypress.io/commands/navigation', {
      timeout: 50000,
      onBeforeLoad: function(contentWindow) {
        // Aquí puedes agregar lógica antes de que la página cargue
        console.log('Antes de cargar', contentWindow.location.href);
      },
      onLoad: function(contentWindow) {
        // Aquí puedes agregar lógica justo cuando termina de cargar
        console.log('Página cargada', contentWindow.location.href);
      }
    });
  });
});
