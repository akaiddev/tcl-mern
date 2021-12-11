import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const PrivateProject = ({ privateProject }) => {
  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={privateProject.image} alt={privateProject.client} fluid='true' />

      <Card.Body>
        <Card.Text>{privateProject.nameOfWork}</Card.Text>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between align-items-center '>
        <Link to={`/private-project-details/${privateProject._id}`} className='btn  fw-bold '>
          More <i className='fas fa-angle-right'></i>
        </Link>

        <small>
          <Rating value={privateProject.rating} text={` ${privateProject.numReviews} Reviews`} />
        </small>
      </Card.Footer>
    </Card>
  )
}

export default PrivateProject
