import axios from 'axios';
import { useSesionStore } from '../store/useSesion';

const apiClient = axios.create({
  baseURL: 'http://10.130.9.26:3000', // Reemplaza con la URL base de tu API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Agregar un interceptor para incluir el token en las solicitudes
apiClient.interceptors.request.use((config) => {
  const token = useSesionStore.getState().accessToken;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Agregar un interceptor para manejar la respuesta y refrescar el token si es necesario
apiClient.interceptors.response.use(
  (response) => {
    // Revisar si hay un token renovado en los encabezados de la respuesta
    const newToken = response.headers['x-renewed-token'];
    if (newToken) {
      useSesionStore.getState().setAccessToken(newToken);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
