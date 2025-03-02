const db = require('../config/db');
const path = require('path')
const fs = require('fs')



const User = {
  create: (user, callback) => {
    db.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [user.username, user.email, user.password],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, result.insertId);
      }
    );
  },

  findByEmail: (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.length > 0 ? results[0] : null);
    });
  },

  updatePassword: (userId, hashedPassword, callback) => {
        db.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, userId], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result);
        });
    },

  updateAccount: (userId, userData, callback) => {
    db.query(
      'UPDATE users SET username = ?, email = ? WHERE id = ?',
      [userData.username, userData.email, userId],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
      }
    );
  },
  deleteAccount: (userId, callback) => {
    // Step 1: Delete all blogs associated with the user
    db.query('SELECT image FROM blogs WHERE author_id = ?', [userId], (err, blogs) => {
      if (err) return callback(err);

      // Delete images associated with blogs
      blogs.forEach(blog => {
        if (blog.image) {
          const imagePath = path.join(__dirname, '..', blog.image);
          fs.unlink(imagePath, (err) => {
            if (err) console.error('Failed to delete image:', err);
          });
        }
      });

      // Delete blogs
      db.query('DELETE FROM blogs WHERE author_id = ?', [userId], (err) => {
        if (err) return callback(err);

        // Step 2: Delete the user account
        db.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
          if (err) return callback(err);
          callback(null, { message: 'Account and all associated data deleted successfully' });
        });
      });
    });
  },
  
};

module.exports = User;
