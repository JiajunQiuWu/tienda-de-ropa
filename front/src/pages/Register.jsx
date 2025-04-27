import React, { useState } from 'react';
import { registerUser } from '../api/auth';

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '', username: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert('Usuario registrado correctamente');
      setForm({ email: '', password: '', username: '' });
    } catch (error) {
      alert('Error al registrarse');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Cuenta</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
