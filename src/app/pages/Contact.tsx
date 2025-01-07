
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("Votre message a été envoyé avec succès !");
      } else {
        const errorResponse = await response.json();
        setFormStatus(`Erreur : ${errorResponse.message || "Veuillez réessayer."}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setFormStatus("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="contact-title">Contactez-moi</h2>
          <p className="contact-intro">
            Ensemble, transformons vos idées en projets réussis. Contactez-moi pour discuter de vos besoins.
          </p>
        </div>

        <div className="contact-main">
          <div className="contact-links">
            <a
              href="mailto:luca.lelaurain@gmail.com"
              className="contact-link"
              aria-label="Envoyer un email"
              role="button"
            >
              <FaEnvelope className="contact-icon" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/luca-lelaurain-051706156/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="LinkedIn"
              role="button"
            >
              <FaLinkedin className="contact-icon" /> LinkedIn
            </a>
            <a
              href="https://github.com/lucallrain"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="GitHub"
              role="button"
            >
              <FaGithub className="contact-icon" /> GitHub
            </a>
          
          </div>

          <form className="contact-form" onSubmit={handleFormSubmit}>
            <h3 className="form-title">Besoin de me joindre ?</h3>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Votre email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Votre message"
                rows={5}
                required
              />
            </div>
            <button type="submit" className="form-submit">
              Envoyer
            </button>
          </form>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;