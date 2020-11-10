import axios from 'axios';
const tmdb = axios.create({
  baseURL: process.env.REACT_APP_TMDB_URL
});
tmdb.interceptors.request.use(config => {
  const params = config.params || {};
  params.api_key = process.env.REACT_APP_TMDB_API_KEY;
  params.language = process.env.REACT_APP_TMDB_LANGUAGE;
  params.region = process.env.REACT_APP_TMDB_REGION;

  return { ...config, params };
});


export default tmdb
