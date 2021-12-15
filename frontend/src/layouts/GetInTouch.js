import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const GetInTouch = () => {
  return (
    <Container className='my-5 '>
      <Row>
        <ContactInfo />
        <ContactForm />
      </Row>
    </Container>
  )
}

export default GetInTouch
