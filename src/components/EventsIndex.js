import React from 'react';
import { getAllEvents } from '../lib/api';

const EventsIndex = () => {
  const [events, setEvents] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllEvents();
        setEvents(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return <p>Events page</p>;
};

export default EventsIndex;
