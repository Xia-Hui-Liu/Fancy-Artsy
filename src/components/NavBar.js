import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
    <nav className="navbar">
      <h3 className="header">FANCY ARTSY</h3>
      <div className="nav-links">
        <a href="#home">Home</a>
        <div className="dropdown">
          <a href="#shop" onClick={toggleDropdown}>
            Shop
          </a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <a href="#1">Option 1</a>
              <a href="#2">Option 2</a>
              <a href="#3">Option 3</a>
            </ul>
          )}
        </div>
        <a href="#about">About Us</a>
      </div>
      <div className="search">
        <a className='search-link' href='#search'>Search</a>
        <BiSearch className='search-icon' />
      </div>
      <a href="#cart" className="cart">Cart <BiCartAlt className='cart-icon' /></a>
      <a href="#login" className="login">
        <VscAccount className='login-img' />
      </a>
    </nav>
    </>
    );
    }


    export default NavBar;