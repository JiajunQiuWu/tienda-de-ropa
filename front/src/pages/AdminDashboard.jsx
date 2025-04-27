import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import AdminProductForm from '../components/AdminProductForm';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get(`${API_URL}/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`${API_URL}/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchProducts();
    } catch (err) {
      console.error('Error al eliminar producto:', err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Panel de administrador</h2>

      <AdminProductForm
        productToEdit={editProduct}
        onSave={() => {
          setEditProduct(null);
          fetchProducts();
        }}
        onCancel={() => setEditProduct(null)}
      />

      <div className="admin-product-list">
        {products.map(p => (
          <div key={p.id} className="admin-product">
            <img src={p.imageUrl} alt={p.name} />
            <div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <strong>{p.price}€</strong>
            </div>
            <div className="actions">
              <button onClick={() => setEditProduct(p)}>Editar</button>
              <button onClick={() => handleDelete(p.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
