import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              Home
            </Link>
            <Link to='/events' className='navbar-item'>
              Events
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
