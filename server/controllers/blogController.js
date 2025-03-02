const Blog = require('../models/blogModel');
const fs = require('fs');
const path = require('path');

exports.createBlog = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const author_id = req.userId;
    const image = req.file ? req.file.path : null;

    Blog.create({ title, content, category, author_id, image }, (err, blogId) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Blog created successfully", blogId });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBlogs = (req, res) => {
  Blog.getAll((err, blogs) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(blogs);
  });
};
// Controller to handle fetching user profile

exports.getUserProfile = (req, res) => {
  const userId = req.params.id; // Extract user ID from request parameters

  // Call the database method to fetch user details
  Blog.getUserProfile(userId, (err, userDetails) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" }); // Database error
    }
    if (!userDetails) {
      return res.status(404).json({ error: "User not found" }); // No user found
    }
    res.json(userDetails); // Return user details as an object
  });
};

exports.getBlogById = (req, res) => {
  Blog.getById(req.params.id, (err, blog) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  });
};


exports.getUserBlogs = (req, res) => {
  const userId = req.params.id;
  Blog.getBlogsByUserId(userId, (err, blogs) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!blogs || blogs.length === 0) return res.status(404).json({ error: 'No blogs found for this user' });
    res.json(blogs);
  });
};

exports.updateBlog = (req, res) => {
  const { title, content, category } = req.body;
  const author_id = req.userId;

  Blog.update(req.params.id, { title, content, category, author_id }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(403).json({ error: "Not authorized or blog not found" });
    res.json({ message: "Blog updated successfully" });
  });
};

exports.deleteBlog = (req, res) => {
  const author_id = req.userId; // Ensure this is set correctly in your middleware

  Blog.delete(req.params.id, author_id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(403).json({ error: "Not authorized or blog not found" });
    res.json({ message: "Blog deleted successfully" });
  });
};
