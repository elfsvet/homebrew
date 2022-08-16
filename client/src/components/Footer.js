import React from 'react'
import {Container, Navbar, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar >
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; ProShop
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Footer