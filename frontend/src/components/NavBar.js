import React, { useCallback, useState} from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { BiSearch, BiCartAlt, BiChevronDown } from 'react-icons/bi';
import Categories from './Categories';


const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = useCallback(() => {
      setDropdownOpen(prevState => !prevState);
    }, []);
  
    return (
      <nav className="navbar">
        <h3 className="header">FANCY ARTSY</h3>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <Link to="/shop" onClick={toggleDropdown}>
              Shop<BiChevronDown className='dropdown-icon' />
            </Link>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <Categories />
              </ul>
            )}
          </div>
          <Link to="/about">About Us</Link>
        </div>
        <div className="search">
          <Link className='search-link' to='/search'>Search</Link>
          <BiSearch className='search-icon' />
          <Link className='cart' to='/cart'>
            Cart <BiCartAlt className='cart-icon' />
          </Link>
          <Link className="login" to='/login'>
            <VscAccount className='login-img' />
          </Link>
        </div>
      </nav>
    );
  };

export default NavBar;