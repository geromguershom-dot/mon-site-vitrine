import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Gestion de Médicaments",
      desc: "App React pour seniors (Nov 2025 - Mars 2026).",
      img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800",
      tags: ["React", "Firebase"]
    },
    {
      title: "Réseau Social",
      desc: "Plateforme interactive moderne.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
      tags: ["Node.js", "Tailwind"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Mes Réalisations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xl group hover:-translate-y-2 transition-transform duration-300">
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-500 mb-6">{p.desc}</p>
                <div className="flex gap-3">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-bold">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;