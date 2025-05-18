import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ product }) => {
  const { user } = useAuth();

  const addToCart = async () => {
    try {
      await axios.post(`http://localhost:8080/api/cart/add/${product.id}`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Producto añadido al carrito');
    } catch (error) {
      console.error(error);
    }
  };

  const addToFavorites = async () => {
    try {
      await axios.post(`http://localhost:8080/api/favorites/add/${product.id}`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Producto añadido a favoritos');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>{product.price}€</strong>

      {user && (
        <>
          <button onClick={addToCart}>Agregar al carrito</button>
          <button onClick={addToFavorites}>Agregar a favoritos</button>
        </>
      )}
    </div>
  );
};

export default ProductCard;
