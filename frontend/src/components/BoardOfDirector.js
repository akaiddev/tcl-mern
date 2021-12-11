import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const BoardOfDirector = ({ BoardOfDirectorItem }) => {
  return (
    <Card className='h-100 border-0'>
      <Row className='g-0'>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <Card.Img src={BoardOfDirectorItem.image} alt={BoardOfDirectorItem.name} fluid='true' />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <Card.Body>
            <Card.Title className='fw-bold'>{BoardOfDirectorItem.name}</Card.Title>
            <Card.Text className='fw-bold'>{BoardOfDirectorItem.designation}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default BoardOfDirector
