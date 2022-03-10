import React from 'react';
import { getAllEvents, getAllEventsWithEventCode } from '../lib/api';

import EventCard from './EventCard';

const today = new Date().toISOString().slice(0, 10);

const aYearFromNow = new Date();
aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
const nextYear = aYearFromNow.toISOString().slice(0, 10);

const EventsIndex = ({ event, date, location }) => {
  const [events, setEvents] = React.useState(null);
  const [formData, setFormData] = React.useState({
    keyword: '',
    minDate: today,
    eventcode: '',
    limit: 20,
  });

  console.log('Evennt; ', event);
  console.log('Date; ', date);
  console.log('Location; ', location);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const increaseLimit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, limit: formData.limit + 20 });
    console.log('form data 1st', formData);
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
  }, [formData.limit]);

  return (
    <>
      <p>Events page</p>
      <nav className='menu'>
        <p className='menu-heading'>Filter search</p>
        <div className='menu-block'>
          <p className='control has-icons-left'>
            <label className='label'>Search</label>
            <input
              className='input'
              type='text'
              placeholder='Search'
              name='keyword'
              onChange={handleChange}
              value={formData.keyword}
            />
            <label className='label'>Min Date</label>
            <input
              className='input'
              type='date'
              name='minDate'
              onChange={handleChange}
              value={formData.minDate}
            />
            <select name='eventcode' id='evenType' onChange={handleChange}>
              <option name='eventcode' value=''>
                NONE SELECTED
              </option>
              <option name='eventcode' value='FEST'>
                FESTIVAL
              </option>
              <option name='eventcode' value='LIVE'>
                LIVE MUSIC
              </option>
              <option name='eventcode' value='CLUB'>
                CLUBBING/DANCE MUSIC
              </option>
              <option name='eventcode' value='DATE'>
                DATING EVENT
              </option>
              <option name='eventcode' value='THEATRE'>
                THEATRE
              </option>
              <option name='eventcode' value='COMEDY'>
                COMEDY
              </option>
              <option name='eventcode' value='EXHIB'>
                EXHIBITION
              </option>
              <option name='eventcode' value='KIDS'>
                KIDS/FAMILY
              </option>
              <option name='eventcode' value='BARPUB'>
                BAR/PUB
              </option>
              <option name='eventcode' value='LGB'>
                GAY/LESBIAN
              </option>
              <option name='eventcode' value='SPORT'>
                SPORT
              </option>
              <option name='eventcode' value='ARTS'>
                THE ARTS
              </option>
            </select>

            <button
              type='submit'
              className='button is-fullwidth'
              onClick={handleSubmit}
            >
              Search
            </button>
          </p>
        </div>
      </nav>
      <div className='container'>
        <div className='columns is-multiline'>
          {!events ? (
            <p>Loading</p>
          ) : (
            events.map((event) => <EventCard key={event.id} {...event} />)
          )}
        </div>
      </div>
      <button onClick={increaseLimit}>Load more events</button>
    </>
  );
};

export default EventsIndex;
