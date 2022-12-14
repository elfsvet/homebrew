import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router'
import CharacterList from '../components/CharacterList'
import { useQuery } from '@apollo/client'
import { QUERY_USER, QUERY_ME } from '../utils/queries'
import auth from '../utils/auth'
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

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  })

  const user = data?.me || data?.user || {}

  if (auth.loggedIn() && auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile"/>;
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    )
  }

  return (
    <Row>
      {/* USER's BUILDS */}
      <Col xs={12} md={4}>
        <CharacterList characters={user.characters} title={`${user.username}'s builds...`}/>
      </Col>
      {/* BIO USER INFO AND CHANGE PROFILE FRIENDS BOOKMARK */}
      <Col xs={12} md={8}>
        <Container>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              {/* map the info from state userInfo */}
              <Card.Title className='text-center'>{user.username}</Card.Title>

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
