import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})
export const API_KEY = '4eb0f1abd8808fce853779d359d25c07'
export const REGION = 'BR'
export const LANGUAGE = 'pt-BR'
export default api
