// Login.js
import React, { useState } from 'react';

function Login({ setUser, setShowSignup }) {
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) setUser(username);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p onClick={() => setShowSignup(true)}>Don’t have an account? Sign up</p>
    </div>
  );
}

export default Login;