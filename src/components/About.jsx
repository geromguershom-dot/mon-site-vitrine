import React from 'react';
// L'importation simplifiée et corrigée
import profilePic from '../assets/moi.jpg'; 

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Ta photo officielle */}
        <div className="md:w-1/3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25"></div>
            <img 
              src={profilePic} 
              alt="Nama Nkoa Guershom" 
              className="relative rounded-2xl shadow-2xl h-[450px] w-full object-cover object-top border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Ton texte de présentation personnalisé */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 underline decoration-indigo-600 decoration-4 underline-offset-8">
            À propos de moi
          </h2>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Je suis <span className="font-bold text-indigo-600">Nama Nkoa Guershom</span>. Développeur web en fin de formation (2025-2026), j'aime transformer des idées en solutions concrètes.
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed">
            De la gestion de médicaments pour seniors à la création de réseaux sociaux sous React, mon parcours est guidé par l'apprentissage constant et la rigueur technique.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition shadow-lg">
              Mon CV (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;