import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    load();
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      {products.map((p) => (
        <div key={p.id}>{p.name} - {p.price} €</div>
      ))}
    </div>
  );
};

export default Products;