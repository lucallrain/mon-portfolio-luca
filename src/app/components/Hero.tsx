"use client";

import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className={`hero-content ${isVisible ? "animate-visible" : ""}`}>
        <h1 className="hero-title">Bienvenue sur mon portfolio</h1>
        <p className="hero-subtitle">
          Développeur/Intégrateur web passionné par le design et spécialisé dans
          le parcours client et SEO.
        </p>
        <a href="#about" className="hero-cta">
          Qui suis-je ?
        </a>
      </div>
    </section>
  );
};

export default Hero;
