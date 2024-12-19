"use client";

import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <a href="#hero" className={`top-logo ${isScrolled ? "scrolled-logo" : ""}`}>
        {!isScrolled ? (
          <span className="word">
            {"Luca".split("").map((letter, index) => (
              <span key={index} className="letter">
                {letter}
              </span>
            ))}
          </span>
        ) : (
          <span className="short-logo">LL</span>
        )}
        {!isScrolled && (
          <>
            <span className="space"></span>
            <span className="word">
              {"Lelaurain".split("").map((letter, index) => (
                <span key={index} className="letter">
                  {letter}
                </span>
              ))}
            </span>
          </>
        )}
      </a>

      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="#hero">Accueil</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#projets">Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
