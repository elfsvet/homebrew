import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import auth from '../utils/auth'

function Header() {
  const logout = event => {
    event.preventDefault();
    auth.logout();
  }
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          HOMEBREW
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            
            {/* ensures a user is logged in to view certain features */}
            {auth.loggedIn() ? (
              <>
                <Nav.Link as={Link} to='/newbuild'>
                  New Build
                </Nav.Link>
                <Nav.Link as={Link} to='/profile'>
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to='/' onClick={logout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/signup'>SignUp</Nav.Link>
              </>
            )}
            {/* <Nav.Link as={Link} to='/profile'>
              Profile
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
