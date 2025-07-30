import { useNavigate } from 'react-router-dom';
import backgroundImage from '../PHOTO.png'; 

function Instruction() {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate('/chat');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',              
        justifyContent: 'center',     
        alignItems: 'center',          
        padding: '30px',
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: 'rgba(255,255,255,0.9)',
          padding: '30px',
          borderRadius: '10px',
          textAlign: 'center',
          maxWidth: '500px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', 
        }}
      >
        <h2>Welcome to Customer Support Gemini AI</h2>
        <p>If you have any questions, our AI Support is here to help you.</p>
        <button onClick={handleStartChat}>Start Chat</button>
      </div>
    </div>
  );
}

export default Instruction;
