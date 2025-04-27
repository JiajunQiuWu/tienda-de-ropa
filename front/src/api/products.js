import axios from 'axios';
import { API_URL } from '../config';

// Función para obtener productos
export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

// Función para crear un nuevo producto (sólo admin)
export const createProduct = async (productData) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    `${API_URL}/products`,
    productData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data;
};
