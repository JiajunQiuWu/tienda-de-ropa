import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(res => setProducts(res))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Nuestros Productos</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
