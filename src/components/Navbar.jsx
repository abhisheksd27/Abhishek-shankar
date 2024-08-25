import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header flex items-center justify-between px-4 py-4 bg-transparent relative">
      {/* Logo on the left side */}
      <NavLink to="/" className="flex items-center justify-center w-20 h-10 rounded-lg bg-white font-bold shadow-md">
        <p className='blue-gradient_text text-3xl sm:text-4xl md:text-5xl'>AS</p>
      </NavLink>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden p-2 text-gray-800"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Navigation links */}
      <nav className={`lg:flex lg:items-center lg:justify-end gap-4 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center justify-center w-20 h-10 rounded-full text-xs sm:text-sm md:text-base lg:text-lg transition-transform duration-500 hover:scale-105 hover:shadow-lg ${
              isActive ? 'text-blue-500' : 'text-black'
            }`
          }
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transform: 'translateZ(0)',
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center justify-center w-20 h-10 rounded-full text-xs sm:text-sm md:text-base lg:text-lg transition-transform duration-500 hover:scale-105 hover:shadow-lg ${
              isActive ? 'text-blue-500' : 'text-black'
            }`
          }
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transform: 'translateZ(0)',
          }}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center justify-center w-20 h-10 rounded-full text-xs sm:text-sm md:text-base lg:text-lg transition-transform duration-500 hover:scale-105 hover:shadow-lg ${
              isActive ? 'text-blue-500' : 'text-black'
            }`
          }
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transform: 'translateZ(0)',
          }}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
