import React from 'react';
import { LineChartComponent } from '../components/LineChartComponent';
import { BarChartComponent } from '../components/BarChartComponent';
import { Sidebar } from '../components/Sidebar';
import { SidebarLayout } from '../components/SidebarLayout';

export const HomePage: React.FC = () => {
  return (
    <SidebarLayout margen='p-0'>
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg h-64">
            <LineChartComponent />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-64">
            <BarChartComponent />
          </div>
          {/* Añadir más widgets o gráficos según sea necesario */}
        </div>
      </div>
    </SidebarLayout>
  );
};
