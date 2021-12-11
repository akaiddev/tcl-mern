import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import GalleriesData from '../data/GalleriesData'

const Galleries = () => {
  return (
    <Container fluid={true} className='my-4'>
      <Row className='g-2'>
        {GalleriesData.map((items) => (
          <Col xs={12} md={4} lg={3} key={items._id}>
            <Image src={items.image} fluid={true} thumbnail />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Galleries
