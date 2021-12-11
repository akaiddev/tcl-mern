import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import illustration_404 from '../assets/illustration_404.svg'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 3000)
  }, [navigate])

  return (
    <Container>
      <Row className='d-flex justify-content-center text-center  align-items-center vh-100 '>
        <Col xs={12} md={4}>
          <Card className='p-4'>
            <Card.Title as='h2'>Oops</Card.Title>
            <Card.Text>Sorry, The requested page doesn’t exist</Card.Text>
            <Card.Img src={illustration_404} variant='top' />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
