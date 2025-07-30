import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../PHOTO.png'; 

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://gemini-ai-supportbackend.vercel.app/api/auth/signup', {
        username,
        email,
        password,
      });
      alert('Signup successful');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.error || 'Signup failed');
    }
  };

  const outerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '30px',
  };

  const containerStyle = {
    maxWidth: '500px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007acc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const footerStyle = {
    marginTop: '30px',
    fontSize: '14px',
    color: '#555',
    borderTop: '1px solid',
    paddingTop: '10px',
    textAlign: 'center',
  };

  return (
    <div style={outerStyle}>
      <div style={containerStyle}>
        <h2 style={{ color: '#333', textDecoration: 'underline' }}>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            style={inputStyle}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={inputStyle}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>

        <div style={footerStyle}>
          © 2025 Aditya Kumar Thakur
        </div>
      </div>
    </div>
  );
}

