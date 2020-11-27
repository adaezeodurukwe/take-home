import { array, func, string } from 'prop-types';
import React, { useEffect } from 'react';
import DisplayCurrency from './DisplayCurrency';

const Main = ({ products, addItem, cartItems, increaseItemQuantity, openSidebar, currentCurrency }) => {
  useEffect(() => {
    if (cartItems.length) {
      openSidebar(true);
    }
  }, [openSidebar, cartItems]);

  const addition = (product, index) => {
    if (cartItems.some(item => item.id === product.id)) {
      increaseItemQuantity(product.id);
    } else {
      addItem(product, index);
    }
  };

  return (
    <div className="product-container">
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={product.id}>
            <img src={product.image_url} alt="product" />
            <span className="my-2">{product.title}</span>
            <DisplayCurrency currentCurrency={currentCurrency} figure={product.price} />
            <button onClick={() => addition(product, index)} className="my-2 add">Add To Cart</button>
          </div>)
        )}
      </div>
    </div>
  );
};

Main.propTypes = {
  products: array,
  addItem: func.isRequired, 
  cartItems: array, 
  increaseItemQuantity: func.isRequired, 
  openSidebar: func.isRequired, 
  currentCurrency: string.isRequired
};

Main.defaultProps = {
  products: [],
  cartItems: [],
};

export default Main;
