import React from 'react'
import { Container, Navbar, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Navbar>
      <Container>
        <Row md='auto'>
          <Col>Copyright &copy; {new Date().getFullYear()}</Col>
          <Col>Armon Julio Yolanda Stepan</Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default Footer
