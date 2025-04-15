import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from '../pages/UserDashboard';
import ProtectedRoute from '../components/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={
        <ProtectedRoute allowedRole="ADMIN">
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="/user" element={
        <ProtectedRoute allowedRole="USER">
          <UserDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
}