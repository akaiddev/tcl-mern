import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import TopTitle from './TopTitle'

const ProductService = ({ serviceProduct }) => {
  return (
    <>
      <TopTitle text={serviceProduct.title} />
      <Card className='border-0'>
        <Card.Body>
          <Row>
            <Col md={8}>
              <Card.Text as='h5'>{serviceProduct.description}</Card.Text>
              <Card.Text as='ol'>
                {serviceProduct.point.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </Card.Text>
            </Col>
            <Col md={4}>
              <Card.Img variant='top' src={serviceProduct.image} alt={serviceProduct.title} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductService
