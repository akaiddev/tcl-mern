import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footers from '../data/Footer'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          {Footers.map((ft) => (
            <Col sm={6} md={4} className='my-5' key={ft.title}>
              <h3 className='fw-bold '>{ft.title}</h3>

              <Nav className='flex-column'>
                {ft.description.map((item) => (
                  <Nav.Item key={item}>
                    <Nav.Link className='fw-bold ' as={Link} to='/'>
                      {item}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
          ))}
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
