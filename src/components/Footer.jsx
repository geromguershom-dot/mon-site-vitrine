import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-black text-indigo-600 mb-4">VITRINEPRO</div>
            <p className="text-gray-500">Expert en solutions digitales sur mesure.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li className="hover:text-indigo-600 cursor-pointer">Développement Web</li>
              <li className="hover:text-indigo-600 cursor-pointer">Design UI/UX</li>
              <li className="hover:text-indigo-600 cursor-pointer">Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Entreprise</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li className="hover:text-indigo-600 cursor-pointer">À propos</li>
              <li className="hover:text-indigo-600 cursor-pointer">Réalisations</li>
              <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input type="text" className="bg-white border border-gray-200 p-2 rounded-lg text-sm outline-none w-full" placeholder="Votre email" />
              <button className="bg-gray-900 text-white px-4 rounded-lg text-sm">OK</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-xs">
          <p>© 2026 VITRINEPRO. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Mentions légales</span>
            <span>Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;