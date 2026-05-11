import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-indigo-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-bold mb-6">Prêt à donner vie à votre projet ?</h2>
            <p className="text-indigo-100 text-lg mb-8">
              Discutons de vos objectifs et voyons comment nous pouvons vous aider à les atteindre.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-800 rounded-xl text-indigo-200">
                  <MapPin size={24} />
                </div>
                <span>Yaoundé, Cameroun</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-800 rounded-xl text-indigo-200">
                  <Mail size={24} />
                </div>
                <span>contact@vitrinepro.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-800 rounded-xl text-indigo-200">
                  <Phone size={24} />
                </div>
                <span>+237 600 000 000</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl text-gray-900">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Nom complet</label>
                <input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                <input type="email" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" placeholder="nom@exemple.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                <textarea className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition h-32" placeholder="Décrivez votre besoin..."></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 active:scale-95">
                Envoyer le message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;