import React from 'react';
import { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        {/* Hier wird das Logo eingefügt */}
        <img src="/path/to/logo.png" alt="Logo" style={styles.logoImage} />
      </div>
      <button onClick={handleAuthClick} style={styles.button}>
        {isLoggedIn ? 'Ausloggen' : 'Login'}
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
  },
  logo: {
    // Stil für das Logo
  },
  logoImage: {
    height: '40px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Header;
