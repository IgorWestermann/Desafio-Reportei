import axios from 'axios';

const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
  baseURL: 'http://localhost/3333'
});

export default api;
