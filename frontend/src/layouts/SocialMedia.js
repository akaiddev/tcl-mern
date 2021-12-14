import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SocialMedia = () => {
  return (
    <Container className='text-center'>
      <h1 className='text-center py-3'>Connect With Social Media</h1>

      <Row className='my-5 '>
        <Col md={3} className='animation-Left '>
          <a href='https://www.facebook.com' target='_blank' rel='noreferrer' className='text-decoration-none'>
            <h1 className='text-success '>
              <i className='fab fa-facebook'></i>
            </h1>

            <h5>Facebook</h5>
          </a>
        </Col>
        <Col md={3} className='animation-Top '>
          <a href='https://mobile.twitter.com/login' target='_blank' rel='noreferrer' className='text-decoration-none'>
            <h1 className='text-info'>
              <i className='fab fa-twitter'></i>
            </h1>
            <h5>twitter</h5>
          </a>
        </Col>
        <Col md={3} className='animation-Right'>
          <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer' className='text-decoration-none'>
            <h1 className='text-success'>
              <i className='fab fa-linkedin-in'></i>
            </h1>
            <h5>linkedin</h5>
          </a>
        </Col>
        <Col md={3} className='animation-Buttom'>
          <a href='https://www.youtube.com/' target='_blank' rel='noreferrer' className='text-decoration-none'>
            <h1 className='text-danger '>
              <i className='fab fa-youtube'></i>
            </h1>
            <h5>youtube</h5>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default SocialMedia
