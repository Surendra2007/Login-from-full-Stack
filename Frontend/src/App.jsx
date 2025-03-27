import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [signup, setSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function toggleSignup() {
    setSignup(!signup);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // Reset form on toggle
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation for signup
    if (signup && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const url = signup
        ? "https://login-from-full-stack.onrender.com/signup"
        : "https://login-from-full-stack.onrender.com/login";

      const payload = signup
        ? formData // Include name in signup
        : { email: formData.email, password: formData.password }; // Exclude name in login

      const response = await axios.post(url, payload);

      alert(response.data?.message || "Operation successful!"); // ✅ Fixed: Added default message
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Error: " + (error.response?.data?.message || "Something went wrong!")
      ); // ✅ Fixed: Added optional chaining + default message
    }
  };

  return (
    <div className="main-box">
      <h1>{signup ? "Sign Up" : "Login"}</h1>
      <form onSubmit={handleSubmit}>
        {signup && (
          <>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {signup && (
          <>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </>
        )}

        <input type="submit" value={signup ? "Sign Up" : "Login"} />
      </form>

      <p>
        {signup ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          onClick={toggleSignup}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {signup ? "Log in" : "Sign up"}
        </span>
      </p>
    </div>
  );
}

export default App;
