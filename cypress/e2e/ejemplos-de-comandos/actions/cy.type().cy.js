// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.type() 
describe('Tests para usar cy.type() básico', () => {
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

  it("Escribir texto en un campo de email", () => {
    // Escribir un correo electrónico y verificar el valor ingresado
    cy.get('.action-email').type('fake@email.com')
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })

  it("Escribir secuencias de teclas especiales", () => {
    // Escribir comandos especiales como flechas y selección de texto
    cy.get('.action-email').type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
    cy.get('.action-email').type('{del}{selectall}{backspace}')
  })

  it("Usar modificadores de teclado", () => {
    // Simular teclas modificadoras como alt, control, shift y comando
    cy.get('.action-email').type('{alt}{option}')
    cy.get('.action-email').type('{ctrl}{control}')
    cy.get('.action-email').type('{meta}{command}{cmd}')
    cy.get('.action-email').type('{shift}')
  })

  it("Escribir con retraso entre teclas", () => {
    // Simular escritura lenta con un retardo entre caracteres
    cy.get('.action-email').type('slow.typing@email.com', { delay: 1000 })
    cy.get('.action-email').should('have.value', 'slow.typing@email.com')
  })

  it("Forzar escritura en un campo deshabilitado", () => {
    // Escribir en un campo que normalmente no permite entrada
    cy.get('.action-disabled')
        .type('disabled error checking', { force: true })
    cy.get('.action-disabled').should('have.value', 'disabled error checking')
  })
})
