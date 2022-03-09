import axios from 'axios';

const baseUrl = `https://www.skiddle.com/api/v1/events/search/?api_key=${process.env.REACT_APP_API_KEY}`;

export const getAllEvents = ({ keyword, minDate }) => {
  return axios.get(`${baseUrl}&keyword=${keyword}&minDate=${minDate}`);
};

export const getSpecialEvents = () => {
  return axios.get(`${baseUrl}&specialFeatured=1&limit=3`);
};
