import React from 'react'
import { Button, Container, Row, Form, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { Link } from 'react-router-dom';


const LoginPage = () => {
  return (
    <FormContainer>
    <h1>Sign In</h1>
  
    <Form>
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
      {/* My button was to close to the form password i used a class name to add margin on y axis */}
      <Button type='submit' className='my-3' variant='primary'>
        Sign In
      </Button>
    </Form>
    <Row className='py-3'>
      <Col>
      {/* redirect me to signup page */}
        <Link to='/signup'>
        Create New Account{' '}
        </Link>
      </Col>
    </Row>
  </FormContainer>
  )
}

export default LoginPage
