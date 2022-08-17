import React, { useState } from 'react'
import {
  Container,
  Card,
  Col,
  Row,
  Form,
  Button,
  Collapse,
} from 'react-bootstrap'

const ProfilePage = () => {
  // toggle the update profile button
  const [open, setOpen] = useState(false)

  return (
    <Row>
      {/* USER's BUILDS */}
      <Col xs={12} md={4}>
        <Container className='mb-3 '>
          <Card className='mb-3 ' style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>Character Name</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Race/Class
              </Card.Subtitle>
              <Card.Text>Character Bio</Card.Text>
              <Card.Text>
                {/* going to need a function for the stats to map through all the stats of the character to load */}
                <span>HP</span> | <span>Stats</span>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* second card to delete, for show for now */}
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>Character Name</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Race/Class
              </Card.Subtitle>
              <Card.Text>Character Bio</Card.Text>
              <Card.Text>
                <span>HP</span> | <span>Stats</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Col>
      {/* BIO USER INFO AND CHANGE PROFILE FRIENDS BOOKMARK */}
      <Col xs={12} md={8}>
        <Container>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              {/* map the info from state userInfo */}
              <Card.Title className='text-center'>User Name</Card.Title>

              <Card.Title>About</Card.Title>
              <Card.Text>
                Aenean lobortis, quam non auctor semper, odio nisl tincidunt
                est, id cursus erat augue non arcu. Nullam et libero lacus.
                Curabitur sed quam vel neque tempus pellentesque. Suspendisse
                tempor libero id placerat ultricies. Proin aliquam faucibus
                dictum. Nulla imperdiet urna a lorem aliquet, quis tincidunt
                nisi eleifend. In iaculis dolor consequat, gravida leo sed,
                tincidunt magna. Phasellus sodales aliquet arcu id luctus. Nunc
                molestie ut ipsum id posuere. Nam volutpat eget lectus nec
                vehicula.
              </Card.Text>
            </Card.Body>
          </Card>

          <Button
            className='my-3'
            onClick={() => setOpen(!open)}
            aria-controls='update-user-profile'
            aria-expanded={open}
          >
            Update User Profile
          </Button>
          <Collapse in={open}>
            <div id='update-user-profile'>
              <Form>
                <Form.Group controlId='username'>
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type='username'
                    placeholder='Enter User Name'
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter Email'
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter Password'
                  ></Form.Control>
                </Form.Group>
                {/* <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
              ></Form.Control>
            </Form.Group> */}
                <Button type='submit' className='my-3' variant='primary'>
                  Update
                </Button>
              </Form>
            </div>
          </Collapse>
        </Container>
      </Col>
    </Row>
  )
}

export default ProfilePage
