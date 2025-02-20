import CarritoActions from "../support/carritoActions"

describe('ver un producto', () => {
  it('passes', () => {
    CarritoActions.visitarCarrito()
    CarritoActions.clickProducto(':nth-child(1) > .product-thumb > .content > .description > h4 > a')
    CarritoActions.revisarTitulo('h1', 'MacBook')
  })
})