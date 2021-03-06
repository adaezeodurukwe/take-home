import { array, func } from 'prop-types';
import React from 'react';
import Cart from '../assets/cart.png';

const Header = ({ setOpen, cartItems }) => {
  return (
    <header>
      <h3>All Products</h3>
      <div className="cart-container" onClick={() => setOpen(true)}>
        <img src={Cart} alt="cart" />
        <span className="count">{cartItems.length}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  setOpen: func.isRequired,
  cartItems: array
};

Header.defaultProps = {
  cartItems: [],
};

export default Header;
