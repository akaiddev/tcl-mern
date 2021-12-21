import React from 'react'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row className='py-5'>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Image src={logo} alt='logo' className='d-inline-block align-top img-fluid' />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <h3 className='my-3'>Contact Info</h3>
            <p> House No: 24, Road 14, Block-G, Niketon, Gulshan, Dhaka-1212 </p>
            <a href={`mailto:tanvirconstructions2020`} className='text-decoration-none text-dark'>
              tanvirconstructions2020@gmail.com
            </a>
            <br />
            <p>Phone: 88 02 9841220 FAX: 88 02 9841221</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <h3 className='my-3'>Contact Info</h3>
            <Nav className='flex-column'>
              <Nav.Item>
                <Nav.Link as={Link} to='/about'>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to='/careers'>
                  Career
                </Nav.Link>
                <Nav.Link as={Link} to='/contact'>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className='bg-dark text-light  py-2 border-top'>
        <div className='text-center'>
          All Rights Reserved <strong> Tanvir Constructions Ltd</strong>. {new Date().getFullYear()}
        </div>
        <div className='text-center '>
          Designed and Development by{' '}
          <a href='/' className='text-danger fw-bold '>
            <cite> Tanvir Software solutions </cite>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
