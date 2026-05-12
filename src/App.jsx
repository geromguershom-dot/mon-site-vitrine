import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Section Accueil */}
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
                Nama Nkoa Guershom vous accompagne dans la création de sites web modernes, rapides et optimisés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-gray-800 text-center transition shadow-xl">
                  Lancer mon projet
                </a>
                <a href="#projects" className="border-2 border-gray-200 px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 text-center transition">
                  Voir mes travaux
                </a>
              </div>
            </div>
          </section>
        </div>

        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;