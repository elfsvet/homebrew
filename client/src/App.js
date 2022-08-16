import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            {/* <Route path='/'element={<Header />}/> */}
          </Routes>
        </Container>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
