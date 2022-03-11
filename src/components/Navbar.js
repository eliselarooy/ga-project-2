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
        <div className='container  has-text-weight-bold'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              <span className='icon'>
                <i className='fas fa-meteor'></i>
              </span>
              <span> Great Night Out</span>
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
