import axios from 'axios';
const loginAPI = axios.create({
  baseURL: 'https://cinejump-api.herokuapp.com'
});


export default loginAPI;