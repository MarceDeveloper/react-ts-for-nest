import React, { useState, useEffect } from 'react';
import { FiHome, FiUser, FiSettings, FiLogOut, FiChevronDown, FiChevronUp, FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useSesionStore } from '../store/useSesion';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const navi =  useNavigate()
  const { clearSession } = useSesionStore(useShallow((store) => store));
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Check the initial window width and set the sidebar state accordingly
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize(); // Set the initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Botón de menú para dispositivos móviles */}
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded focus:outline-none"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FiMenu size={24} />
      </button>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-6 space-y-6 z-20 lg:relative lg:translate-x-0 lg:h-auto lg:flex lg:flex-col lg:w-64 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:block`}
        // initial={{ x: '-100%' }}
        // animate={{ x: isSidebarOpen ? '0%' : '-100%' }}
        // exit={{ x: '-100%' }}
        // transition={{ duration: 0.3 }}
      >
        <div className="text-2xl font-bold mb-8">Dashboard</div>
        <nav className="space-y-2">
          <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FiHome />
            <span>Home</span>
          </a>
          <div className="flex flex-col">
            <button
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded focus:outline-none"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <span className="flex items-center space-x-2">
                <FiUser />
                <span>Profile</span>
              </span>
              {isProfileMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <AnimatePresence>
              {isProfileMenuOpen && (
                <motion.div
                  className="ml-6 mt-2 space-y-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#" className="block p-2 hover:bg-gray-700 rounded">View Profile</a>
                  <a href="#" className="block p-2 hover:bg-gray-700 rounded">Edit Profile</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FiSettings />
            <span>Settings</span>
          </a>
          <a onClick={()=>{navi("/About")}} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FiSettings />
            <span>About</span>
          </a>.
          <a onClick={()=>{navi("/Cards")}} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FiSettings />
            <span>Cards</span>
          </a>
          <a onClick={()=>{navi("/CrudPage")}} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FiSettings />
            <span>CrudPage</span>
          </a>
          <a onClick={()=>{navi("/Page_Sidebar2")}} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <FiSettings />
            <span>Page_Sidebar2</span>
          </a>
          
          <button
            onClick={clearSession}
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded w-full text-left"
          >
            <FiLogOut />
            <span>Log Out</span>
          </button>
          
        </nav>
      </motion.div>
    </>
  );
};
