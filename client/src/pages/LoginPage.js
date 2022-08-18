import React, { useState, useEffect } from "react";
import { Button, Container, Row, Form, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import ErrorMessage from "../components/ErrorMessage"

const LoginPage = (props) => {
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
    event.preventDefault(); // IMPORTANT FOR FUNCTION OF FORM!!!
    // use try/catch instead of promises to handle errors
    try {
      // execute login mutation and pass in variable data from form
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
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="email" className="mb-2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password" className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        {error && <ErrorMessage variant='danger'>Login Failed</ErrorMessage>}
        {/* My button was to close to the form password i used a class name to add margin on y axis */}
        <Button type="submit" className="my-3" variant="primary">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          {/* redirect me to signup page */}
          <Link to="/signup">Create New Account </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginPage;
