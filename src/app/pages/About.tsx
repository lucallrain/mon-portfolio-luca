"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import html5Logo from "../assets/logos/html5.svg";
import css3Logo from "../assets/logos/css3.svg";
import jsLogo from "../assets/logos/javascript.svg";
import reactLogo from "../assets/logos/react.svg";
import nodejsLogo from "../assets/logos/nodejs.svg";
import phpLogo from "../assets/logos/php.svg";
import pythonLogo from "../assets/logos/python.svg";
import tailwindLogo from "../assets/logos/tailwind.svg";
import mongodbLogo from "../assets/logos/mongodb.svg";
import typescriptLogo from "../assets/logos/typescript.svg";
import nextjsLogo from "../assets/logos/nextjs.svg";

const technologies = [
  { src: html5Logo, alt: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { src: css3Logo, alt: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { src: jsLogo, alt: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { src: reactLogo, alt: "React", link: "https://reactjs.org/" },
  { src: nodejsLogo, alt: "Node.js", link: "https://nodejs.org/" },
  { src: phpLogo, alt: "PHP", link: "https://www.php.net/" },
  { src: pythonLogo, alt: "Python", link: "https://www.python.org/" },
  { src: tailwindLogo, alt: "Tailwind CSS", link: "https://tailwindcss.com/" },
  { src: mongodbLogo, alt: "MongoDB", link: "https://www.mongodb.com/" },
  { src: typescriptLogo, alt: "TypeScript", link: "https://www.typescriptlang.org/" },
  { src: nextjsLogo, alt: "NextJS", link: "https://nextjs.org/" },
];

const About: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="about-title">À propos de moi</h2>
        <p className="about-description">
          Salut ! Je suis Luca Lelaurain, un développeur passionné par le monde du web. Je veux concevoir des sites web intuitifs, fonctionnels et attractifs, avec une attention particulière portée au design et optimiser le parcours utilisateur.
        </p>
        <p className="about-description">
          Spécialisé dans le développement front-end, je maîtrise une variété de technologies modernes comme React, Tailwind CSS, et Next.js. Je dispose également de solides bases en back-end, ce qui me permet de travailler sur des projets full-stack lorsque nécessaire.
        </p>
        <p className="about-description">
          Mon objectif principal est de transformer vos idées en des projets uniques, tout en assurant un SEO optimal pour une meilleure visibilité en ligne. Chaque projet est pour moi une opportunité  pour explorer de nouvelles approches et de repousser les limites de la créativité.
        </p>
        <div className="carousel-container">
          <button className="carousel-button left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
          <div className="scroll-container" ref={scrollContainerRef}>
            {technologies.map((tech, index) => (
              <a key={index} href={tech.link} target="_blank" rel="noopener noreferrer">
                <div className="scroll-item">
                  <Image src={tech.src} alt={tech.alt} width={100} height={100} />
                  <div className="language-label">{tech.alt}</div>
                </div>
              </a>
            ))}
          </div>
          <button className="carousel-button right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
