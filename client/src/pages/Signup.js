import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import "../styles/signup.css";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup-wrapper login-box">
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <h2>Signup</h2>
        <label>
          <p>Username</p>
          <input
            name="username"
            type="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            name="password"
            type="password"
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
        {error && <div className="signup-failed">Sign up failed!</div>}
      </form>
    </div>
  );
}

export default Signup;
