import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/orders/', // Django API base URL
});


export default api;
