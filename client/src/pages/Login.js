import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import "../styles/login.css";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [login, { error }] = useMutation(LOGIN_USER);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-wrapper login-box">
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <label>
          <p>Email</p>
          <input
            placeholder=""
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            placeholder=""
            type="password"
            name="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </div>
      </form>
      {error && <div className="login-failed">Login failed!</div>}
    </div>
  );
}

export default Login;
