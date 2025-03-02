const db = require("../config/db");

// Subscribe to the newsletter
exports.subscribeNewsletter = (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: "Email is required" });

  // Check if email already exists
  db.query("SELECT * FROM newsletter WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (results.length > 0) {
      return res.status(400).json({ error: "Email is already subscribed" });
    }

    // Insert into database
    db.query("INSERT INTO newsletter (email) VALUES (?)", [email], (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });
      res.json({ message: "Successfully subscribed to the newsletter!" });
    });
  });
};
