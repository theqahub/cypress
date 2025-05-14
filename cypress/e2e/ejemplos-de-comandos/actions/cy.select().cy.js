// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.select() 
describe('Tests para usar cy.select() básico', () => {
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

  it("Comprobar el valor por defecto de el selector", () => {
    cy.get('.action-select').should('have.value', '--Select a fruit--')    
  })

  it("Seleccionar una opción del menú desplegable", () => {
    // Seleccionar 'apples' por su texto visible y verificar el valor
    cy.get('.action-select').select('apples')
    cy.get('.action-select').should('have.value', 'fr-apples')
  })
  

  it("Seleccionar múltiples opciones a la vez", () => {
    // Seleccionar varias frutas y verificar sus valores
    cy.get('.action-select-multiple')
        .select(['apples', 'oranges', 'bananas'])
    cy.get('.action-select-multiple')
        .invoke('val')
        .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
  })

  it("Seleccionar una opción mediante un atributo con el campo 'value' identico al parametro", () => {
    // Seleccionar una opción con el valor correspondiente
    cy.get('.action-select').select('fr-bananas')
    cy.get('.action-select')
    // Podemos vincular una aserción al mismo elemento
    .should('have.value', 'fr-bananas')
  })

   it("Hacer una selección multiple mediante un atributo con el campo 'value' identico al parametro", () => {
    cy.get('.action-select-multiple')
      .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
    cy.get('.action-select-multiple')
      .invoke('val')
      .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
  })

  it("Verificar una opción incluida en selección múltiple", () => {
    cy.get('.action-select-multiple')
      .select(['apples', 'oranges', 'bananas'])
    // Verificar que 'oranges' esté entre las opciones seleccionadas
    cy.get('.action-select-multiple')
      .invoke('val').should('include', 'fr-oranges')
  })
})