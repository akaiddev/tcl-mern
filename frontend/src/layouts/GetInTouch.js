import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const GetInTouch = () => {
  return (
    <Container className='my-5 '>
      <Row>
        <Col xs={12} sm={12} md={12} lg={7} xl={7} className='animation-Left'>
          <Card>
            <Card.Body>
              <Card.Header as='h4' className='fw-bold py-3 bg-light text-center mb-3'>
                Contact us
              </Card.Header>

              <Card className='mb-2'>
                <Card.Body>
                  <Row>
                    <Col md={2}>
                      <h1 className='text-info display-3'>
                        <i className='fas fa-map-marker-alt'></i>
                      </h1>
                    </Col>
                    <Col md={10}>
                      <h5 className='fw-bold '> Head Office / Address </h5>
                      <p>House No: 24, Road 14, Block-G, Niketon, Gulshan, Dhaka-1212</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className='mb-2'>
                <Card.Body>
                  <Row>
                    <Col md={2}>
                      <h1 className='text-warning display-3'>
                        <i className='fas fa-phone-volume'></i>
                      </h1>
                    </Col>
                    <Col md={10}>
                      <h5 className='fw-bold '> Contact Number </h5>
                      <p>
                        <strong>Phone:</strong> 88 02 9841220 <strong>FAX:</strong> 88 02 9841221
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className='mb-2'>
                <Card.Body>
                  <Row>
                    <Col md={2}>
                      <h1 className='text-success display-3'>
                        <i className='fas fa-envelope'></i>
                      </h1>
                    </Col>
                    <Col md={10}>
                      <h5 className='fw-bold '> Mail Address </h5>
                      <p>
                        <a href='mailto:tanvirconstructionsltd@gmail.com'>tanvirconstructionsltd@gmail.com</a>
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
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
      </Row>
    </Container>
  )
}

export default GetInTouch
