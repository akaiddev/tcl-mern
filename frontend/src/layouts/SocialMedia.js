import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import socialMedias from '../data/socialMedias'

const SocialMedia = () => {
  return (
    <Container className='text-center'>
      <h1 className='text-center py-3'>Connect With Social Media</h1>

      <Row className='my-5 '>
        {socialMedias.map((socialMedia) => (
          <Col md={3} className={socialMedia.animation}>
            <a href={socialMedia.url} target='_blank' rel='noreferrer' className='text-decoration-none'>
              <h1 className={socialMedia.iconColor}>
                <i className={socialMedia.icon}></i>
              </h1>

              <h5>{socialMedia.name}</h5>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SocialMedia
