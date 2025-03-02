const db = require("../config/db");

const Blog = {
  create: (blog, callback) => {
    db.query(
      `INSERT INTO blogs (title, content, category, author_id, image, created_at) VALUES (?, ?, ?, ?, ?, NOW())`,
      [blog.title, blog.content, blog.category, blog.author_id, blog.image],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, result.insertId);
      }
    );
  },

  getAll: (callback) => {
    db.query(
      `SELECT blogs.*, users.username 
       FROM blogs 
       JOIN users ON blogs.author_id = users.id 
       ORDER BY blogs.created_at DESC`,
      (err, results) => {
        if (err) return callback(err, null);
        results.forEach((blog) => {
          if (blog.image) blog.image = `${blog.image}`; // Append correct path
        });
        callback(null, results);
      }
    );
  },

  getById: (id, callback) => {
    db.query(
      `SELECT blogs.*, users.username, users.email 
       FROM blogs 
       JOIN users ON blogs.author_id = users.id 
       WHERE blogs.id = ?`,
      [id],
      (err, results) => {
        if (err) return callback(err, null);
        if (results.length > 0) {
          results[0].image = results[0].image ? `${results[0].image}` : null;
        }
        callback(null, results.length > 0 ? results[0] : null);
      }
    );
  },
  getBlogsByUserId: (id, callback) => {
    db.query(
      `SELECT blogs.*, users.username, users.email 
       FROM blogs 
       JOIN users ON blogs.author_id = users.id
       WHERE users.id = ?`,
      [id],
      (err, results) => {
        if (err) return callback(err, null);
        if (results.length > 0) {
          // Optional: Modify the image field if needed
          results[0].image = results[0].image ? `${results[0].image}` : null;
        }
        callback(null, results.length > 0 ? results : null);
      }
    );
  },
  // Method to fetch user details from the database
  getUserProfile: (userId, callback) => {
    db.query(
      `SELECT id, username, email, created_at FROM users WHERE id = ?`,
      [userId],
      (err, results) => {
        if (err) return callback(err, null);

        // Return a single object instead of an array
        callback(null, results.length > 0 ? results[0] : null);
      }
    );
  },
  update: (id, blog, callback) => {
    db.query(
      "UPDATE blogs SET title = ?, content = ?, category = ? WHERE id = ? AND author_id = ?",
      [blog.title, blog.content, blog.category, id, blog.author_id],
      callback
    );
  },

  delete: (id, author_id, callback) => {
    db.query(
      "DELETE FROM blogs WHERE id = ? AND author_id = ?",
      [id, author_id],
      callback
    );
  },
  
};

module.exports = Blog;
