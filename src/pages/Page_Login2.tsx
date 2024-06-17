import React from 'react';
import { useForm } from 'react-hook-form';
import { useSesionStore } from '../store/useSesion';
import { useShallow } from 'zustand/react/shallow';
import { useAuthMutations } from '../hooks/mutations/use_auth_mutation';
import { FiUser, FiLock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './LoginPage.css'; // Importar el archivo CSS con variables de color

export const LoginPage2: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const { setSession, clearSession, isAuthenticated } = useSesionStore(useShallow((store) => store));
  const { loginMutation } = useAuthMutations();

  const onSubmit = async (data: any) => {
    const res = await loginMutation.mutateAsync(data, {
      onSuccess: (data) => {
        setSession(data.access_token, data.data_sesion);
      },
      onError: (error: any) => {
        console.log(error?.response?.data?.message);
      }
    });
  };

  return (
    <div className="login-page min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190628/ourmid/pngtree-banner-technology-gradient-geometric-stereo-background-image_277350.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <motion.div
        className="relative neon-border bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-2xl max-w-md w-full border border-gray-300"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            <input
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white placeholder-gray-300"
              {...register('username')}
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            <input
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white placeholder-gray-300"
              type="password"
              {...register('password')}
              placeholder="Contraseña"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-white">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2">Recordar</span>
            </label>
            <a href="#" className="text-white">Olvidé la contraseña</a>
          </div>
          <button
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition duration-200"
            type="submit"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? 'Accediendo...' : 'Acceder'}
          </button>
          {loginMutation.isError && (
            <div className="text-red-500 mt-2 text-center">Error en el inicio de sesión. Por favor, inténtelo de nuevo.</div>
          )}
        </form>
        <div className="mt-4 text-center">
          <span className="text-white">No tengo cuenta </span>
          <a href="#" className="text-blue-400 font-semibold">Crear una</a>
        </div>
      </motion.div>
    </div>
  );
};
