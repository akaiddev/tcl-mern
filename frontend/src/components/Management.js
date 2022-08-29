import React from 'react'
import { Card, Image } from 'react-bootstrap'

const Management = ({ managementItem }) => {
  return (
    <Card className='customCard card-profile'>
      <Card.Header className='card-header-image'>
        <Image fluid className='img' src={managementItem.image} alt={managementItem.client} title={managementItem.client} />

        <div
          className='colored-shadow'
          style={{ backgroundImage: 'url("https://zsuttonphoto.com/wp-content/uploads/2014/02/Albuquerque-Portrait-Photography-11.jpg")', opacity: 1 }}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title> {managementItem.name}</Card.Title>
        <Card.Text as='h6' className='card-category text-gray'>
          {managementItem.designation}
        </Card.Text>
        <Card.Text as='h6' className='card-category text-gray'>
          {managementItem.email}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Management
