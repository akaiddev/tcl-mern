import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const PrivateProject = ({ privateProject }) => {
  return (
    <Card className='card-profile'>
      <Card.Header className=' card-header-image'>
        <Link to={`/public-project-details/${privateProject._id}`}>
          <Image fluid className='img' src={privateProject.image} alt={privateProject.client} title={privateProject.client} />
        </Link>
        <div
          className='colored-shadow'
          style={{ backgroundImage: 'url("https://zsuttonphoto.com/wp-content/uploads/2014/02/Albuquerque-Portrait-Photography-11.jpg")', opacity: 1 }}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>{privateProject.client}</Card.Title>
        <h6 className='card-category text-gray'>{privateProject.nameOfWork}</h6>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between align-items-center '>
        <Link to={`/private-project-details/${privateProject._id}`} className='btn  fw-bold '>
          Explore <i className='fas fa-angle-right'></i>
        </Link>

        <small>
          <Rating value={privateProject.rating} text={` ${privateProject.numReviews} Reviews`} />
        </small>
      </Card.Footer>
    </Card>
  )
}

export default PrivateProject
