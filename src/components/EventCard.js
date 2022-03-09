import React from 'react';

const EventCard = ({ eventname, largeimageurl, date, venue: { town } }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-one-mobile">
      <div className="card">
        <div className="card-header">
          <h3 className="card-header-title">{eventname}</h3>
        </div>
        <div className="card-image">
          <img src={largeimageurl} alt="" />
        </div>
        <div className="card-content">
          <p>{date}</p>
          <p>{town}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
