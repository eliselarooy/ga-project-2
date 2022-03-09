import React from 'react';
import { getAllEvents } from '../lib/api';

import EventCard from './EventCard';

const EventsIndex = () => {
  const [events, setEvents] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { results },
        } = await getAllEvents();
        setEvents(results);
        console.log(results);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  console.log(events);

  return (
    <>
      <p>Events page</p>
      <div className="container">
        <div className="columns is-multiline">
          {!events ? (
            <p>Loading</p>
          ) : (
            events.map((event) => <EventCard key={event.id} {...event} />)
          )}
        </div>
      </div>
    </>
  );
};

export default EventsIndex;
