import React from 'react'
import { Container, Navbar, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container className='pt-2'>
      <Row className='justify-content-space-between'>
        <Col xs={12} md={6}>
          Copyright &copy; {new Date().getFullYear()}
        </Col>
        {/* should be external links to our github's profiles */}
        <Col xs={12} md={6}>
          <Nav.Link
            as='a'
            className='App-link'
            href='https://github.com/Abstrack5'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fa-brands fa-github'></i> Armon
          </Nav.Link>
          <Nav.Link
            as='a'
            className='App-link'
            href='https://github.com/justjulio95'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fa-brands fa-github'></i> Julio
          </Nav.Link>
          <Nav.Link
            as='a'
            className='App-link'
            href='https://github.com/yoli19'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fa-brands fa-github'></i> Yolanda
          </Nav.Link>
          <Nav.Link
            as='a'
            className='App-link'
            href='https://github.com/elfsvet'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fa-brands fa-github'></i> Stepan
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
