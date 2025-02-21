import CarritoActions from "../support/carritoActions"

describe('ver un producto', () => {
  it('passes', () => {
    CarritoActions.visitarCarrito()
    CarritoActions.clickProducto(':nth-child(1) > .product-thumb > .content > .description > h4 > a')
    CarritoActions.revisarTitulo('h1', 'MacBook')
    CarritoActions.revisarTitulo('#content > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1)', 'Brand: Apple')
  })
})