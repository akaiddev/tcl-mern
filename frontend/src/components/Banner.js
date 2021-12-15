import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = ({ title, subtitle }) => {
  return (
    <Container fluid className='banner'>
      <Row className='d-flex justify-content-center text-center mt-5 align-items-center' style={{ height: '30vh' }}>
        <Col xs={12} md={6}>
          <h2 className='fw-bold text-uppercase text-light'>{title}</h2>
          <h6 className='fw-bold text-light'>{subtitle}</h6>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner
