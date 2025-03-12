describe('Testear el header de la página de ejemplo de cypress', () => {
  it('Clickar en el boton de Commands y la opción Querying y comprobar que funciona', () => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io');
    // Clickar en el botón dropdowm
    cy.get('.dropdown-toggle').should("exist").click();
    // Clickar en la opción "Querying"
    cy.get('.dropdown-menu > :nth-child(1) > a').should("exist").click();
    // Comprobar que el elemento 'li' tiene la propiedad active
    cy.get('.dropdown-menu > :nth-child(1)').should('have.class', 'active');
    // Checkear la URL
    cy.url().should('eq', 'https://example.cypress.io/commands/querying')
  })
  it('Clickar en el boton de Commands y la opción Traversal y comprobar que funciona', () => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io');
    // Clickar en el botón dropdowm
    cy.get('.dropdown-toggle').should("exist").click();
    // Clickar en la opción "Traversal"
    cy.get('.dropdown-menu > :nth-child(2) > a').should("exist").click();
    // Comprobar que el elemento 'li' tiene la propiedad active
    cy.get('.dropdown-menu > :nth-child(2)').should('have.class', 'active');
    // Checkear la URL
    cy.url().should('eq', 'https://example.cypress.io/commands/traversal')
  })
  it('Clickar en el boton de Commands y la opción Actions y comprobar que funciona', () => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io');
    // Clickar en el botón dropdowm
    cy.get('.dropdown-toggle').should("exist").click();
    // Clickar en la opción "Actions"
    cy.get('.dropdown-menu > :nth-child(3) > a').should("exist").click();
    // Comprobar que el elemento 'li' tiene la propiedad active
    cy.get('.dropdown-menu > :nth-child(3)').should('have.class', 'active');
    // Checkear la URL
    cy.url().should('eq', 'https://example.cypress.io/commands/actions')
  })
  it('Clickar en el boton de Utilities y comprobar que funciona', () => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io');
    // Clickar en el botón Utilities
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should("exist").click();
    // Checkear la URL
    cy.url().should('eq', 'https://example.cypress.io/utilities')
  })
  it('Clickar en el boton de Cypress API y comprobar que funciona', () => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io');
    // Clickar en el botón Cypress API
    cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').should("exist").click();
    // Checkear la URL
    cy.url().should('eq', 'https://example.cypress.io/cypress-api')
  })
})
describe("Testear la información dentro de cada página del header", () => {
  beforeEach(() => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io');
  })
  it("Check the h1 component inside the Cypress API tab", () => {
    // Clickar en el botón Cypress API
    cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').should("exist").click();
    // Checkear la URL
    cy.url().should('eq', 'https://example.cypress.io/cypress-api');
    cy.get('h1').should("exist").contains("Cypress API");
  });
  it("Check the h1 component inside the Utilities tab", () => {
    // Clickar en el botón Cypress API
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should("exist").click();
    // Checkear la URL
    cy.url().should('eq', 'https://example.cypress.io/utilities')
    cy.get('h1').should("exist").contains("Utilities");
  });
  it("Check the h1 component inside the Commands - Querying tab", () => {
    // Clickar en el botón dropdowm
    cy.get('.dropdown-toggle').should("exist").click();
    // Clickar en la opción "Querying"
    cy.get('.dropdown-menu > :nth-child(1) > a').should("exist").click();
    // Comprobar que el elemento 'li' tiene la propiedad active
    cy.get('.dropdown-menu > :nth-child(1)').should('have.class', 'active');
    // Checkear la URL
    cy.url().should('eq', 'https://example.cypress.io/commands/querying')
    cy.get('h1').should("exist").contains("Querying");
  });
  it("Check the h1 component inside the Commands - Traversal tab", () => {
    // Clickar en el botón dropdowm
    cy.get('.dropdown-toggle').should("exist").click();
    // Clickar en la opción "Traversal"
    cy.get('.dropdown-menu > :nth-child(2) > a').should("exist").click();
    // Comprobar que el elemento 'li' tiene la propiedad active
    cy.get('.dropdown-menu > :nth-child(2)').should('have.class', 'active');
    // Checkear la URL
    cy.url().should('eq', 'https://example.cypress.io/commands/traversal')
    cy.get('h1').should("exist").contains("Traversal");
  });
  it("Check the h1 component inside the Commands - Actions tab", () => {
    // Clickar en el botón dropdowm
    cy.get('.dropdown-toggle').should("exist").click();
    // Clickar en la opción "Actions"
    cy.get('.dropdown-menu > :nth-child(3) > a').should("exist").click();
    // Comprobar que el elemento 'li' tiene la propiedad active
    cy.get('.dropdown-menu > :nth-child(3)').should('have.class', 'active');
    // Checkear la URL
    cy.url().should('eq', 'https://example.cypress.io/commands/actions')
    cy.get('h1').should("exist").contains("Actions");
  });
})