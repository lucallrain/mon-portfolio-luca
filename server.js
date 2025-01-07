import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sgMail from "@sendgrid/mail";

// Charger les variables d'environnement depuis .env.local
dotenv.config({ path: ".env.local" });

// Configurer SendGrid avec la clé API
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();

// Configuration de CORS
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Route pour envoyer un email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validation des données
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  // Configuration de l'email à envoyer
  const msg = {
    to: "luca.lelaurain@gmail.com", // Adresse de destination
    from: "luca.lelaurain@gmail.com", // Remplacez par une adresse vérifiée
    subject: `Nouveau message de ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\nMessage:\n\n${message}`,
    html: `<strong>Nom:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Message:</strong><br>${message}`,
  };
  

  try {
    // Envoi de l'email avec SendGrid
    await sgMail.send(msg);
    res.status(200).json({ message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur SendGrid :", error.response?.body || error.message);
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
  }
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
