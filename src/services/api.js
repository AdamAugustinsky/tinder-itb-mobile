import axios from 'axios';

const api = axios.create({
  baseURL: 'http://yourIp:3001',
});

export default api;
