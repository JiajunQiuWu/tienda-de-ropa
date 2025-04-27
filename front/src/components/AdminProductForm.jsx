import React, { useState } from 'react';
import axios from 'axios';

const AdminCreateProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:8080/api/products', {
        name,
        description,
        price
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage('Producto creado exitosamente');
      setName('');
      setDescription('');
      setPrice('');
    } catch (error) {
      console.error(error);
      setMessage('Error al crear producto. Asegúrate de tener permisos de admin.');
    }
  };

  return (
    <div className="admin-product-form">
      <h2>Crear Nuevo Producto</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleCreateProduct}>
        <input
          type="text"
          placeholder="Nombre"
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
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default AdminCreateProduct;