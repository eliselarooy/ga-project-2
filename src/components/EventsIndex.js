import React from 'react';
import { getAllEvents } from '../lib/api';

import EventCard from './EventCard';

const today = new Date().toISOString().slice(0, 10);

const EventsIndex = () => {
  const [events, setEvents] = React.useState(null);
  const [formData, setFormData] = React.useState({
    keyword: '',
    minDate: today,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log('form data', formData);

  const getData = async () => {
    try {
      const {
        data: { results },
      } = await getAllEvents({ ...formData });
      setEvents(results);
      console.log(results);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  console.log(events);

  return (
    <>
      <p>Events page</p>
      <nav className="menu">
        <p className="menu-heading">Filter search</p>
        <div className="menu-block">
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Search"
              name="keyword"
              onChange={handleChange}
              value={formData.keyword}
            />
            <input
              className="input"
              type="date"
              placeholder="Search"
              name="minDate"
              onChange={handleChange}
              value={formData.minDate}
            />
            <button
              type="submit"
              className="button is-fullwidth"
              onClick={handleSubmit}
            >
              Search
            </button>
          </p>
        </div>
      </nav>
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
