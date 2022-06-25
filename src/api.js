import axios from 'axios';

const API_URL = 'https://api.thecatapi.com';


axios.defaults.baseURL = API_URL;
export function getCategories() {
  return axios.get(`/v1/categories`);

}

export function getCats(limit, categoryId) {
  return axios.get(`/v1/images/search?limit=${limit}&page=1&category_ids=${categoryId}`);
}