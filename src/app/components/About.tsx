"use client";

import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiGraphql, SiPython, SiDjango, SiMysql, SiFigma } from "react-icons/si";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="about-title">À propos de moi</h2>
        <p className="about-description">
          Bonjour, je suis Luca Lelaurain, développeur et intégrateur web spécialisé dans le front-end avec une passion pour le design et l&apos;expérience utilisateur. Avec des compétences solides en back-end, je me concentre sur la création de sites web qui sont à la fois attractifs, intuitifs et optimisés pour le SEO.
        </p>
        <p className="about-description">
          Basé dans le département 66, je travaille à distance ou sur site pour collaborer sur des projets uniques qui répondent aux attentes de mes clients.
        </p>
        <p className="about-description">
          <strong>Mes compétences :</strong>
        </p>
        <div className="skills-grid grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          <div className="skill flex flex-col items-center">
            <FaHtml5 className="skill-icon text-red-500 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">HTML</p>
          </div>
          <div className="skill flex flex-col items-center">
            <FaCss3Alt className="skill-icon text-blue-500 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">CSS</p>
          </div>
          <div className="skill flex flex-col items-center">
            <FaJs className="skill-icon text-yellow-500 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">JavaScript</p>
          </div>
          <div className="skill flex flex-col items-center">
            <FaReact className="skill-icon text-blue-400 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">React</p>
          </div>
          <div className="skill flex flex-col items-center">
            <SiNextdotjs className="skill-icon text-black text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">Next.js</p>
          </div>
          <div className="skill flex flex-col items-center">
            <SiTailwindcss className="skill-icon text-teal-400 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">Tailwind CSS</p>
          </div>
          <div className="skill flex flex-col items-center">
            <FaNodeJs className="skill-icon text-green-500 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">Node.js</p>
          </div>
          <div className="skill flex flex-col items-center">
            <SiMongodb className="skill-icon text-green-600 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">MongoDB</p>
          </div>
          <div className="skill flex flex-col items-center">
            <SiTypescript className="skill-icon text-blue-600 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">TypeScript</p>
          </div>
          <div className="skill flex flex-col items-center">
            <SiGraphql className="skill-icon text-pink-500 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">GraphQL</p>
          </div>
          <div className="skill flex flex-col items-center">
            <SiPython className="skill-icon text-blue-300 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">Python</p>
          </div>
          <div className="skill flex flex-col items-center">
            <SiDjango className="skill-icon text-green-700 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">Django</p>
          </div>
          <div className="skill flex flex-col items-center">
            <SiMysql className="skill-icon text-blue-500 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">MySQL</p>
          </div>
          <div className="skill flex flex-col items-center">
            <FaPhp className="skill-icon text-indigo-600 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">PHP</p>
          </div>
          <div className="skill flex flex-col items-center">
            <FaWordpress className="skill-icon text-blue-600 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">WordPress</p>
          </div>
          <div className="skill flex flex-col items-center">
            <SiFigma className="skill-icon text-orange-500 text-5xl hover:scale-110 transition-transform" />
            <p className="mt-2 font-semibold">Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
