// App.js
import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="app">
      {!user ? (
        showSignup ? (
          <Signup setUser={setUser} setShowSignup={setShowSignup} />
        ) : (
          <Login setUser={setUser} setShowSignup={setShowSignup} />
        )
      ) : (
        <Calculator user={user} />
      )}
    </div>
  );
}

export default App;
