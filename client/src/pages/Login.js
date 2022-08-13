import React from "react";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <form className="login-form">
      <h2>Login</h2>
        <label>
          <p>Username</p>
          <input type="text" />
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

export default Login;
