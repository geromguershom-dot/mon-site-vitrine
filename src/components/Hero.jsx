import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Texte à gauche */}
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
          <span className="uppercase tracking-loose w-full text-blue-600 font-bold">Nouveau standard</span>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Propulsez votre <span className="text-blue-600">Vision Digitale</span>
          </h1>
          <p className="leading-normal text-2xl mb-8 text-gray-700">
            Nous transformons vos idées complexes en interfaces fluides et performantes.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white font-bold rounded-full py-4 px-8 shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
              Voir nos projets
            </button>
            <button className="bg-transparent border border-blue-600 text-blue-600 font-bold rounded-full py-4 px-8 hover:bg-blue-50 transition">
              Nous contacter
            </button>
          </div>
        </div>

        {/* Visuel à droite */}
        <div className="w-full md:w-1/2 py-6 text-center">
           {/* Ici tu pourras mettre une illustration ou un mockup */}
           <div className="relative inline-block">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img className="relative w-full z-10" src="https://illustrations.popsy.co/blue/web-design.svg" alt="Illustration" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;