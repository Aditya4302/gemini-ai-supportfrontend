import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../utils/auth';
import backgroundImage from '../PHOTO.png'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const { data } = await axios.post('https://gemini-ai-supportbackend.vercel.app/api/auth/login', {
        email,
        password,
      });
      saveToken(data.token);
      navigate('/instruction');
    } catch (error) {
      const message = error.response?.data?.error || 'Unable to login. Please try again.';
      setErrorMessage(message);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '30px',
      }}
    >
      <div className="container" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '10px' }}>
        <h2 className="text-center" style={{ color: 'Brown', textAlign: 'center' }}>
          LOGIN <br /> Customer Support Service
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>

        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>

        <footer
          style={{
            marginTop: '30px',
            fontSize: '14px',
            color: '#555',
            borderTop: '1px solid #ccc',
            paddingTop: '10px',
            textAlign: 'center',
          }}
        >
          Aditya Kumar Thakur &copy; 2025
        </footer>
      </div>
    </div>
  );
}

export default Login;
