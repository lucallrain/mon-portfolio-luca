'use client';

import React from 'react';

type Project = {
  name: string;
  description: string;
  language: string;
  codeUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    name: 'Bubble',
    description: 'Un jeu interactif basé sur la physique des bulles.',
    language: 'JavaScript HTML et CSS',
    codeUrl: 'https://github.com/lucallrain/Bubble',
    liveUrl: 'https://lucallrain.github.io/Bubble/',
  },
  {
    name: 'Oh My Food',
    description: "Choix à l'avance deu menu et des plats dans des restaurants",
    language: 'HTML, SCSS et CSS',
    codeUrl: 'https://github.com/lucallrain/P4_ohmyfood',
    liveUrl: 'https://lucallrain.github.io/P4_ohmyfood/',
  },
  {
    name: 'Quizz Pokémon',
    description: 'Deviner le nom du pokémon affiché',
    language: 'HTML, JavaScript et CSS',
    codeUrl: 'https://github.com/lucallrain/P5.5_Pokemon',
    liveUrl: 'https://lucallrain.github.io/P5.5_Pokemon/',
  },
  {
    name: 'NinaCarducci',
    description: 'PortFolio de photographe avec optimisation du SEO naturel',
    language: 'HTML, JavaScript et CSS',
    codeUrl: 'https://github.com/lucallrain/NinaCarducci',
    liveUrl: 'https://lucallrain.github.io/NinaCarducci/',
  },
  {
    name: '724events',
    description: 'Vitrine pour une société spécialisée dans les soirées évenementiels',
    language: 'React, JavaScript, SCSS, HTML et CSS',
    codeUrl: 'https://github.com/lucallrain/P9_724Events',
    liveUrl: 'https://projet9byluca.netlify.app/',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="projects-title">Mes Projets</h2>
        <div className="projects-grid">
  {projects.map((project, index) => (
    <div
      key={index}
      className={`project-card ${index < 2 ? "project-card-large" : ""}`}
    >
      <h3 className="project-title">{project.name}</h3>
      <div className="iframe-wrapper">
        <iframe
          src={project.liveUrl}
          title={`Preview of ${project.name}`}
          className="project-preview"
          sandbox="allow-same-origin allow-scripts allow-popups"
        ></iframe>
      </div>
      <p className="project-description">{project.description}</p>
      <p className="project-language">Langage : {project.language}</p>
      <div className="project-links">
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Code Source
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Voir le site
        </a>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Projects;
