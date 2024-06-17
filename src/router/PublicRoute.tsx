import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSesionStore } from '../store/useSesion';

export const PublicRoute: React.FC = () => {
  const token = useSesionStore((state) => state.isAuthenticated);
  
  return !token ? <Outlet /> : <Navigate to="/" />;
};
