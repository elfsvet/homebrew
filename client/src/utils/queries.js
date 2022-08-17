import { gql } from '@apollo/client'

export const QUERY_USER = gql`
    users {
        _id
        username
        email
        characters {
            _id
            name
            race
            class
            bio
            username
            strength
            dexterity
            constitution
            intelligence
            wisdom
            charisma
        }
        partyMemberCount
        partyMembers{
            _id
            username
        }
  }
`

// export const QUERY_ME = gql`
//     {
//         me {
//             _id
//             username
//             email
//             characters {
//                 _id
//                 name
//                 race
//                 class
//                 bio
//                 username
//                 strength
//                 dexterity
//                 constitution
//                 intelligence
//                 wisdom
//                 charisma
//             }
//             partyMemberCount
//             partyMembers{
//                 _id
//                 username
//         }
//     }
// `;
