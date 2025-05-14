// Funciones en Cypress 
// Comandos útiles y ejemplos para aprender desde 0

// cy.scrollTo() 
describe('Tests para usar cy.scrollTo() básico', () => {
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

    it("Hacer scroll hasta la parte inferior de la ventana", () => {
        // Desplazarse hasta el fondo de la ventana
        cy.scrollTo('bottom');
    });

    it("Hacer scroll horizontal dentro de un elemento", () => {
        // Desplazarse hacia la derecha dentro del contenedor horizontal
        cy.get('#scrollable-horizontal').scrollTo('right');
    });

    it("Hacer scroll a coordenadas específicas (x, y en píxeles)", () => {
        // Desplazarse 250px a la derecha y 250px hacia abajo
        cy.get('#scrollable-vertical').scrollTo(250, 250);
    });

    it("Hacer scroll a un porcentaje del ancho y alto del elemento", () => {
        // Desplazarse al 75% del ancho y al 25% de la altura del contenedor
        cy.get('#scrollable-both').scrollTo('75%', '25%');
    });

    it("Hacer scroll con easing personalizado", () => {
        cy.get('#scrollable-vertical').scrollIntoView()
        // Usar una animación lineal para centrar verticalmente
        cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' });

        // Tipos de easing para animaciones de scroll en Cypress:

        // 'linear'        → Velocidad constante durante todo el desplazamiento
        // 'swing'         → Empieza lento, acelera en el medio y termina lento (valor por defecto)
        // 'ease-in'       → Empieza lento y acelera progresivamente
        // 'ease-out'      → Empieza rápido y desacelera hacia el final
        // 'ease-in-out'   → Comienza lento, acelera en el medio y vuelve a desacelerar al final
    });

    it("Hacer scroll con duración personalizada", () => {
        cy.get('#scrollable-both').scrollIntoView()
        // Centrar el contenedor con un scroll suave de 2 segundos
        cy.get('#scrollable-both').scrollTo('center', { duration: 2000 });
    });
});
