import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const Equipment = ({ equipment }) => {
  return (
    <Card className=' customCard card-profile'>
      <Card.Header className=' card-header-image'>
        <Link to={`/private-project-details/${equipment._id}`}>
          <Image fluid className='img' src={equipment.image} alt={equipment.client} title={equipment.client} />
        </Link>
        <div
          className='colored-shadow'
          style={{ backgroundImage: 'url("https://zsuttonphoto.com/wp-content/uploads/2014/02/Albuquerque-Portrait-Photography-11.jpg")', opacity: 1 }}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>{equipment.client}</Card.Title>
        <h6 className='card-category text-gray'>{equipment.nameOfWork}</h6>
        <Card.Text as='h4'>{equipment.nameOfEquipment}</Card.Text>
        <Card.Text as='h6'>Made In: {equipment.madeIn}</Card.Text>
        <Card.Text as='h6'>Model No: {equipment.modelNo}</Card.Text>
        <Card.Text as='h6'>Capacity: {equipment.capacity}</Card.Text>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between align-items-center '>
        <Link to={`/equipment-details/${equipment._id}`} className='btn  fw-bold '>
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
