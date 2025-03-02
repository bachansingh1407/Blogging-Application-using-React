import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import { Link, useNavigate } from 'react-router-dom';
import './auth.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get login function from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // Use login function from AuthContext
      navigate('/'); // Redirect to home page after successful login
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='auth__container'>
      <div className="container">
        <div className='title'>
          <h1>Welcome Back!</h1>
          <p>Login your account</p>
        </div>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='cooljoe@supastrikas.com'
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='8+ characters'
              required
            />
          </div>
          <button type="submit">
            Login
          </button>
        </form>
        <p className='link'>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
