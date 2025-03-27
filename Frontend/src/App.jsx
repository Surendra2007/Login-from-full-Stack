import React, { useState } from "react";
import "./App.css";

function App() {
  const [signup, setSignup] = useState(false);

  function toggleSignup() {
    setSignup(!signup); 
  }

  return (
    <div className="main-box">
      <h1>{signup ? "Sign Up" : "Login"}</h1>
      <form>
        {/* add name  */}
        <label htmlFor="name">Name</label>
        <input type="name" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        
        {signup && (
          <>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
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
          
        >
          {signup ? "Log in" : "Sign up"}
        </span>
      </p>
    </div>
  );
}

export default App;
