"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
  <div className="hero-content">
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