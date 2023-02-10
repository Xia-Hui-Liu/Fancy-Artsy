import React from 'react';

const ProductList = ({ addItemToCart }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 9.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 29.99 }
  ];

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => addItemToCart({ name: product.name, quantity: 1 })}>
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
