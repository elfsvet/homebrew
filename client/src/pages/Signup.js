import React from "react";
import "../styles/signup.css";


function Signup() {
  return (
    <div className="signup-wrapper">
      <form className="signup-form">
      <h2>Signup</h2>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Email</p>
          <input type="email" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
