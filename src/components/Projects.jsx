import React from 'react';

const Projects = () => {
  const myProjects = [
    {
      title: "Gestion de Médicaments",
      description: "Application pour seniors réalisée entre nov. 2025 et mars 2026.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800",
      tech: ["React", "Tailwind"]
    },
    {
      title: "Réseau Social",
      description: "Plateforme interactive avec système d'authentification.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
      tech: ["React", "Node.js"]
    }
  ];

  return (
    <section id="projects" className="pt-24 pb-20 bg-gray-50"> {/* pt-24 pour compenser la navbar fixe */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Mes Réalisations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {myProjects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
              <img src={p.image} className="w-full h-52 object-cover group-hover:scale-105 transition duration-500" alt={p.title} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <div className="flex gap-2">
                  {p.tech.map((t, index) => <span key={index} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;