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
    race: String
    class: String
    bio: String
    username: String
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    comments: [Comment]
    commentCount: Int
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

  type Query{
    me: User
    users: [User]
    user(username: String!): User
    characters(username: String): [Character]
    character(_id: ID!): Character
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCharacter(name: String!, race: String!, class: String! bio: String!, strength: Int!, dexterity: Int!, constitution: Int!, intelligence: Int!, wisdom: Int!, charisma: Int!): Character
    addComment(commentId: ID!, commentBody: String!): Character
    addPartyMember(partyMemberId: ID!): User
  }
`;

module.exports = typeDefs;