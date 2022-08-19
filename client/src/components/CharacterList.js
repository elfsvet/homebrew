import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Row, Col } from 'react-bootstrap'

const CharacterList = ({ characters, title }) => {
  if (!characters.length) {
    return <h3>Huh... No one in the tavern...</h3>
  }

  return (
    <Container>
      {characters &&
        characters.map((character) => (
          <Card key={character._id} className='mb-3' style={{ width: '100%' }}>
            {/* Card Header with character name */}
            <Card.Header>
              <Link
                to={`/character/${character._id}`}
                style={{ fontWeight: 700, textDecoration: 'none' }}
              >
                <Card.Title>{character.name}</Card.Title>
              </Link>
            </Card.Header>
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
        ))}
    </Container>
  )
}

export default CharacterList
