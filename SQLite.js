import cors from "cors"; // Importer le middleware cors
import express from "express";
import sqlite3 from "sqlite3";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Configurer CORS
app.use(cors({ origin: "http://localhost:3000" }));

// Middleware pour parser le JSON
app.use(express.json());

// Exemple de route
app.post("/save-message", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  const db = new sqlite3.Database("./messages.db");
  const query = `
    INSERT INTO messages (name, email, message, date)
    VALUES (?, ?, ?, ?)
  `;
  const params = [name, email, message, new Date().toISOString()];

  db.run(query, params, (err) => {
    if (err) {
      console.error("Erreur lors de l'insertion :", err);
      return res.status(500).json({ message: "Erreur lors de la sauvegarde du message." });
    }

    res.status(200).json({ message: "Message sauvegardé avec succès !" });
  });
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
