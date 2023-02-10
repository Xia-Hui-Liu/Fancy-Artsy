import React, { useState } from 'react';
// import ProductList from './ProductList';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = item => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {/* <ProductList addItemToCart={addItemToCart} /> */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} ({item.quantity})</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
