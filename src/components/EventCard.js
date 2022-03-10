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
              <img src={xlargeimageurl} alt={eventname} />
            </figure>
          </div>
          <div className='card-content'>
            <p className='subtitle is-6'>
              <span className='icon'>
                <i className='fas fa-calendar'></i>
              </span>
              <span>{date}</span>
            </p>
            <p className='title is-6'>
              <span className='icon'>
                <i className='fas fa-map-pin'></i>
              </span>
              <span>{town}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
