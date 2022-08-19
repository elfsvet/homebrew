import React from 'react' //useEffect is commented out for now
import { setContext } from '@apollo/client/link/context'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'

import Header from './components/Header'
import LoginPage from './pages/LoginPage'
// RENAMED HomePage
import HomePage from './pages/HomePage'
import NewBuildPage from './pages/NewBuildPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import CharacterInfoPage from './pages/CharacterInfoPage'
import Footer from './components/Footer'

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer  ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <main className=''>
          <Container>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/character'>
                <Route path=':id' element={<CharacterInfoPage />}/>
                <Route path='' element={<CharacterInfoPage />}/>

              </Route>
              <Route path='/newbuild' element={<NewBuildPage />} />
              <Route path='/profile'>
                <Route path=':username' element={<ProfilePage />} />
                <Route path='' element={<ProfilePage />} />
              </Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  )
}

export default App
