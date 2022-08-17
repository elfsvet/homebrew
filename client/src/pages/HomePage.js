import React from 'react'
import CharacterList from '../components/CharacterList'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { useQuery } from '@apollo/client'
import { QUERY_CHARACTERS, QUERY_ME_BASIC } from '../utils/queries'
import auth from '../utils/auth'

const HomePage = () => {
  const { loading, data } = useQuery(QUERY_CHARACTERS)
  const { data: userData } = useQuery(QUERY_ME_BASIC)

  const characters = data?.characters || []
  console.log(characters)

  const loggedIn = auth.loggedIn()

  return (
    <Container>
      <Row>
        <Col lg={9}>
          {loading ? (
            <Container>Loading Homebrewed Characters...</Container>
          ) : (
            <CharacterList characters={characters} title='' />
          )}
        </Col>
        <Col lg={3}>
          {loggedIn && userData ? (
            <div className='col-12 col-lg-3 mb-3'>
              <h1>There's gonna be a list of partyMembers here...</h1>
            </div>
          ) : null}
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
