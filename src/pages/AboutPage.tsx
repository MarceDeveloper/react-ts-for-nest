import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { SidebarLayout } from '../components/SidebarLayout';

export const AboutPage: React.FC = () => {
  return (
    <SidebarLayout margen='p-0'>
        <div className="flex-1 bg-gray-100 p-6 ">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to our application! This platform is designed to provide the best user experience. 
            Here you can find various features and tools to help you manage your tasks efficiently.
          </p>
          <p className="text-lg mb-4">
            Our team is dedicated to continuously improving the application and adding new features to meet your needs.
            Thank you for choosing our platform!
          </p>
          <p className="text-lg">
            If you have any questions or feedback, feel free to contact us at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
          </p>
        </div>
      </div>
    </SidebarLayout>
  );
};
