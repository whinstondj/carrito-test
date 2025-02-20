class CarritoActions {
    
    static visitarCarrito() {
        cy.visit('https://winstoncastillo.com/robot-selenium/')
    }

    static clickProducto(idProducto) {
        cy.get(idProducto).should('be.visible')
        cy.get(idProducto).click()
    }

    static revisarTitulo(contenedorTitulo, titulo) {
        cy.get(contenedorTitulo).should('be.visible')
        cy.get(contenedorTitulo).should('have.text', titulo)
    }
}

export default CarritoActions