// const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// Register
exports.register = (req, res) => {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    User.findByEmail(email, (err, existingUser) => {
      if (err) return res.status(500).json({ error: err.message });
      if (existingUser) return res.status(400).json({ error: 'Email already registered' });
  
      // Hash the password
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: err.message });
  
        // Create user
        User.create({ username, email, password: hashedPassword }, (err, userId) => {
          if (err) return res.status(500).json({ error: err.message });
          res.status(201).json({ message: 'User registered successfully', userId });
        });
      });
    });
  }

// Login
exports.login =  (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    // Compare passwords
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

      // Generate JWT Token
      const token = jwt.sign({ id: user.id, username: user.username, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.json({ message: 'Login successful', token });
    });
  });
}

