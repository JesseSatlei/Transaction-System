import axios from 'axios';

// Configura url da api
const api = axios.create({
  baseURL: 'https://incca-back.herokuapp.com/v1/api'
});

export default api;