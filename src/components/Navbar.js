import React from 'react';
import { Link } from 'react-router-dom';

const today = new Date().toISOString().slice(0, 10);

const initialUserSearch = {
  event: '',
  date: today,
  location: '',
};

const Navbar = () => {
  const [userSearch, setUserSearch] = React.useState(initialUserSearch);

  return (
    <header>
      <nav className='navbar is-primary'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              Great Night Out
            </Link>
            <Link to='/' className='navbar-item'>
              Home
            </Link>
            <Link to='/events' className='navbar-item' {...userSearch}>
              Events
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
