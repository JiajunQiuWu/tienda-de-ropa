import React, { useState } from 'react';
import { registerUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert('Registro exitoso');
      navigate('/login');
    } catch (error) {
      alert('Error en el registro');
    }
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Nombre de usuario" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
