import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({
  uniquelistingidentifier,
  eventname,
  xlargeimageurl,
  date,
  venue: { town },
}) => {
  return (
    <div className='column is-one-quarter-desktop is-half-tablet is-one-mobile'>
      <Link to={`/events/${uniquelistingidentifier}`}>
        <div className='card'>
          <div className='card-header'>
            <h3 className='card-header-title is-centered'>{eventname}</h3>
          </div>
          <div className='card-image has-text-centered'>
            <figure className='is-inline-block'>
              <img src={xlargeimageurl} alt='event image' />
            </figure>
          </div>
          <div className='card-content'>
            <p className='subtitle is-6'>📅 {date}</p>
            <p className='title is-6'>📍 {town}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
