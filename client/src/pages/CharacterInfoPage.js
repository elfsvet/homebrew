import React from 'react'
import { Container } from 'react-bootstrap'
import { QUERY_CHARACTER, QUERY_ME_BASIC } from '../utils/queries'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import CharacterList from '../components/CharacterList'

const CharacterInfoPage = () => {
  const params = useParams()
  const characterId = params.id
  // const { loading, data} = useQuery(QUERY_CHARACTER)
  // const { data: userData } = useQuery(QUERY_ME_BASIC)
  console.log(characterId)
  // const character = data?.character || []
  // console.log(userData)
  return (
    <Container>
      {/* <CharacterList></CharacterList> */}
    </Container>
  )
}

export default CharacterInfoPage
