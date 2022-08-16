import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Form, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { Link } from 'react-router-dom';


const SignupPage = () => {
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form >
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
          
            
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
          ></Form.Control>
        </Form.Group>

        {/* My button was to close to the form password i used a class name to add margin on y axis */}
        <Button type='submit' className='my-3' variant='primary'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
        Already have an account? {' '}
        <Link to='/login'>
          Login{' '}
        </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default SignupPage
