import React from 'react'
import { Card, Image } from 'react-bootstrap'

const Management = ({ managementItem }) => {
  return (
    <Card className='border-0 m-1'>
      <Image src={managementItem.image} alt={managementItem.name} />
      <Card.Body>
        <Card.Title as='h4'>{managementItem.name}</Card.Title>
        <Card.Text as='h6'>
          <strong> Designation: </strong>
          {managementItem.designation}
        </Card.Text>
        <Card.Text as='h6'>
          <strong> Email: </strong> {managementItem.email}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Management
