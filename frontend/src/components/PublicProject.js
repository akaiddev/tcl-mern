import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const PublicProject = ({ publicProject }) => {
  return (
    <Card className='card-profile'>
      <Card.Header className='card-header-image'>
        <Link to={`/public-project-details/${publicProject._id}`}>
          <Image fluid className='img' src={publicProject.image} alt={publicProject.client} title={publicProject.client} />
        </Link>
        <div
          className='colored-shadow'
          style={{ backgroundImage: 'url("https://zsuttonphoto.com/wp-content/uploads/2014/02/Albuquerque-Portrait-Photography-11.jpg")', opacity: 1 }}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>{publicProject.client}</Card.Title>
        <h6 className='card-category text-gray'>{publicProject.nameOfWork}</h6>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between align-items-center '>
        <Link to={`/private-project-details/${publicProject._id}`} className='btn  fw-bold '>
          Explore <i className='fas fa-angle-right'></i>
        </Link>

        <small>
          <Rating value={publicProject.rating} text={` ${publicProject.numReviews} Reviews`} />
        </small>
      </Card.Footer>
    </Card>
  )
}

export default PublicProject
