import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const JobPost = ({ career }) => {
  return (
    <Link to={`/career-datails/${career._id}`} className='text-decoration-none'>
      <Card className='shadow-sm'>
        <Card.Header className='bg-dark text-light'>
          <strong>Position:</strong> {career.position}
        </Card.Header>
        <Card.Body className='text-muted'>
          <Card.Title>{career.headline}</Card.Title>
          <Card.Text >
            <strong>Qualifications:</strong> {career.qualifications}
          </Card.Text>
          <Card.Text>
            <strong>Experience:</strong> {career.experience}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted'> <strong>Job Type:</strong> {career.type} </Card.Footer>
      </Card>
    </Link>
  )
}

export default JobPost
