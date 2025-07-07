// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.viewport()
describe('Tests para usar cy.viewport()', () => {
  beforeEach(() => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io'); 
    cy.get(".home-list").eq(0).should("exist").within(() => {
      // Hacer clic en el botón para abrir la sección "Viewport"
      cy.get('a[href="/commands/viewport"]').contains("Viewport").should("exist").click();
    });
    // Verificar que estamos en la URL correcta después del clic
    cy.url().should('eq', 'https://example.cypress.io/commands/viewport');
  });

  it('Debería colapsar el menú en pantallas pequeñas', () => {
    // Verificar que el navbar esté visible por defecto
    cy.get('#navbar').should('be.visible');

    // Cambiar el tamaño del viewport a una resolución móvil
    cy.viewport(320, 480);

    // Verificar que el navbar se oculta automáticamente en pantallas pequeñas
    cy.get('#navbar').should('not.be.visible');

    // Verificar que el botón del menú esté visible y pueda abrir el navbar
    cy.get('.navbar-toggle').should('be.visible').click();
    cy.get('.nav').find('a').should('be.visible');
  });

  it('Ver diferentes tamaños predefinidos de dispositivos', () => {
    // Ver pantalla súper grande
    cy.viewport(2999, 2999);
    cy.wait(200);

    // Ver tamaños predefinidos de portátiles y móviles
    cy.viewport('macbook-15');
    cy.wait(200);
    cy.viewport('macbook-13');
    cy.wait(200);
    cy.viewport('macbook-11');
    cy.wait(200);
    cy.viewport('ipad-2');
    cy.wait(200);
    cy.viewport('ipad-mini');
    cy.wait(200);
    cy.viewport('iphone-6+');
    cy.wait(200);
    cy.viewport('iphone-6');
    cy.wait(200);
    cy.viewport('iphone-5');
    cy.wait(200);
    cy.viewport('iphone-4');
    cy.wait(200);
    cy.viewport('iphone-3');
    cy.wait(200);
  });

  it('Ver orientación portrait y landscape en dispositivos móviles', () => {
    cy.viewport('ipad-2', 'portrait');
    cy.wait(200);
    cy.viewport('iphone-4', 'landscape');
    cy.wait(200);
  });
});
