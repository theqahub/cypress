// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.scrollIntoView() 
describe('Tests para usar cy.scrollIntoView() básico', () => {
  beforeEach(() => {
    // Visitar la página de ejemplo de Cypress
    cy.visit('https://example.cypress.io'); 
    cy.get(".home-list").eq(0).should("exist").within(() => {
      // Hacer clic en el botón para abrir la sección "Actions"
      cy.get('a[href="/commands/actions"]').contains("Actions").should("exist").click();
    })
    // Verificar que estamos en la URL correcta después del clic
    cy.url().should('eq', 'https://example.cypress.io/commands/actions');
  })

  it("Hacer scroll hasta un botón oculto horizontalmente", () => {
    // Mostrar un botón que está fuera de la vista horizontal
    cy.get('#scroll-horizontal button').should('not.be.visible')
    cy.get('#scroll-horizontal button').scrollIntoView()
    cy.get('#scroll-horizontal button').should('be.visible')
  })

  it("Hacer scroll hasta un botón oculto verticalmente", () => {
    // Mostrar un botón que está fuera de la vista vertical
    cy.get('#scroll-vertical button').should('not.be.visible')
    cy.get('#scroll-vertical button').scrollIntoView()
    cy.get('#scroll-vertical button').should('be.visible')
  })

  it("Hacer scroll hasta un botón oculto en ambas direcciones", () => {
    // Mostrar un botón que está fuera de la vista en ambas direcciones
    cy.get('#scroll-both button').should('not.be.visible')
    cy.get('#scroll-both button').scrollIntoView()
    cy.get('#scroll-both button').should('be.visible')
  })
})
