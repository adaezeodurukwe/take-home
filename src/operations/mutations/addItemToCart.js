function addItemToCart(cartItemsVar) {
  return (product, index) => {
    const cartItems = cartItemsVar();
    const newProduct = { ...product, index, quantity: 1 }
    cartItemsVar([...cartItems, newProduct])
  }
}

export default addItemToCart;