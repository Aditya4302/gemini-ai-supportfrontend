import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#007acc',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'sans-serif',
    position: 'fixed',     
    top: 0,                
    width: '100%',         
    zIndex: 1000,          
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    fontWeight: 'bold',
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
        Gemini AI Support
      </div>
      <div>
        <Link to="/instruction" style={linkStyle}>Instruction</Link>
        <Link to="/chat" style={linkStyle}>Chat</Link>
        <Link to="/" style={linkStyle}>Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
