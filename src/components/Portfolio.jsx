import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: "Gestion Médicaments", desc: "Projet 2025-2026 pour seniors.", img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800" },
    { title: "Réseau Social", desc: "Projet full-stack en cours.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg">
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-500 mb-6">{p.desc}</p>
                <a href="https://github.com/gerom-guershom" className="text-indigo-600 font-bold hover:underline">Voir sur GitHub →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;