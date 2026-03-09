import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    if (!user || !pin) {
      alert('Bitte geben Sie Ihren Sparda-NetKey und Ihre PIN ein.');
      return;
    }
    onLogin();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div id="login-screen" className="login-screen" onKeyDown={handleKeyDown}>
      <h2>Sparda-Bank Login</h2>
      <input
        type="text"
        placeholder="Sparda-NetKey"
        value={user}
        onChange={e => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="PIN"
        value={pin}
        onChange={e => setPin(e.target.value)}
      />
      <button className="btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
}
