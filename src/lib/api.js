import axios from 'axios';

const baseUrl = `https://www.skiddle.com/api/v1/events/search/?api_key=${process.env.REACT_APP_API_KEY}`;

export const getAllEvents = () => {
  return axios.get(`${baseUrl}`);
};
