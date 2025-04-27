import axios from 'axios';
import { API_URL } from '../config';

export const loginUser = async (credentials) => {
  const res = await axios.post(`${API_URL}/auth/login`, credentials);
  return res.data.token;
};

export const registerUser = async (userData) => {
  await axios.post(`${API_URL}/auth/register`, userData);
};
