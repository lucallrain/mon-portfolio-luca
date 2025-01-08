import sqlite3 from "sqlite3";

exports.handler = async (event) => {
  // Initialisez la base de données SQLite
  const db = new sqlite3.Database("./messages.db");
  const body = JSON.parse(event.body);

  // Vérifiez les champs
  if (!body.name || !body.email || !body.message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Tous les champs sont requis." }),
    };
  }

  const query = `
    INSERT INTO messages (name, email, message, date)
    VALUES (?, ?, ?, ?)
  `;
  const params = [body.name, body.email, body.message, new Date().toISOString()];

  // Insérez les données dans la base de données
  return new Promise((resolve, reject) => {
    db.run(query, params, (err) => {
      if (err) {
        console.error("Erreur lors de l'insertion :", err);
        reject({
          statusCode: 500,
          body: JSON.stringify({ message: "Erreur lors de la sauvegarde du message." }),
        });
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ message: "Message sauvegardé avec succès !" }),
        });
      }
    });
  });
};
