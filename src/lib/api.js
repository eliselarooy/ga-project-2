import axios from 'axios';

const baseUrl = `https://www.skiddle.com/api/v1/events/?api_key=${process.env.REACT_APP_API_KEY}`;

export const getAllEvents = () => {
  return axios.get(`${baseUrl}`);
};

export const getSpecialEvents = () => {
  return axios.get(`${baseUrl}&specialFeatured=1&limit=4`);
};

export const getSingleEvent = (uniquelistingidentifier) => {
  return axios.get(
    `${baseUrl}/&uniquelistingidentifier=${uniquelistingidentifier}`
  );
};
