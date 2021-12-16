import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import { listCareerDetails } from './../redux/actions/CareerActions'

const CareerDetailScreen = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const careerDetails = useSelector((state) => state.careerDetails)

  const { loading, error, career } = careerDetails

  useEffect(() => {
    dispatch(listCareerDetails(id))
  }, [dispatch, id])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Banner title={career.position} subtitle={career.headline} />

          <Container className='my-5'>
            <Row className='d-flex justify-content-center'>
              <Col md={6}>
                <Card>
                  <Card.Header as='h5'>Position: {career.position}</Card.Header>
                  <Card.Body>
                    <Card.Title>{career.headline}</Card.Title>
                    <Card.Text>Skills: {career.skills}</Card.Text>
                    <Card.Text>Description: {career.description} </Card.Text>
                    <Card.Text>Type: {career.type} </Card.Text>
                    <Card.Text>Qualifications: {career.qualifications} </Card.Text>
                    <Card.Text>Experience: {career.experience} </Card.Text>
                    <Card.Text>Salary:  {career.salary} </Card.Text>
                    <Button variant='info'>Go Application</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  )
}

export default CareerDetailScreen
