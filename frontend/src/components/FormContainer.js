import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='d-flex justify-content-center  align-items-center vh-100'>
        <Col xs={12} ms={12} md={8} lg={7} xl={7} xxl={7}>
          <Card border='light' className='shadow px-3'>
            <Card.Body>{children}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
