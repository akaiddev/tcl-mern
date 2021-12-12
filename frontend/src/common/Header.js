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
    <Navbar bg='light' variant='light' expand='md' fixed='top' className='shadow-sm'>
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
          <Nav>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
            {userInfo ? (
              <>
                <NavDropdown title={userInfo.name} id='userName'>
                  <NavDropdown.Item as={Link} to='/profile'>
                    <i className='far fa-user-circle'></i> Profile
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={logoutHandler}>
                    <i className='fas fa-sign-out-alt'></i> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminMenu'>
                <NavDropdown.Item as={Link} to='/admin/board-of-director'>
                  Board Of Director List
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
                <NavDropdown.Item as={Link} to='/admin/users'>
                  User List
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
