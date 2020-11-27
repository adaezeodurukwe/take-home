export default function removeItemFromCart(cartItemsVar) {
  return (id) => {
    const cartItems = cartItemsVar();
    cartItemsVar(cartItems.filter(item => item.id !== id));
  };
}