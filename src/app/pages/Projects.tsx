"use client";

import React from "react";
import Image from "next/image";

import ohMyFoodImg from "../assets/logos/OHMYFOOD.webp";
import quizzPokemonImg from "../assets/logos/PokemonQuizz.webp";
import ninaCarducciImg from "../assets/logos/NinaCarducci.webp";
import eventsImg from "../assets/logos/724Events.webp";
import kasaImg from "../assets/logos/Kasa.webp";

const projects = [
  {
    name: "Bubble",
    description: "Un jeu interactif basé sur la physique des bulles.",
    language: "JavaScript, HTML et CSS",
    codeUrl: "https://github.com/lucallrain/Bubble",
    liveUrl: "https://lucallrain.github.io/Bubble/",
    iframe: `<iframe src="https://lucallrain.github.io/Bubble/" frameborder="0" width="100%" height="400px"></iframe>`,
  },
  {
    name: "Oh My Food",
    description: "Application permettant de choisir un menu à l'avance dans des restaurants.",
    language: "HTML, SCSS et CSS",
    codeUrl: "https://github.com/lucallrain/P4_ohmyfood",
    liveUrl: "https://lucallrain.github.io/P4_ohmyfood/",
    image: ohMyFoodImg,
  },
  {
    name: "Quizz Pokémon",
    description: "Un quiz interactif pour tester vos connaissances sur les Pokémon.",
    language: "JavaScript",
    codeUrl: "https://github.com/lucallrain/quizz_pokemon",
    liveUrl: "https://lucallrain.github.io/P5.5_Pokemon/",
    image: quizzPokemonImg,
  },
  {
    name: "Nina Carducci",
    description: "Site vitrine pour une photographe professionnelle.",
    language: "HTML et CSS",
    codeUrl: "https://github.com/lucallrain/Nina-Carducci",
    liveUrl: "https://lucallrain.github.io/NinaCarducci/",
    image: ninaCarducciImg,
  },
  {
    name: "724 Events",
    description: "Plateforme pour gérer et promouvoir des événements.",
    language: "HTML, CSS et JavaScript",
    codeUrl: "https://github.com/lucallrain/724events",
    liveUrl: "https://projet9byluca.netlify.app/",
    image: eventsImg,
  },
  {
    name: "Kasa",
    description: "Application de location immobilière avec filtres avancés.",
    language: "React",
    codeUrl: "https://github.com/lucallrain/Kasa",
    liveUrl: "https://projetkasabyluca.netlify.app/",
    image: kasaImg,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="projects-title">Mes Projets</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.name}</h3>
              <div className="preview-wrapper">
                {project.iframe ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: project.iframe }}
                    className="project-iframe"
                  ></div>
                ) : (
                  project.image && (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={300}
                      height={300}
                      style={{ width: "auto", height: "auto" }}
                    />
                  )
                )}
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
