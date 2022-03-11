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
      {' '}
      {!eventData ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="container is-fluid has-text-right mt-2">
            <button
              className="button is-primary is-rounded"
              onClick={handleReturn}
            >
              Return to Search
            </button>
          </div>
          <section className="section has-background-white">
            <div className="columns has-text-centered">
              <div className="column">
                <figure>
                  <img
                    className="show-image"
                    src={eventData[0].largeimageurl}
                    alt={eventData[0].eventname}
                  />
                </figure>
              </div>
              <div className="column content is-medium">
                <h2 className="title has-text-centered">
                  {eventData[0].eventname}
                </h2>
                <p>{eventData[0].description}</p>
                <div className="columns has-text-centered">
                  <div className="column">
                    <p className="subtitle">
                      <span className="icon">
                        <i className="fas fa-credit-card"></i>
                      </span>
                      <span> Price: {eventData[0].entryprice}</span>
                    </p>

                    <p className="subtitle">
                      <span className="icon">
                        <i className="fas fa-user"></i>
                      </span>
                      <span> Minimum Age: {eventData[0].minage}</span>
                    </p>
                  </div>

                  <div className="column">
                    <p className="subtitle">
                      <span className="icon">
                        <i className="fas fa-calendar"></i>
                      </span>
                      <span> Date: {eventData[0].date}</span>
                    </p>
                    <p className="subtitle">
                      <span className="icon">
                        <i className="fas fa-clock"></i>
                      </span>
                      <span>
                        {' '}
                        Start Time: {eventData[0].openingtimes.doorsopen}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section has-background-light">
            <div className="map-show  has-background-white">
              <div className="columns has-text-centered">
                <div className="column pl-5">
                  <Map
                    initialViewState={{
                      longitude: eventData[0].venue.longitude,
                      latitude: eventData[0].venue.latitude,
                      zoom: 14,
                    }}
                    style={{ width: 600, height: 400 }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={MAPBOX_TOKEN}
                  >
                    <Marker
                      longitude={eventData[0].venue.longitude}
                      latitude={eventData[0].venue.latitude}
                      color="red"
                    />
                  </Map>
                </div>
                <div className="column address">
                  <h3 className="title">
                    <span className="icon">
                      <i className="fas fa-map-pin"></i>
                    </span>
                    <span> {eventData[0].venue.name}</span>
                  </h3>
                  <p className="is-size-4">{eventData[0].venue.address}</p>
                  <p
                    className="
                    is-size-4"
                  >
                    {eventData[0].venue.town}
                  </p>
                  <p className="is-size-4">{eventData[0].venue.postcode}</p>
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
