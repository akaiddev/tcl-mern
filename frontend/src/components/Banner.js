import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = ({ title, subtitle }) => {
  return (
    <Container fluid className='banner'>
      <Row className='d-flex justify-content-center text-center pt-5 align-items-center' style={{ height: '30vh' }}>
        <Col xs={12} md={6}>
          <h2 className='fw-bold text-uppercase'>{title}</h2>
          <h6 className='fw-bold'>{subtitle}</h6>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner
