import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setFormStatus("Tous les champs sont requis.");
      return false;
    }

    if (!email.match(emailRegex)) {
      setFormStatus("Veuillez entrer une adresse email valide.");
      return false;
    }

    return true;
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      );

      setFormStatus("Votre message a été envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
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
            >
              <FaEnvelope className="contact-icon" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/luca-lelaurain-051706156/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="contact-icon" /> LinkedIn
            </a>
            <a
              href="https://github.com/lucallrain"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="GitHub"
            >
              <FaGithub className="contact-icon" /> GitHub
            </a>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <h3 className="form-title">Besoin de me joindre ?</h3>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Votre nom"
                aria-label="Nom"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Votre email"
                aria-label="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Votre message"
                rows={5}
                aria-label="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="form-submit">Envoyer</button>
          </form>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
