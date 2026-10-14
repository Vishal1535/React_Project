import axios from 'axios';

const api = axios.create({
  baseURL: 'https://69ff510d2b7ab349602f8190.mockapi.io/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  }
});
export default api;