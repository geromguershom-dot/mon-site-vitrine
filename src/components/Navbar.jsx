import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#accueil" className="text-2xl font-extrabold text-indigo-600">
          NAMA<span className="text-gray-900">.DEV</span>
        </a>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#services" className="text-gray-600 hover:text-indigo-600 font-semibold transition">Services</a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600 font-semibold transition">Projets</a>
          <a href="#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
            Me contacter
          </a>
        </div>

        {/* Bouton Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t p-6 space-y-4 shadow-xl`}>
        <a href="#services" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-700">Services</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-700">Projets</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-indigo-600">Me contacter</a>
      </div>
    </nav>
  );
};

export default Navbar;