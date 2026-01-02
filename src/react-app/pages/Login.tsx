import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/ts_main_logo.svg';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0b0b0d',
    color: '#f5f5f5',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`, // Subtle background or use solid
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  };

  const formStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: '3rem',
    borderRadius: '4px',
    width: '100%',
    maxWidth: '450px',
    border: 'none',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#333',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#E50914', // Classic streaming Red
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1.5rem',
    transition: 'background 0.2s',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src={logo} alt="Logo" style={{ height: '70px' }} />
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>
          Sign In
        </h2>
        {error && <div style={{ color: '#E50914', marginBottom: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              placeholder="Email or phone number"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f40612'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E50914'}
          >
            Sign In
          </button>
        </form>
        <div style={{ marginTop: '3rem', textAlign: 'center', fontSize: '1rem', color: '#737373' }}>
          New to TS Stream? <Link to="/signup" style={{ color: '#fff', cursor: 'pointer', textDecoration: 'none' }}>Sign up now</Link>.
        </div>
        <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.8rem', color: '#8c8c8c' }}>
          Demo Access: <strong>admin</strong> / <strong>password</strong>
        </div>
      </div>
    </div>
  );
};

export default Login;
