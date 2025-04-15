import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUser({ email: payload.sub, role: payload.role });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    const payload = JSON.parse(atob(token.split('.')[1]));
    setUser({ email: payload.sub, role: payload.role });

    if (payload.role === 'ADMIN') {
      navigate('/admin');
    } else {
      navigate('/user');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
