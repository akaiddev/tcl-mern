import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import OurCoreValues from '../data/OurCoreValues'

const OurCoreValue = () => {
  return (
    <Container className='animation-Left'>
      <Row>
        {OurCoreValues.map((coreValue) => (
          <Col key={coreValue._id}>
            <Card.Title as='h4' className='fw-bold'>
              {coreValue.name}
            </Card.Title>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Card.Text>{coreValue.description}</Card.Text>
                </Col>
                <Col md={6}>
                  <li className='list-unstyled'>
                    <i className='far fa-check-circle'></i> {coreValue.honesty}
                  </li>
                  <li className='list-unstyled'>
                    <i className='far fa-check-circle'></i> {coreValue.efficiency}
                  </li>
                  <li className='list-unstyled'>
                    <i className='far fa-check-circle'></i> {coreValue.accountability}
                  </li>
                  <li className='list-unstyled'>
                    <i className='far fa-check-circle'></i> {coreValue.transparency}
                  </li>
                  <li className='list-unstyled'>
                    <i className='far fa-check-circle'></i> {coreValue.innovation}
                  </li>
                  <li className='list-unstyled'>
                    <i className='far fa-check-circle'></i> {coreValue.security}
                  </li>
                  <li className='list-unstyled'>
                    <i className='far fa-check-circle'></i> {coreValue.technology}
                  </li>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default OurCoreValue
