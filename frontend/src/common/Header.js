import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <Navbar bg='light' variant='light' expand='md' fixed='top' className='top-0 shadow-sm'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Tanvir Constructions Ltd
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>

            <Nav.Link as={Link} to='/service'>
              services
            </Nav.Link>

            <Nav.Link as={Link} to='/equipments'>
              Equipment
            </Nav.Link>

            <NavDropdown title='Our Project' id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/running-project'>
                Running Project
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to='/complete-project'>
                Complete Project
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/careers'>
              Careers
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>

            {userInfo && userInfo.isAdmin && (
              <>
                <NavDropdown title='Admin' id='adminMenu'>
                  <NavDropdown.Item as={Link} to='/admin/board-of-director'>
                    Board Of Director List
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to='/admin/management'>
                    Management List
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={Link} to='/admin/service-product'>
                    Service Product List
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to='/admin/equipment'>
                    Equipment List
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to='/admin/running-project'>
                    Running Project List
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to='/admin/public-project'>
                    Public Project List
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to='/admin/private-project'>
                    Private Project List
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to='/admin/careers'>
                    Careers List
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to='/admin/social-media'>
                    Social Media List
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to='/admin/contact-Info'>
                    Contact Info List
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to='/admin/corporate'>
                    Corporate List
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to='/admin/overview'>
                    Overview List
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to='/admin/users'>
                    User List
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
            {userInfo ? (
              <>
                <Nav.Link as={Link} to='/profile'>
                  <i className='far fa-user-circle'></i> Profile
                </Nav.Link>

                <Nav.Link onClick={logoutHandler}>
                  <i className='fas fa-sign-out-alt'></i> Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
