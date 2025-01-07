"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faDiagramProject,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 580);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <a href="#hero" className={`top-logo ${isScrolled ? "scrolled-logo" : ""}`}>
        {isSmallScreen ? (
          <span className="short-logo">LL</span>
        ) : (
          <span className="full-logo">
            <span className="word">
              {"Luca".split("").map((letter, index) => (
                <span
                  key={index}
                  className="letter falling-letter"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
            <span className="space"></span>
            <span className="word">
              {"Lelaurain".split("").map((letter, index) => (
                <span
                  key={index}
                  className="letter falling-letter"
                  style={{ animationDelay: `${(index + 4) * 0.2}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </span>
        )}
      </a>

      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <ul className="nav-links">
          {isSmallScreen ? (
            <>
              <li>
                <a href="#hero" aria-label="Accueil">
                  <FontAwesomeIcon icon={faHouse} className="icon" />
                </a>
              </li>
              <li>
                <a href="#about" aria-label="À propos">
                  <FontAwesomeIcon icon={faCircleInfo} className="icon" />
                </a>
              </li>
              <li>
                <a href="#projects" aria-label="Projets">
                  <FontAwesomeIcon icon={faDiagramProject} className="icon" />
                </a>
              </li>
              <li>
                <a href="#contact" aria-label="Contact">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="#hero">Accueil</a>
              </li>
              <li>
                <a href="#about">À propos</a>
              </li>
              <li>
                <a href="#projects">Projets</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
