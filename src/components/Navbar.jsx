import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-indigo-600">
          VITRINE<span className="text-gray-900">PRO</span>
        </div>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#accueil" className="hover:text-indigo-600 transition">Accueil</a>
          <a href="#services" className="hover:text-indigo-600 transition">Services</a>
          <a href="#portfolio" className="hover:text-indigo-600 transition">Réalisations</a>
          <a href="#contact" className="bg-indigo-600 text-white px-6 py-2.5 rounded-full hover:bg-indigo-700 transition shadow-md">
            Contact
          </a>
        </div>

        {/* Bouton Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Déroulant */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-6 flex flex-col gap-4 font-medium shadow-xl">
          <a href="#accueil" className="py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="#services" className="py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portfolio" className="py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Réalisations</a>
          <a href="#contact" className="py-2 text-indigo-600 font-bold" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;