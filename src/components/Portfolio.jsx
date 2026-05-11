import React from 'react';

const projets = [
  {
    title: "Application E-santé",
    category: "Développement Web",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    tags: ["React", "Node.js", "Tailwind"]
  },
  {
    title: "Dashboard Analytique",
    category: "Interface UI/UX",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    tags: ["Figma", "React", "Chart.js"]
  },
  {
    title: "Social Connect",
    category: "Réseau Social",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    tags: ["Fullstack", "Socket.io", "Vite"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
            <p className="text-gray-600">
              Découvrez comment nous aidons nos clients à transformer leurs idées en succès commerciaux.
            </p>
          </div>
          <button className="text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1 hover:text-indigo-800 transition">
            Voir tous les projets
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projets.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-6 shadow-lg">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex gap-2 mb-3">
                {p.tags.map((tag, index) => (
                  <span key={index} className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition">
                {p.title}
              </h3>
              <p className="text-gray-500">{p.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;