import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`
export const ADD_CHARACTER = gql`
  mutation Mutation($name: String!, $race: String!, $class: String!, $bio: String!, $strength: Int!, $dexterity: Int!, $constitution: Int!, $intelligence: Int!, $wisdom: Int!, $charisma: Int!) {
  addCharacter(name: $name, race: $race, class: $class, bio: $bio, strength: $strength, dexterity: $dexterity, constitution: $constitution, intelligence: $intelligence, wisdom: $wisdom, charisma: $charisma) {
    _id
    name
    class
    race
    bio
    username
    strength
    dexterity
    constitution
    intelligence
    wisdom
    charisma
  }
}
`
