import { array, func, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import Close from '../assets/close.svg';
import DisplayCurrency from './DisplayCurrency';


const Sidebar = ({
  currencies,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
  cartItems,
  setOpen,
  currentCurrency,
  setCurrency,
  products
}) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (products && products[0]) {
      let total = 0;
      cartItems.forEach(item => {
        total = (products[item.index].price * item.quantity) + total;
      });

      setTotal(total);
    }

  }, [products, cartItems]);

  const reduction = (quantity, id) => {
    if (quantity > 1) {
      decreaseItemQuantity(id);
    } else {
      removeItem(id);
    }
  };

  return (
    <div className="sidebar">
      <div className="backdrop" onClick={() => setOpen(false)} />
      <div className="drawer">
        <div>
          <button onClick={() => setOpen(false)}>
            <img width="50" src={Close} alt="close" />
          </button>
        </div>
        <h6>YOUR CART</h6>
        <select name="currency" value={currentCurrency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        {cartItems[0] ? <div className="cart-items">
          {cartItems.map(product => (
            <div key={product.id} className="cart-item my-2">
              <div className="cart-item-header">
                <span className="cart-item-title">{product.title}</span>
                <button onClick={() => removeItem(product.id)}>
                  <img width="20" src={Close} alt="close" />
                </button></div>
              <div className="cart-item-body">
                <div className="button-container">
                  <button onClick={() => reduction(product.quantity, product.id)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => increaseItemQuantity(product.id)}>+</button>
                </div>
                <span>{products && products[0] ? products[product.index].price : ""}</span>
                <img width="40" src={product.image_url} alt="product" />
              </div>
            </div>
          ))}
        </div> : <div className="empty-cart">You have no item in your cart</div>}
        
        <div className="total">
          <div className="todal-display">
             Total: <DisplayCurrency currentCurrency={currentCurrency} figure={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  currencies: array,
  increaseItemQuantity: func.isRequired,
  decreaseItemQuantity: func.isRequired,
  removeItem: func.isRequired,
  cartItems: array,
  setOpen: func.isRequired,
  currentCurrency: string.isRequired,
  setCurrency: func.isRequired,
  products: array
};

Sidebar.defaultProps = {
  currencies: [],
  cartItems: [],
  products: []
};

export default Sidebar;
