// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.click() 
describe('Tests para usar cy.click() básico', () => {
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

  // Puedes clickar en 9 posiciones específicas de un elemento:
  //  -----------------------------------
  // | arribaIzq     arriba    arribaDer |
  // |                                   |
  // |                                   |
  // |                                   |
  // | izquierda     centro      derecha |
  // |                                   |
  // |                                   |
  // |                                   |
  // | abajoIzq      bottom     abajoDer |
  //  -----------------------------------

  it("Hacer clic en un botón", () => {
    // Clic simple sobre el botón con clase .action-btn
    cy.get('.action-btn').click()
  })

  it("Clic en posiciones específicas del canvas", () => {
    // Hacer clic en diferentes zonas del canvas para probar su interactividad
    cy.get('#action-canvas').click('topLeft')
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('topRight')
    cy.get('#action-canvas').click('left')
    cy.get('#action-canvas').click('right')
    cy.get('#action-canvas').click('bottomLeft')
    cy.get('#action-canvas').click('bottom')
    cy.get('#action-canvas').click('bottomRight')
  })

  it("Clic en coordenadas específicas", () => {
    // Hacer clic en ubicaciones precisas dentro del canvas usando coordenadas
    cy.get('#action-canvas').click(80, 75)
    cy.get('#action-canvas').click(170, 75)
    cy.get('#action-canvas').click(80, 165)
    cy.get('#action-canvas').click(100, 185)
    cy.get('#action-canvas').click(125, 190)
    cy.get('#action-canvas').click(150, 185)
    cy.get('#action-canvas').click(170, 165)
  })

  it.only("Clic en múltiples elementos", () => {
    // Realizar clic sobre varios elementos a la vez usando la opción multiple
    cy.get('.action-labels>.label').click({ multiple: true })
  })

  it.only("Forzar clic en un botón con opacidad baja", () => {
    // Ignorar validaciones para hacer clic en elementos ocultos visualmente
    cy.get('.action-opacity>.btn').click({ force: true })
  })
})
