import React from 'react';
import { Link } from 'react-router-dom';

const ShopNowButton = () => {
  
  const handleClick = () => {
    window.history.push('/categories');
  };

  return (
    <Link to='/categories'>
      <button className='main-button' onClick={handleClick}>
        Shop Now
      </button>
    </Link>
  );
};

export default ShopNowButton;
