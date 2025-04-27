import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(`${API_URL}/products`, { name, description, price }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Producto creado con éxito');
      setName('');
      setDescription('');
      setPrice('');
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="admin-container">
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Añadir Producto</button>
      </form>
    </div>
  );
};

export default AdminPanel;
