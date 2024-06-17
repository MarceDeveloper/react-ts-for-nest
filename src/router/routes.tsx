import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSesionStore } from '../store/useSesion';
import { useShallow } from 'zustand/react/shallow';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AboutPage } from '../pages/AboutPage';
import { CardsPage } from '../pages/CardsPage';
import { CRUDPage } from '../pages/CRUDPage';
import { Page_Sidebar2 } from '../pages/Page_Sidebar2';
import { LoginPage2 } from '../pages/Page_Login2';
import { Card_Cubo_Page } from '../pages/CardCuboPage';


export const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useSesionStore(useShallow((store) => store));

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="" element={<LoginPage2 />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Cards" element={<CardsPage />} />
          <Route path="/CrudPage" element={<CRUDPage />} />
          <Route path="/Page_Sidebar2" element={<Page_Sidebar2 />} />
          <Route path="/Card_Cubo_Page" element={<Card_Cubo_Page />} />

          
        </Route>
      </Routes>

    </Router>
  );
};

