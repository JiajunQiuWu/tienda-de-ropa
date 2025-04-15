import axios from 'axios';
import { API_URL } from '../config';

export const fetchProducts = async () => {
  return axios.get(`${API_URL}/api/products`);
};
