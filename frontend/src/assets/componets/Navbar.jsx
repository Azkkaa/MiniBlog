import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CrosshairIcon } from '@phosphor-icons/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-500 font-medium";

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex items-center justify-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <CrosshairIcon size={32} className="inline-block mr-2 text-blue-600" />
              MiniBlog
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors`}>
              Dashboard
            </Link>
            <Link to="/post" className={`${isActive('/post')} transition-colors`}>
              Posts
            </Link>
            <Link to="/category" className={`${isActive('/category')} transition-colors`}>
              Categories
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link
              to="/" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base ${isActive('/')}`}
            >
              Dashboard
            </Link>
            <Link
              to="/posts" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base ${isActive('/posts')}`}
            >
              Posts
            </Link>
            <Link
              to="/categories" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base ${isActive('/categories')}`}
            >
              Categories
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;