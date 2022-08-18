import React, {useState } from 'react'
import { Button, Row, Form, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignupPage = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [addUser, { error }] = useMutation(ADD_USER);

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    // use try/catch instead of promises to handle errors
    try {
       // execute addUser mutation and pass in variable data from form
       const { data } = await addUser({
         variables: { ...formState }
        });
       Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(formState)

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="username" className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name='username'
            type="text"
            placeholder="Enter name"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

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

        {/* <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group> */}
          {error && <ErrorMessage variant='danger'>Sign Up Failed</ErrorMessage>}
        {/* My button was to close to the form password i used a class name to add margin on y axis */}
        <Button type="submit" className="my-3" variant="primary">
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already have an account? <Link to="/login">Login </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default SignupPage;
