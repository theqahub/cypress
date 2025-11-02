// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// Waiting
describe('Tests para usar waiting en Cypress', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/waiting');
    cy.url().should('include', '/commands/waiting');
  });

  it('Esperas explícitas y por XHR', () => {
    // Escribimos en un input y luego esperamos 1000ms
    cy.get('.wait-input1').type('Wait 1000ms after typing')
    // Siempre que se pueda, eliminar este tipo de waits asincronos ¡COMPLETAMENTE INNECESARIOS! Solo en excepciones
    cy.wait(1000)
    cy.get('.wait-input2').type('Wait 1000ms after typing')
    // Siempre que se pueda, eliminar este tipo de waits asincronos ¡COMPLETAMENTE INNECESARIOS! Solo en excepciones
    cy.wait(1000)
    cy.get('.wait-input3').type('Wait 1000ms after typing')
    // Siempre que se pueda, eliminar este tipo de waits asincronos ¡COMPLETAMENTE INNECESARIOS! Solo en excepciones
    cy.wait(1000)

    // Escuchamos la petición GET hacia comments/*
    cy.intercept('GET', '**/comments/*').as('getComment')

    // Tenemos código en scripts.js que dispara la petición
    // al hacer click en el botón
    cy.get('.network-btn').click()

    // Esperamos la petición y validamos el código de estado
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
  });
});
