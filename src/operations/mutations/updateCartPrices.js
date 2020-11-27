export default function updateCartPrices(cartItemsVar) {
  return (products) => {
    const cartItems = cartItemsVar();
    cartItemsVar(cartItems.map(item => {
      const currentProduct = products.find(product => product.id === item.id)
      return {...item, price: currentProduct.price}
    }))
  }
}