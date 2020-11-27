import { cartItemsVar, currencyVar } from "../../cache";
import addItemToCart from "./addItemToCart";
import decreaseCartItem from "./decreaseCartItem";
import increamentCartItem from "./incrementCartItem";
import removeItemFromCart from "./removeItemFromCart";
import setCurrency from "./setCurrency";

export const cartMutations = {
  increaseItemQuantity: increamentCartItem(cartItemsVar),
  decreaseItemQuantity: decreaseCartItem(cartItemsVar),
  addItem: addItemToCart(cartItemsVar),
  removeItem: removeItemFromCart(cartItemsVar),
  setCurrency: setCurrency(currencyVar)
}