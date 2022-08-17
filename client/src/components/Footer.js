import React from 'react'
import { Container, Navbar, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container
      className='pt-2'    >
      <Row className='text-center justify-content-space-between'>
        <Col xs={12} md={6}>
          Copyright &copy; {new Date().getFullYear()}
        </Col>
        {/* should be external links to our github's profiles */}
        <Col xs={12} md={6}>
          Armon Julio Yolanda Stepan
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
