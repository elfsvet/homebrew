import React from 'react'
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { QUERY_CHARACTER, QUERY_ME_BASIC } from '../utils/queries'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import CharacterList from '../components/CharacterList'

const CharacterInfoPage = () => {
  const { id: charId } = useParams()
  const { loading, data } = useQuery(QUERY_CHARACTER, {
    variables: { id: charId },
  })
  console.log('This is data: ' + JSON.stringify(data))
  const character = data?.character || []
  // const { data: userData } = useQuery(QUERY_ME_BASIC)
  console.log(charId)
  console.log(character.name)
  // const character = data?.character || []
  // console.log(userData)
  return (
    
    <Container>
      {/* <CharacterList ></CharacterList> */}
      <Card key={character._id} className='mb-3'>
        <Card.Header>
          <Link
            to={`/character/${character._id}`}
            style={{ fontWeight: 700, textDecoration: 'none' }}
          >
            <Card.Title>{character.name}</Card.Title>
          </Link>
        </Card.Header>
        {/* Card Header with character name */}
        <Card.Body>
              {/* Card Body with username */}
              <Link
                to={`/profile/${character.username}`}
                style={{ fontWeight: 700, textDecoration: 'none' }}
              >
                <span>
                  <Card.Subtitle className='mb-2 text-muted'>
                    {' '}
                    Created by: {character.username}
                  </Card.Subtitle>
                </span>
              </Link>
              <Card.Text className='mb-2'>
                {character.race}/{character.class}
              </Card.Text>
              <Card.Text>{character.bio}</Card.Text>
              <Card.Text>
                <span>
                  STR:{character.strength} | DEX:{character.dexterity} | CON:
                  {character.constitution} | INT:{character.intelligence} | WIS:
                  {character.wisdom} | CHA:{character.charisma}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
    </Container>
  )
}

export default CharacterInfoPage
