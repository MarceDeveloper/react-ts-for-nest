// components/Sidebar2.tsx
import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useSesionStore } from '../store/useSesion';
import { useShallow } from 'zustand/react/shallow';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar2: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { clearSession } = useSesionStore(useShallow((store) => store))
  const navi = useNavigate()


  return (
    <div
      className={`z-10 sidebar h-screen bg-gray-800 text-white flex flex-col w-64 fixed md:sticky md:top-0 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
    >
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className="text-2xl font-bold">My App</h1>
      </div>
      <nav className="flex flex-col flex-1 p-4">

        <a onClick={() => { navi("/") }} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FiSettings />
          <span>Home</span>
        </a>

        <a onClick={() => { navi("/About") }} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FiSettings />
          <span>About</span>
        </a>
        <a onClick={() => { navi("/Cards") }} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FiSettings />
          <span>Cards</span>
        </a>
        <a onClick={() => { navi("/CrudPage") }} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FiSettings />
          <span>CrudPage</span>
        </a>
        <a onClick={() => { navi("/Card_Cubo_Page") }} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
          <FiSettings />
          <span>Card_Cubo_Page</span>
        </a>


        <button
          onClick={clearSession}
          className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded w-full text-left"
        >
          <FiLogOut />
          <span>Log Out</span>
        </button>
      </nav>
    </div>
  );
};
