import React from 'react'
import { Container, Card, Col, Row, Form } from 'react-bootstrap'

const ProfilePage = () => {
  return (
    <Row>
      {/* USER's BUILDS */}
      <Col xs={2} md={4}>
        <Container>
          <Card className='mb-3' style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>Chracter name</Card.Title>
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
              <Card.Title>Chracter name</Card.Title>
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
      <Col xs={10} md={8}>
        <Container>
          <Card className='mb-3' style={{ width: '100%' }}>
            <Card.Body>
                {/* map the info from state userInfo */}
              <Card.Title>User Name</Card.Title>

              <Card.Title>BIO</Card.Title>
              <Card.Text>Aenean lobortis, quam non auctor semper, odio nisl tincidunt est, id cursus erat augue non arcu. Nullam et libero lacus. Curabitur sed quam vel neque tempus pellentesque. Suspendisse tempor libero id placerat ultricies. Proin aliquam faucibus dictum. Nulla imperdiet urna a lorem aliquet, quis tincidunt nisi eleifend. In iaculis dolor consequat, gravida leo sed, tincidunt magna. Phasellus sodales aliquet arcu id luctus. Nunc molestie ut ipsum id posuere. Nam volutpat eget lectus nec vehicula.</Card.Text>
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
          <Form>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
            ></Form.Control>
          </Form.Group>
          </Form>
        </Container>
      </Col>
    </Row>
  )
}

export default ProfilePage
