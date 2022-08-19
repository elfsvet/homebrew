import { Container, Nav, Navbar, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import auth from '../utils/auth'
function Header() {
  const logout = (event) => {
    event.preventDefault()
    auth.logout()
  }
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <Image src='./images/Claudron146.png' alt='claudron' />
            HOMEBREW
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {/* ensures a user is logged in to view certain features */}
              {auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/'>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to='/newbuild'>
                    New Build
                  </Nav.Link>
                  <Nav.Link as={Link} to='/profile'>
                    Profile
                  </Nav.Link>
                  <Nav.Link as={Link} to='/' onClick={logout} className=''>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to='/login'>
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to='/signup'>
                    SignUp
                  </Nav.Link>
                </>
              )}
              {/* <Nav.Link as={Link} to='/profile'>
              Profile
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
{/*
      <Image src='./images/pexels-stephen-hardy-7061817.jpg' fluid />
    
        <div
          className='mask'
          style={{ backgroundColor: 'rgba(256, 256, 256, 0.3)' }}
        >
          <div className='d-flex justify-content-center align-items-center'>
            <div className=''>
              <h1 className=''>Homebrew</h1>
            </div>
          </div>
        </div> */}
    </header>
  )
}

export default Header
