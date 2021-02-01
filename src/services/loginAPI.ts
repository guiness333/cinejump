import axios from 'axios';
const loginAPI = axios.create({
  baseURL: process.env.REACT_APP_CINEJUMP_URL
});


export default loginAPI;