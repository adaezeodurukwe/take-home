export default function increamentCartItem(cartItemsVar) {
  return (id) => {
    const cartItems = cartItemsVar();
    cartItemsVar(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };
}