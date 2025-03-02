const User = require('../models/userModel');
// const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


exports.deleteAccount = (req, res) => {
  const userId = req.params.id;

  User.deleteAccount(userId, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

exports.updateUser = (req, res) => {
  const { username, email } = req.body;
  const userId = req.params.id;

  if (!username || !email) {
    return res.status(400).json({ error: "Username and email are required." });
  }

  User.updateAccount(userId, { username, email }, (err, result) => {
    if (err) return res.status(500).json({ error: "Database error. Try again later." });
    if (result.affectedRows === 0) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User updated successfully" });
  });
};

exports.updatePassword = (req, res) => {
    const { newPassword } = req.body;
    const userId = req.params.id; // Authenticated user ID


    // Hash the new password
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).json({ error: "Error generating salt." });

        bcrypt.hash(newPassword, salt, (err, hashedPassword) => {
            if (err) return res.status(500).json({ error: "Error hashing password." });

            // Update password in the database
            User.updatePassword(userId, hashedPassword, (err, result) => {
                if (err) return res.status(500).json({ error: "Database error. Try again later." });
                if (result.affectedRows === 0) return res.status(404).json({ error: "User not found" });

                res.json({ message: "Password updated successfully" });
            });
        });
    });
};
