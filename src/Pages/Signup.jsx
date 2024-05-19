import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Send a POST request to the backend to create a new user
      const response = await axios.post("http://localhost:7000/api/v1/auth/register", {
        username,
        password,
        confirmPassword,
      });

      // If signup is successful, navigate to the login page
      if (response.status === 201) {
        navigate("/home");
      }
    } catch (error) {
      // Display the error message returned by the server
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  const handleLoginClicked = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full m-auto h-screen bg-gradient-to-b from-purple-100 to-white">
      <h1 className="text-5xl mb-5 font-bold">Sign up</h1>
      <form className="flex flex-col w-96 h-3/5" onSubmit={handleSignup}>
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mb-5 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
        />
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <button
          type="submit"
          className="border-2 border-gray-200 bg-gray-300 h-12 w-full font-bold rounded-lg"
        >
          Sign Up
        </button>
        <p className="mt-2 text-xs ">
          {"Already have an account?"}
          <span
            className="text-blue-500 cursor-pointer ml-2"
            onClick={handleLoginClicked}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
