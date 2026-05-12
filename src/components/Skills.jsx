import React from 'react';

const Skills = () => {
  const skills = [
    { name: "Frontend", tools: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Vite"] },
    { name: "Backend", tools: ["Node.js", "Firebase", "MongoDB"] },
    { name: "Outils", tools: ["Git", "GitHub", "Vercel", "Postman"] }
  ];

  return (
    <section id="skills" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-16 text-center">Mes Compétences Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-indigo-100 hover:border-indigo-400 transition-all">
              <h3 className="text-2xl font-bold text-indigo-600 mb-6">{skill.name}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;