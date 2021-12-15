import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import JobPost from '../components/JobPost'
import careerData from '../data/careers'

const JobPosts = () => {
  return (
    <Container className='my-5'>
      <Row>
        {careerData.map((career) => (
          <Col key={career._id} xs={12} sm={6} md={6} lg={6} className='mb-3'>   
            <JobPost career={career} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default JobPosts
