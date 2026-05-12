import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projets", href: "#projects" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#accueil" className="text-2xl font-extrabold text-indigo-600">
          NAMA<span className="text-gray-900">.DEV</span>
        </a>
        
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-indigo-600 font-semibold text-sm uppercase tracking-wider transition">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition shadow-lg font-bold">
            Me contacter
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-900">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t p-6 space-y-4 shadow-xl`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-xl font-bold text-gray-800">
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;