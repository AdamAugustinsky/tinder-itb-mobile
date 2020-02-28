import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SubstituaPeloSeuIP:3001',
});

export default api;
