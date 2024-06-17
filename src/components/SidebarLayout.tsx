// components/SidebarLayout.tsx
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Sidebar2 } from './Sidebar2';

interface SidebarLayoutProps {
  children: React.ReactNode;
  margen?:string
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children , margen = "p-6" }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const sidebar = document.querySelector('.sidebar');
    const navbar = document.querySelector('.navbar');
    if (sidebar && navbar && !sidebar.contains(event.target as Node) && !navbar.contains(event.target as Node)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex">
      <Sidebar2 isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className={`flex-1 ${margen} ${isSidebarOpen ? 'md:ml-64' : ''}`}>
        <div className="navbar md:hidden fixed top-0 left-0 right-0 flex items-center p-4 bg-gray-800 z-10">
          <button onClick={toggleSidebar}>
            <FaBars className="text-white text-2xl" />
          </button>
        </div>
        <div className="mt-16 md:mt-0">
          {children}
        </div>
      </div>
    </div>
  );
};

