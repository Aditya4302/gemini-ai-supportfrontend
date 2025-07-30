import { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../PHOTO.png';

function ChatMessage({ sender, content }) {
  const isUser = sender === 'user';
  const bubbleStyle = {
    backgroundColor: '#e1e1e1',
    padding: '10px',
    borderRadius: '16px',
    maxWidth: '70%',
    wordBreak: 'break-word',
  };

  const messageStyle = {
    display: 'flex',
    justifyContent: isUser ? 'flex-end' : 'flex-start',
    margin: '8px 0',
  };

  return (
    <div style={messageStyle}>
      <div style={bubbleStyle}>{content}</div>
    </div>
  );
}

export default function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMsg = { sender: 'user', content: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post('https://gemini-ai-supportbackend.vercel.app/api/gemini/chat', {
        message: input,
      });
      const reply = { sender: 'ai', content: res.data.reply };
      setMessages((prev) => [...prev, reply]);
    } catch (err) {
      const fallback = { sender: 'ai', content: 'Unable to answer right now.' };
      setMessages((prev) => [...prev, fallback]);
    } finally {
      setLoading(false);
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
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'sans-serif',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
  };

  const inputGroupStyle = {
    display: 'flex',
    gap: '8px',
    marginTop: '16px',
  };

  const inputStyle = {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid',
  };

  const buttonStyle = {
    width: '100px',
    padding: '10px',
    backgroundColor: '#007acc',
    color: '#fff',
    border: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '0.85rem',
    marginTop: '10px',
    textAlign: 'center',
  };

  const footerStyle = {
    textAlign: 'center',
    fontSize: '0.8rem',
    color: '#888',
    marginTop: '20px',
    borderTop: '1px solid',
    paddingTop: '10px',
  };

  return (
    <div style={outerStyle}>
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center', color: '#222', textDecoration: 'underline' }}>
          Chat with Customer Support Service
        </h2>

        <div
          style={{
            background: '#f5f5f5',
            borderRadius: '8px',
            padding: '12px',
            maxHeight: '400px',
            overflowY: 'auto',
          }}
        >
          {messages.map((msg, i) => (
            <ChatMessage key={i} sender={msg.sender} content={msg.content} />
          ))}
          {loading && <ChatMessage sender="ai" content="Wait thinking..." />}
        </div>

        <div style={inputGroupStyle}>
          <input
            type="text"
            placeholder="Enter your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            style={inputStyle}
          />
          <button onClick={handleSend} style={buttonStyle}>
            Search with AI
          </button>
        </div>

        {error && <div style={errorStyle}>{error}</div>}

        <footer style={footerStyle}>Aditya Kumar Thakur © 2025</footer>
      </div>
    </div>
  );
}
