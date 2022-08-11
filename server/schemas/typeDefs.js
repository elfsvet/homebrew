// import gql template
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    characters: [Character]
    partyMemberCount: Int
    partyMembers: [User]
  }

  type Character {
    _id: ID
    name: String
    bio: String
    username: String
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    username: String
  }

  type Auth{
    token: ID!
    user: User
  }
`