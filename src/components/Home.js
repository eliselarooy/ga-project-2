import React from 'react';
import { getSpecialEvents } from '../lib/api';
import EventCard from './EventCard';
import { useNavigate } from 'react-router-dom';

const initialUserSearch = {
  event: '',
  date: '',
  location: '',
};

function Home() {
  const [userSearch, setUserSearch] = React.useState(initialUserSearch);
  const [specialEvents, setSpecialEvents] = React.useState(null);
  const navigate = useNavigate();

  function handleSearchChange(e) {
    setUserSearch({ ...userSearch, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('userSearch: ', userSearch);
    navigate('/events', { state: userSearch });
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
  console.log('Special Events:', specialEvents);

  return (
    <>
      <section className="hero">
        <div className="hero-body is-flex is-align-items-center">
          <div className="container">
            <h1 className="main-title title has-text-centered has-text-white is-size-2">
              <span className="icon">
                <i className="fas fa-meteor"></i>
              </span>
              <span> Great Night Out</span>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <div className="control has-icons-left">
                <input
                  type="text"
                  placeholder="Search for event"
                  name="event"
                  value={userSearch.event}
                  onChange={handleSearchChange}
                  className="input is-primary is-rounded"
                />
                <span className="icon is-left">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>

            <div className="column is-6">
              <input
                type="date"
                name="date"
                value={userSearch.date}
                onChange={handleSearchChange}
                className="input is-primary is-rounded"
              />
            </div>
          </div>

          <div className="columns is-centered">
            <div className="is-half has-text-centered">
              <button
                className="button is-primary is-rounded"
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-6">
        <h2 className="title has-text-centered">Featured Events</h2>
        <div className="columns">
          {!specialEvents ? (
            <p>Loading...</p>
          ) : (
            specialEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
