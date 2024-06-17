import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AppRoutes } from './router/routes';

const App: React.FC = () => {

  

  return (
    <div className="w-full mx-auto ">
      <AppRoutes/>
    </div>
  );
};

export default App;
