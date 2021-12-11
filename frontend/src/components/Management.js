import React from 'react'
import { Card, Image } from 'react-bootstrap'

const Management = ({ managementItem }) => {
  return (
    <Card className='border-0 m-1'>
      <Image src={managementItem.image} alt={managementItem.name} />
      <Card.Body>
        <Card.Title className='fw-bold'>{managementItem.name}</Card.Title>
        <Card.Text>{managementItem.designation}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Management
