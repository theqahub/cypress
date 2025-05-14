// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.trigger() 
describe('Tests para usar cy.trigger() básico', () => {
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

    it("Modificar el valor de un slider y disparar el evento 'change'", () => {
        // Cambiar el valor del slider usando jQuery e invocar el evento de cambio
        cy.get('.trigger-input-range')
        .invoke('val', 25); // Asignar nuevo valor

        cy.get('.trigger-input-range')
        .trigger('change'); // Disparar manualmente el evento

        // Verificar que el valor visible refleje el nuevo valor
        cy.get('.trigger-input-range')
        .get('input[type=range]').siblings('p')
        .should('have.text', '25');
    });
});