import { gql } from '@apollo/client'

// export const QUERY_USER = gql`
//     users {
//         _id
//         username
//         email
//         characters {
//             _id
//             name
//             race
//             class
//             bio
//             username
//             strength
//             dexterity
//             constitution
//             intelligence
//             wisdom
//             charisma
//         }
//         partyMemberCount
//         partyMembers{
//             _id
//             username
//         }
//   }
// `
export const QUERY_CHARACTERS = gql`
    query Characters($username: String) {
        characters(username: $username) {
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
            comments {
                _id
                commentBody
                username
            }
        }
    }
`;

export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            username
            email
            partyMemberCount
            partyMembers {
                _id
                username
            }
        }
    }
`;

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
