import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/api/v1/auth/login', {
        username,
        password,
      });
      // If login successful, store the token and redirect to the homepage or dashboard
      localStorage.setItem('token', response.data.token);
      navigate('/home'); // Example redirect route
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  const handleClicked = () => {
    navigate('/signup');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full m-auto h-screen bg-gradient-to-b from-purple-100 to-white">
      <h1 className="text-5xl mb-5 font-bold">Login</h1>
      <form className="flex flex-col w-96 h-3/5" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-5 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-5 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
        />
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <button type="submit" className="border-2 border-gray-200 bg-gray-300 h-12 w-full font-bold rounded-lg">
          Login
        </button>
        <p className="mt-2 text-xs">
          {"Don't have an account?"}
          <span className="text-blue-500 cursor-pointer ml-2" onClick={handleClicked}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
