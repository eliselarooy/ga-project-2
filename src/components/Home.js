import React from 'react';
import { getSpecialEvents } from '../lib/api';

const initialUserSearch = {
  event: '',
  date: '',
  location: '',
};

function Home() {
  const [userSearch, setUserSearch] = React.useState(initialUserSearch);
  const [specialEvents, setSpecialEvents] = React.useState(null);

  function handleSearchChange(e) {
    setUserSearch({ ...userSearch, [e.target.name]: e.target.value });
  }

  React.useEffect(() => {
    const getSpecialEventsData = async () => {
      try {
        const {
          data: { results },
        } = await getSpecialEvents();
        setSpecialEvents(results);
      } catch (err) {
        console.error(err);
      }
    };
    getSpecialEventsData();
  }, []);

  console.log(userSearch);
  console.log(specialEvents);

  return (
    <section className='hero is-fullheight-with-navbar is-warning'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title has-text-centered'>Events Home Page</h1>
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

        <div className='container'>
          <div className='columns is-multiline'>
            {!specialEvents ? (
              <p>Loading...</p>
            ) : (
              specialEvents.results.map((event) => (
                <EventCard {...specialEvents} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
