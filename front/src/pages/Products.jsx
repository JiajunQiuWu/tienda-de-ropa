import React from 'react';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products.js';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
