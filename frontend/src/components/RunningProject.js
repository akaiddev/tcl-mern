import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const RunningProject = ({ runningProject }) => {
  return (
    <Card className='customCard card-profile'>
      <Card.Header className='card-header-image'>
        <Link to={`/running-project-details/${runningProject._id}`}>
          <Image fluid className='img' src={runningProject.image} alt={runningProject.client} title={runningProject.client} />
        </Link>
        <div
          className='colored-shadow'
          style={{ backgroundImage: 'url("https://zsuttonphoto.com/wp-content/uploads/2014/02/Albuquerque-Portrait-Photography-11.jpg")', opacity: 1 }}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>{runningProject.client}</Card.Title>
        <h6 className='card-category text-gray'>{runningProject.nameOfWork}</h6>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-between align-items-center '>
        <Link to={`/running-project-details/${runningProject._id}`} className='btn  fw-bold '>
          Explore <i className='fas fa-angle-right'></i>
        </Link>

        <small>
          <Rating value={runningProject.rating} text={` ${runningProject.numReviews} Reviews`} />
        </small>
      </Card.Footer>
    </Card>
  )
}

export default RunningProject
