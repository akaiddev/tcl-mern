import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const Equipment = ({ equipment }) => {
  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={equipment.image} alt={equipment.client} fluid='true' />

      <Card.Body>
        <Card.Text as='h4'>{equipment.nameOfEquipment}</Card.Text>
        <Card.Text as='h6'>Made In: {equipment.madeIn}</Card.Text>
        <Card.Text as='h6'>Model No: {equipment.modelNo}</Card.Text>
        <Card.Text as='h6'>Capacity: {equipment.capacity}</Card.Text>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between align-items-center '>
        <Link to={`/equipment-details/${equipment._id}`} className='btn fw-bold '>
          Explore <i className='fas fa-angle-right'></i>
        </Link>

        <small>
          <Rating value={equipment.rating} text={` ${equipment.numReviews} Reviews`} />
        </small>
      </Card.Footer>
    </Card>
  )
}

export default Equipment
