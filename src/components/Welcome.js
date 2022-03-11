import React from 'react';
import { getAllRecommended } from '../lib/api';
import EventCard from './EventCard';

function Welcome() {
  const [recommendedEvents, setRecommendedEvents] = React.useState(null);
  const storedLoginDetails = localStorage.getItem('loginDetails');
  const loginDetails = JSON.parse(storedLoginDetails);

  React.useEffect(() => {
    const getEvents = async () => {
      try {
        const {
          data: { results },
        } = await getAllRecommended(loginDetails.eventcode);
        setRecommendedEvents(results);
      } catch (err) {
        console.error(err);
      }
    };
    getEvents();
  }, []);

  return (
    <>
      <section className='hero'>
        <div className='hero-body is-flex is-align-items-center'>
          <div className='container'>
            <h1 className='title has-text-centered has-text-white'>
              Welcome back {loginDetails.username}!
            </h1>
          </div>
        </div>
      </section>

      <section className='container mt-6'>
        <h2 className='title has-text-centered'>Recommended For You</h2>
        <div className='columns'>
          {!recommendedEvents ? (
            <p>Loading...</p>
          ) : (
            recommendedEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Welcome;
