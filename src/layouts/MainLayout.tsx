import React, { useState } from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-700 p-4 transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:w-64`}
      >
        <button
          className="text-white mb-4 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          Close
        </button>
        <ul className="text-white">
          <li className="mb-4">
            <a href="/dashboard" className="block px-4 py-2 hover:bg-blue-800 rounded">
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="/trips" className="block px-4 py-2 hover:bg-blue-800 rounded">
              Trips
            </a>
          </li>
          <li className="mb-4">
            <a href="/admin" className="block px-4 py-2 hover:bg-blue-800 rounded">
              Admin Panel
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 ml-0 md:ml-64 p-4">
        <button
          className="md:hidden bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
