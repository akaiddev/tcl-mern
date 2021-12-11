import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const PublicProject = ({ publicProject }) => {
  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={publicProject.image} alt={publicProject.client} fluid='true' />

      <Card.Body>
        <Card.Text>{publicProject.nameOfWork}</Card.Text>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between align-items-center '>
        <Link to={`/public-project-details/${publicProject._id}`} className='btn fw-bold '>
          More <i className='fas fa-angle-right'></i>
        </Link>

        <small>
          <Rating value={publicProject.rating} text={` ${publicProject.numReviews} Reviews`} />
        </small>
      </Card.Footer>
    </Card>
  )
}

export default PublicProject
