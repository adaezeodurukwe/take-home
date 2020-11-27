import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read () {
            return cartItemsVar();
          }
        },
        currentCurrency: {
          read () {
            return currencyVar()
          }
        }
      }
    }
  }
})

export const currencyVar = makeVar("NGN")

export const cartItemsVar = makeVar([])