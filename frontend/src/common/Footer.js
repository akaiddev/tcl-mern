import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row className='py-5'>
          <Col sm={6} md={4}>
            <h3 className='my-3'> Tanvir Constructions Ltd</h3>
            <p>
              Tanvir Constructions Ltd. (TCL) is one of the most promising construction companies in Bangladesh delivering high quality and innovative engineering
              solutions in the areafor road and airport constructions and maintenance as well asWater and Energy sector management. We also provide advisory services on
              Infrastructure Development Project.
            </p>
          </Col>
          <Col sm={6} md={4}>
            <h3 className='my-3'>Contact Info</h3>
            <p> House No: 24, Road 14, Block-G, Niketon, Gulshan, Dhaka-1212 </p>
            <p> tanvirconstructions2020@gmail.com </p>
            <p> support@tanvirconstructions2020.com</p>
          </Col>
          <Col sm={6} md={4}>
            <h3 className='my-3'>Contact Info</h3>
            <Nav className='flex-column'>
              <Nav.Item>
                <Nav.Link as={Link} to='/about'>About</Nav.Link>
                <Nav.Link as={Link} to='/careers'>Career</Nav.Link>
                <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className='bg-dark text-light  py-3 border-top'>
        <div className='text-center'>
          All Rights Reserved <strong> Tanvir Constructions Ltd</strong>. {new Date().getFullYear()}
        </div>
        <div className='text-center '>
          Designed and Development by{' '}
          <a href='/' className='text-danger fw-bold '>
            Tanvir Software solutions
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
