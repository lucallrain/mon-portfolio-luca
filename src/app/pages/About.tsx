"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "../styles/globals.css";

type Technology = {
  src: string;
  alt: string;
  link: string;
};

import html5Logo from "../../assets/logos/html5.svg";
import css3Logo from "../../assets/logos/css3.svg";
import jsLogo from "../../assets/logos/javascript.png";
import reactLogo from "../../assets/logos/react.svg";
import nodejsLogo from "../../assets/logos/nodejs.svg";
import phpLogo from "../../assets/logos/php.svg";
import pythonLogo from "../../assets/logos/python.svg";
import tailwindLogo from "../../assets/logos/tailwind.svg";
import mongodbLogo from "../../assets/logos/mongodb.svg";
import typescriptLogo from "../../assets/logos/typescript.svg";
import nextjsLogo from "../../assets/logos/nextjs.svg";

const technologies: Technology[] = [
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

// Helper function to colorize text
const colorizeText = (text: string, coloredIndices: Set<number>) => {
  return text.split("").map((char, index) => (
    <span
      key={index}
      style={{
        color: coloredIndices.has(index) ? "#006400" : "inherit",
        fontWeight: coloredIndices.has(index) ? "bold" : "normal",
      }}
    >
      {char}
    </span>
  ));
};

const About: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [coloredIndices, setColoredIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Generate a random set of indices to colorize letters
    const indices = new Set<number>();
    const textLength = 200; // Approximate total length of text
    for (let i = 0; i < Math.floor(textLength * 0.2); i++) {
      indices.add(Math.floor(Math.random() * textLength));
    }
    setColoredIndices(indices);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isMouseDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="about-title">À propos de moi</h2>
        <p className="about-description fade-in">
          {colorizeText(
            "Salut ! Je suis un développeur passionné par le monde du web. Mon truc, c’est de transformer des idées en projets captivants et fonctionnels.",
            coloredIndices
          )}
        </p>
        <p className="about-description fade-in fade-in-delay-1">
          {colorizeText(
            "Mon expertise inclut des technologies modernes comme React, Next.js, et bien d’autres. J’aime explorer des designs innovants et résoudre des défis techniques complexes.",
            coloredIndices
          )}
        </p>
        <p className="about-description fade-in fade-in-delay-2">
          {colorizeText(
            "En dehors du code, j’adore lire, découvrir de nouveaux outils, et améliorer mes compétences en continu. Collaborons pour transformer vos idées en réalités numériques !",
            coloredIndices
          )}
        </p>
        <div className="scroll-container" ref={scrollContainerRef}>
          {technologies.map((tech, index) => (
            <a key={index} href={tech.link} target="_blank" rel="noopener noreferrer">
              <div className="scroll-item" data-alt={tech.alt}>
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={200}
                  height={200}
                  priority={index === 0} // Priorité à la première image
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
