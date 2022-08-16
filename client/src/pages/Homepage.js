import React from "react";
import { Container, Card } from "react-bootstrap";

const Homepage = () => {
  return (
    <Container>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Chracter name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Race/Class</Card.Subtitle>
          <Card.Text>Character Bio</Card.Text>
          <Card.Text>
            <span>HP</span> <span>Abilities</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Chracter name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Race/Class</Card.Subtitle>
          <Card.Text>Character Bio</Card.Text>
          <Card.Text>
            <span>HP</span> <span>Abilities</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Homepage;
