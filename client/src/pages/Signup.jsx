import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import { Link, useNavigate } from 'react-router-dom';
import './auth.css'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Use login function from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed. Please try again.');
      }

      //   const data = await response.json();
      await login(email, password); // Automatically log in after signup
      navigate('/'); // Redirect to home page after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='auth__container'>
      <div className='container'>
        <div className='title'>
          <h1>Welcome to MyBlog</h1>
          <p>Register your account</p>
        </div>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Cool Joe'
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='cooljoe@supastrikas.com'
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='8+ characters'
              required
            />
          </div>
          <button type="submit">
            Sign Up
          </button>
        </form>
        <p className='link'>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
