import React from 'react'
import { ButtonGroup, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const RunningProject = ({ runningProject }) => {
  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={runningProject.image} alt={runningProject.client} fluid='true' />

      <Card.Body>
        <Card.Text>{runningProject.nameOfWork}</Card.Text>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between align-items-center '>
        <ButtonGroup>
          <Link to={`/running-project-details/${runningProject._id}`} className='btn fw-bold '>
          Explore <i className='fas fa-angle-right'></i>
          </Link>
        </ButtonGroup>
        <small>
          <Rating value={runningProject.rating} text={` ${runningProject.numReviews} Reviews`} />
        </small>
      </Card.Footer>
    </Card>
  )
}

export default RunningProject
