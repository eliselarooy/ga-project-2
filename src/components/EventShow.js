import React from 'react';
import { useParams } from 'react-router-dom';
import { getSingleEvent } from '../lib/api';

function EventShow() {
  const { eventId } = useParams();
  const [eventData, setEventData] = React.useState();
  console.log('Event ID: ', eventId);

  React.useEffect(() => {
    async function getEventData() {
      try {
        const {
          data: { results },
        } = await getSingleEvent(eventId);
        setEventData(results);
        console.log('Results: ', results);
      } catch (err) {
        console.error(err);
      }
    }
    getEventData();
  }, []);

  return (
    <section className="section">
      {!eventData ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="container">
            <h2 className="title has-text-centered">
              {eventData[0].eventname}
            </h2>
            <div className="columns is-centered">
              <div className="column">
                <figure className="column">
                  <img src={eventData[0].imageurl} />
                </figure>
                <div className="column">
                  <p>{eventData[0].description}</p>
                </div>

                <div className="columns">
                  <div className="column">
                    <p>Price: £{eventData[0].entryprice}</p>
                    <p>Min Age: {eventData[0].minage}</p>
                  </div>
                  <div className="column">
                    <p>Date: {eventData[0].date}</p>
                    <p>Start Time: {eventData[0].openingtimes.doorsopen}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="columns has-text-centered">
              <div className="column is-6">
                <p>Latitude: {eventData[0].venue.latitude}</p>
                <p>Longitude: {eventData[0].venue.longitude}</p>
              </div>
              <div className="column is-6">
                <h3 className="title">Venue:</h3>
                <p>{eventData[0].venue.name}</p>
                <p>{eventData[0].venue.address}</p>
                <p>{eventData[0].venue.town}</p>
                <p>{eventData[0].venue.postcode}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default EventShow;
