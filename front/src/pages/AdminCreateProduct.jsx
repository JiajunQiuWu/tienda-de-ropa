import React, { useState } from 'react';
import { createProduct } from '../api/products';

const AdminCreateProduct = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(form);
      alert('Producto creado correctamente');
      setForm({ name: '', description: '', price: '', imageUrl: '' });
    } catch (err) {
      console.error('Error al crear producto', err);
      alert('Error al crear producto');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Producto</h2>
      <input type="text" placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input type="text" placeholder="Descripción" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
      <input type="number" placeholder="Precio" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
      <input type="text" placeholder="URL Imagen" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} required />
      <button type="submit">Crear</button>
    </form>
  );
};

export default AdminCreateProduct;
