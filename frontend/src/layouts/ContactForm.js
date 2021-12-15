import React from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'

const ContactForm = () => {
  return (
    <Col xs={12} sm={12} md={12} lg={5} xl={5} className='animation-Right'>
      <Card>
        <Card.Body>
          <Form autoComplete='off'>
            <Card.Header as='h4' className='fw-bold py-3 bg-light text-center mb-3'>
              Get In Touch
            </Card.Header>
            <Form.Group className='mb-3' controlId='Subject'>
              <Form.Label>Your Subject</Form.Label>
              <Form.Control type='text' placeholder='Your Subject' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='Email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='your-mail@gmail.com' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='message'>
              <Form.Label>Your Message</Form.Label>
              <Form.Control as='textarea' rows={4} placeholder='Write something For Your Message' />
            </Form.Group>
            <Button variant='dark' className='col-6 rounded'>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ContactForm
