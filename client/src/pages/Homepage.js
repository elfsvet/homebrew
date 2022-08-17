import React from "react";
// import CharacterList from "../components/CharacterList";
import { Container, Card } from "react-bootstrap";
// import { useQuery } from "@apollo/client";
// import { QUERY_CHARACTERS, QUERY_ME_BASIC } from "../utils/queries";
// import auth from "../utils/auth";

const HomePage = () => {
  // const { loading, data } = useQuery(QUERY_CHARACTERS)
  // const { data: userData } = useQuery(QUERY_ME_BASIC);

  // const characters = data?.characters || []
  // console.log(characters)

  // const loggedIn = auth.loggedIn();
  
  return (
    <Container>
      {/* <div className="flex-row justify-space-between">
         {loggedIn && (
           <div className="col-12 mb-3">
             <h1>You're logged in. Congrats</h1>
           </div>
         )}
         <div className={`col-12 mb-3 ${loggedIn && `col-lg-8`}`}>
           {loading ? (
             <div>Loading Homebrewed Characters...</div>
           ) : (
             <CharacterList characters={characters} title="How do you want to do this?"/>
           )}
         </div>
         {loggedIn && userData ? (
           <div className="col-12 col-lg-3 mb-3">
             <h1>There's gonna be a list of partyMembers here...</h1>
           </div>
         ) : null}
       </div>   */}
      {/* <main>
       <div className="flex-row justify-space-between">
         {loggedIn && (
           <div className="col-12 mb-3">
             <h1>You're logged in. Congrats</h1>
           </div>
         )}
         <div className={`col-12 mb-3 ${loggedIn && `col-lg-8`}`}>
           {loading ? (
             <div>Loading Homebrewed Characters...</div>
           ) : (
             <CharacterList characters={characters} title="How do you want to do this?"/>
           )}
         </div>
         {loggedIn && userData ? (
           <div className="col-12 col-lg-3 mb-3">
             <h1>There's gonna be a list of partyMembers here...</h1>
           </div>
         ) : null}
       </div>   
     </main> */}
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

export default HomePage;
