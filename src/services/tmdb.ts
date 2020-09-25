import axios from 'axios';
const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});
export const API_KEY = '4eb0f1abd8808fce853779d359d25c07';
export const REGION = 'US';
export const LANGUAGE = 'en-US';
tmdb.interceptors.request.use(config => {
  const params = config.params || {};

  params.api_key = '4eb0f1abd8808fce853779d359d25c07';
  params.language = 'en-US';
  params.region = 'US';

  return { ...config, params };
});


export default tmdb
