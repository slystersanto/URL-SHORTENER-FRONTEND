import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("https://url-shortener-backend-s80x.onrender.com/register", { email, password });
      console.log(res.data);
      alert('Registered Successfully');
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Error creating user");
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-h1">Register Here</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div>
          <label htmlFor="email" className="register-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name="email"
            required
            className="register-input"
          />
        </div>

        <div>
          <label htmlFor="password" className="register-label">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name="password"
            required
            className="register-input"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="register-label">
            Confirm Password:
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            id="confirmPassword"
            name="confirmPassword"
            required
            className="register-input"
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <div className="register-options">
        <span>
          Already have an account? <Link to="/">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
