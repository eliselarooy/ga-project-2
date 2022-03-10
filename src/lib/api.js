import axios from 'axios';

const baseUrl = `https://www.skiddle.com/api/v1/events/?api_key=${process.env.REACT_APP_API_KEY}`;

export const getAllEventsWithEventCode = ({ keyword, minDate, maxDate, eventcode }) => {
  console.log('Event code: ', eventcode);
  return axios.get(
    `${baseUrl}&keyword=${keyword}&minDate=${minDate}&maxDate=${maxDate}&eventcode=${eventcode}`)

  export const getAllEvents = ({ keyword, minDate, limit }) => {
  return axios.get(
    `${baseUrl}&keyword=${keyword}&minDate=${minDate}&limit=${limit}`
  );
};

export const getSpecialEvents = () => {
  return axios.get(`${baseUrl}&specialFeatured=1&limit=4`);
};

export const getSingleEvent = (uniquelistingidentifier) => {
  return axios.get(
    `${baseUrl}/&uniquelistingidentifier=${uniquelistingidentifier}`
  );
};
