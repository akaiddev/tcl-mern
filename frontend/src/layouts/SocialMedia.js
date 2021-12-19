import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import socialMedias from '../data/socialMedias'

const SocialMedia = () => {
  return (
    <Container className='text-center'>
      
      <Row className='py-5'>
        {socialMedias.map((socialMedia, index) => (
          <Col md={3} className={socialMedia.animation} key={index}>
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
