import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Productos</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Registro</Link>
    </nav>
  </header>
);

export default Header;