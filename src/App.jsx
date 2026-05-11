import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* On définit l'ID accueil ici pour le haut de page */}
        <div id="accueil" className="pt-32">
          <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-6">
                Créez une présence <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                  Digitale d'exception
                </span>
              </h1>
              <p className="text-xl text-gray-500 mb-10 max-w-lg">
                Nous accompagnons les entreprises ambitieuses dans la création de sites web modernes, rapides et optimisés pour la conversion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-gray-800 text-center transition shadow-xl">
                  Lancer mon projet
                </a>
                <a href="#services" className="border-2 border-gray-200 px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 text-center transition">
                  Voir nos services
                </a>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-tr from-indigo-50 to-white p-8 rounded-3xl border border-gray-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Business Analytics" 
                  className="rounded-xl shadow-inner"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Les composants avec leurs ID internes */}
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;