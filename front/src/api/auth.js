import axios from 'axios';
import { API_URL } from '../config';

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};
