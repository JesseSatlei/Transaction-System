import axios from 'axios';

const api = axios.create({
  baseURL: 'https://incca-back.herokuapp.com/v1/api'
});

export default api;