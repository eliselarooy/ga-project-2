import React from 'react';
import { useParams } from 'react-router-dom';
import { getSingleEvent } from '../lib/api';
import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

function EventShow() {
  const { eventId } = useParams();
  const [eventData, setEventData] = React.useState();
  console.log('Event ID: ', eventId);

  const MAPBOX_TOKEN = `${process.env.REACT_APP_ACCESS_TOKEN}`;
  console.log('MAPBOX_TOKEN: ', MAPBOX_TOKEN);

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
    <section className='section has-background-primary'>
      {!eventData ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='container has-background-warning'>
            <h2 className='title has-text-centered'>
              {eventData[0].eventname}
            </h2>
            <div className='columns has-text-centered'>
              <div className='column'>
                <figure>
                  <img src={eventData[0].largeimageurl} />
                </figure>
              </div>
              <div className='column'>
                <p>{eventData[0].description}</p>
              </div>
            </div>

            <div className='columns has-text-centered'>
              <div className='column'>
                <p>Price: £{eventData[0].entryprice}</p>
                <p>Min Age: {eventData[0].minage}</p>
              </div>
              <div className='column'>
                <p>Date: {eventData[0].date}</p>
                <p>Start Time: {eventData[0].openingtimes.doorsopen}</p>
              </div>
            </div>
          </div>

          <div className='container has-background-danger'>
            <div className='columns has-text-centered'>
              <div className='column is-6'>
                <Map
                  initialViewState={{
                    longitude: eventData[0].venue.longitude,
                    latitude: eventData[0].venue.latitude,
                    zoom: 14,
                  }}
                  style={{ width: 600, height: 400 }}
                  mapStyle='mapbox://styles/mapbox/streets-v9'
                  mapboxAccessToken={MAPBOX_TOKEN}
                >
                  <Marker
                    longitude={eventData[0].venue.longitude}
                    latitude={eventData[0].venue.latitude}
                    color='red'
                  />
                </Map>
              </div>
              <div className='column is-6'>
                <h3 className='title'>Venue:</h3>
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
