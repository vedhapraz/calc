// Signup.js
import React, { useState } from 'react';

function Signup({ setUser, setShowSignup }) {
  const [username, setUsername] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (username.trim()) setUser(username);
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Choose username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      <p onClick={() => setShowSignup(false)}>Already have an account? Login</p>
    </div>
  );
}

export default Signup;
