import React from 'react';
import { Link } from 'react-router-dom';

const today = new Date().toISOString().slice(0, 10);

const Navbar = () => {
  return (
    <header>
      <nav className='navbar is-primary'>
        <div className='container  has-text-weight-bold'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              <span className='icon'>
                <i className='fas fa-meteor'></i>
              </span>
              <span> Great Night Out</span>
            </Link>
            <Link to='/events' className='navbar-item'>
              Events
            </Link>
            <Link to='/login' className='navbar-item'>
              Login
            </Link>
            <Link to='/register' className='navbar-item'>
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
