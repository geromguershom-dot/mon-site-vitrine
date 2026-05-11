import React from 'react';
import { Globe, Palette, BarChart3 } from 'lucide-react';

const services = [
  {
    title: "Développement Web",
    desc: "Des sites ultra-rapides conçus avec React et les dernières technologies.",
    icon: <Globe className="w-10 h-10 text-indigo-600" />
  },
  {
    title: "Design UI/UX",
    desc: "Des interfaces intuitives qui captivent vos utilisateurs dès la première seconde.",
    icon: <Palette className="w-10 h-10 text-indigo-600" />
  },
  {
    title: "SEO & Performance",
    desc: "Optimisation complète pour apparaître en tête des résultats Google.",
    icon: <BarChart3 className="w-10 h-10 text-indigo-600" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous combinons design et technique pour créer des produits numériques qui marquent les esprits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform inline-block">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;