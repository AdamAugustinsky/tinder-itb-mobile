import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tinder-itb-backend.herokuapp.com/',
});

export default api;
