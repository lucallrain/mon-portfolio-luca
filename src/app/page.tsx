"use client";

import React from "react";
import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import About from "../app/pages/About";
import Projects from "../app/pages/Projects";
import Contact from "../app/pages/Contact"; // Assurez-vous que l'import pointe bien vers la bonne localisation

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero" className="section">
        <Hero />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </main>
  );
}
