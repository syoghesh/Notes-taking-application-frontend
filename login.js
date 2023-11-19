// File: frontend/src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here (e.g., API call)
    // On successful login, call onLogin callback with user data
    const user = { username, email: `${username}@example.com` };
    onLogin(user);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
