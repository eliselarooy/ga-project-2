import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getSingleEvent } from '../lib/api';
import Map, { Marker } from 'react-map-gl';
import { useNavigate } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';

function EventShow() {
  const { eventId } = useParams();
  const [eventData, setEventData] = React.useState();
  const navigate = useNavigate();

  const MAPBOX_TOKEN = `${process.env.REACT_APP_ACCESS_TOKEN}`;

  function handleReturn() {
    navigate(-1);
  }

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
    <>
      {!eventData ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='container is-fluid has-text-right mt-2'>
            <button
              className='button is-primary is-rounded'
              onClick={handleReturn}
            >
              Return to Search
            </button>
          </div>
          <section className='section has-background-white'>
            <div className='columns has-text-centered'>
              <div className='column'>
                <figure>
                  <img
                    className='show-image'
                    src={eventData[0].largeimageurl}
                  />
                </figure>
              </div>
              <div className='column content is-medium'>
                <h2 className='title has-text-centered'>
                  {eventData[0].eventname}
                </h2>
                <p>{eventData[0].description}</p>
                <div className='columns has-text-centered'>
                  <div className='column'>
                    <p className='subtitle'>
                      💵 Price: {eventData[0].entryprice}
                    </p>
                    <p className='subtitle'>
                      👤 Min Age: {eventData[0].minage}
                    </p>
                  </div>
                  <div className='column'>
                    <p className='subtitle'>📅 Date: {eventData[0].date}</p>
                    <p className='subtitle'>
                      🕘 Start Time: {eventData[0].openingtimes.doorsopen}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='section has-background-dark'>
            <div className='map-show container has-background-white'>
              <div className='columns has-text-centered'>
                <div className='column is-6 m-5'>
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
                <div className='column is-6 mt-6'>
                  <h3 className='title'>📍 {eventData[0].venue.name}</h3>
                  <p className='subtitle'>{eventData[0].venue.address}</p>
                  <p
                    className='
                    subtitle'
                  >
                    {eventData[0].venue.town}
                  </p>
                  <p className='subtitle'>{eventData[0].venue.postcode}</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default EventShow;
