import React from "react";
import { Container, Card } from "react-bootstrap";

const Homepage = () => {
  
  return (
      <Container>
        <Card className="mb-3" style={{ width: "100%"}}>
          <Card.Body>
            <Card.Title>Character Name</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
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
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>Character Name</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Race/Class
            </Card.Subtitle>
            <Card.Text>Character Bio</Card.Text>
            <Card.Text>
              <span>HP</span> | <span>Stats</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
  );
};

export default Homepage;
