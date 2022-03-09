import React from 'react';

const initialUserSearch = {
  event: '',
  date: '',
  location: '',
};

function Home() {
  const [userSearch, setUserSearch] = React.useState(initialUserSearch);

  function handleSearchChange(e) {
    setUserSearch({ ...userSearch, [e.target.name]: e.target.value });
  }

  console.log(userSearch);

  return (
    <section className='hero is-fullheight-with-navbar is-warning'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title has-text-centered'>Events Home Page</h1>
        </div>

        <div className='container columns'>
          <input
            type='text'
            placeholder='Search for event'
            name='event'
            value={userSearch.event}
            onChange={handleSearchChange}
          />
          <input
            type='date'
            name='date'
            value={userSearch.date}
            onChange={handleSearchChange}
          />
          <input
            type='search'
            placeholder='Location'
            name='location'
            value={userSearch.location}
            onChange={handleSearchChange}
          />
          <input type='submit' />
        </div>
      </div>
    </section>
  );
}

export default Home;
