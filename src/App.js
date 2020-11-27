import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from './operations/queries/getProducts';
import { GET_CART_ITEMS } from './operations/queries/getCartItems';
import { cartMutations } from './operations/mutations';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Header from './components/Header';
import { GET_CURRENT_CURRENCY } from './operations/queries/getCurrency';
import Loader from './components/Loader';
import './App.css';

const currencies = [
  "USD", "NGN", "EUR", "GBP", "CAD"
];

function App() {
  const [open, setOpen] = useState(false);
  const currentCurrencyResult = useQuery(GET_CURRENT_CURRENCY);
  const { loading, data } = useQuery(GET_PRODUCTS, {
    variables: { currency: currentCurrencyResult.data.currentCurrency }
  });
  const cartItemsResult = useQuery(GET_CART_ITEMS);
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
    addItem,
    setCurrency
  } = cartMutations;

  return (
    <div className="relative">
      {loading && <Loader />}
      {open && <Sidebar
        products={data?.products}
        setCurrency={setCurrency}
        currentCurrency={currentCurrencyResult.data.currentCurrency}
        currencies={currencies}
        increaseItemQuantity={increaseItemQuantity}
        decreaseItemQuantity={decreaseItemQuantity}
        removeItem={removeItem}
        cartItems={cartItemsResult.data.cartItems}
        setOpen={setOpen} />}
      <Header setOpen={setOpen} cartItems={cartItemsResult.data.cartItems} />
      <Main
        openSidebar={setOpen}
        cartItems={cartItemsResult.data.cartItems}
        products={data?.products || []}
        addItem={addItem}
        increaseItemQuantity={increaseItemQuantity}
        currentCurrency={currentCurrencyResult.data.currentCurrency}
      />
    </div>
  );
}

export default App;
