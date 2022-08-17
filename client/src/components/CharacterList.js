import React from "react";
import { Link } from 'react-router-dom';
import { Container, Card } from "react-bootstrap";

const CharacterList = ({ characters, title }) => {
  if (!characters.length) {
    return <h3>Huh... No one in the tavern...</h3>
  }

  return (
    <div>
      <h3>{title}</h3>
      <Container>
        {characters && 
          characters.map(character => (
            <Card key={character._id} className="mb-3" style={{ width: "100%" }}>
              <Card.Header>
                <Link
                  to={`/profile/${character.username}`}
                  style={{ fontWeight: 700 }}
                >
                  {character.username}
                </Link>
              </Card.Header>
              <Card.Body>
                <Link to={`/character/${character.id}`}>
                  <Card.Title>{character.name}</Card.Title>
                </Link>
                <Card.Subtitle className="mb-2 text-muted">
                  {character.race}/{character.class}
                </Card.Subtitle>
                <Card.Text>
                  {character.bio}
                </Card.Text>
                <Card.Text>
                  <span>STR:{character.strength} DEX:{character.dexterity} CON:{character.constitution} INT:{character.intelligence} WIS:{character.wisdom} CHA:{character.charisma}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Container>
    </div>
  )
}

export default CharacterList;