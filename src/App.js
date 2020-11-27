import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import { GET_PRODUCTS } from './operations/queries/getProducts';
import { GET_CART_ITEMS } from './operations/queries/getCartItems';
import { cartMutations } from './operations/mutations';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Header from './components/Header';
import { GET_CURRENCIES, GET_CURRENT_CURRENCY } from './operations/queries/getCurrency';


function App() {
  const [open, setOpen] = useState(false);
  const currentCurrencyResult = useQuery(GET_CURRENT_CURRENCY);
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { currency: currentCurrencyResult.data.currentCurrency }
  });
  const cartItemsResult = useQuery(GET_CART_ITEMS)
  const currencyResult = useQuery(GET_CURRENCIES)
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
    addItem,
    setCurrency
  } = cartMutations;

  return (
    <div className="relative">
      {open && <Sidebar
        products={data?.products}
        setCurrency={setCurrency}
        currentCurrency={currentCurrencyResult.data.currentCurrency}
        currencies={currencyResult.data.currency}
        increaseItemQuantity={increaseItemQuantity}
        decreaseItemQuantity={decreaseItemQuantity}
        removeItem={removeItem}
        cartItems={cartItemsResult.data.cartItems}
        setOpen={setOpen} />}
      <Header setOpen={setOpen} cartItems={cartItemsResult.data.cartItems} />
      <Main
        cartItems={cartItemsResult.data.cartItems}
        products={data?.products || []}
        addItem={addItem}
        increaseItemQuantity={increaseItemQuantity}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
