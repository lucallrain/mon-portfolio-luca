import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import About from "../app/components/About";

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
        <div className="projects-content">
          <h2 className="text-4xl font-bold">Mes projets</h2>
          <p className="text-lg mt-4 leading-relaxed">
            Découvrez mes projets et réalisations ici.
          </p>
        </div>
      </section>
      <section id="contact" className="section">
        <div className="contact-content">
          <h2 className="text-4xl font-bold">Contactez-moi</h2>
          <p className="text-lg mt-4 leading-relaxed">
            Vous pouvez me joindre via email ou sur mes réseaux sociaux.
          </p>
        </div>
      </section>
    </main>
  );
}
