import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import Rating from '../components/Rating'
import { createRunningProjectReview, listRunningProjectDetails } from '../redux/actions/runningProjectActions'

const PublicProjectDetailScreen = () => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const { id } = useParams()

  const dispatch = useDispatch()

  const runningProjectDetails = useSelector((state) => state.runningProjectDetails)
  const { loading, error, runningProject } = runningProjectDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const runningProjectReviewCreate = useSelector((state) => state.runningProjectReviewCreate)
  const { success: successRunningProjectReview, loading: loadingRunningProjectReview, error: errorRunningProjectReview } = runningProjectReviewCreate

  useEffect(() => {
    dispatch(listRunningProjectDetails(id))
  }, [dispatch, id, successRunningProjectReview])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createRunningProjectReview(id, { rating, comment }))
  }

  return (
    <>
      <Banner title={runningProject.contact} />

      <Container className='my-5'>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row>
              <Col sm={12} md={6} lg={8}>
                <Card>
                  <Card.Img variant='top' src={runningProject.image} />
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Card.Body>
                  <ListGroup variant='flush'>
                    <ListGroupItem>
                      <Card.Title className='fw-bold'>{runningProject.contact}</Card.Title>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text>valueOfWork: {runningProject.valueOfWork}</Card.Text>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text>valueOfWork: {runningProject.client}</Card.Text>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text>{runningProject.nameOfWork}</Card.Text>
                    </ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Footer as='div' className='d-flex justify-content-between align-items-center'>
                  <small>
                    <Rating value={runningProject.rating} text={` ${runningProject.numReviews} Reviews`} />
                  </small>
                </Card.Footer>
              </Col>
            </Row>

            <Card>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h2 className='fw-bold'>
                      <i className='fas fa-comments'></i> Reviews
                      <hr className='w-50 bg-info rounded-3' />
                    </h2>
                    {runningProject.reviews.length === 0 && <Message>No Reviews</Message>}
                    <ListGroup variant='flush'>
                      {runningProject.reviews.map((review) => (
                        <ListGroup.Item key={review._id}>
                          <strong>{review.name}</strong>
                          <Rating value={review.rating} />
                          <p>{review.createdAt.substring(0, 10)}</p>
                          <p>{review.comment}</p>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>

                  <Col md={6}>
                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        <h2 className='fw-bold'>
                          <i className='fas fa-pen-alt'></i> Write a Review
                          <hr className='w-50 bg-info rounded-3' />
                        </h2>

                        {successRunningProjectReview && <Message variant='success'>Review submitted successfully</Message>}
                        {loadingRunningProjectReview && <Loader />}
                        {errorRunningProjectReview && <Message variant='danger'>{errorRunningProjectReview}</Message>}
                        {userInfo ? (
                          <Form onSubmit={submitHandler}>
                            <Form.Group as={Row} className='mb-3' controlId='Rating'>
                              <Form.Label column sm='3'>
                                Rating
                              </Form.Label>
                              <Col sm='9'>
                                <Form.Control as='select' value={rating} onChange={(e) => setRating(e.target.value)}>
                                  <option value=''>Select...</option>
                                  <option value='1'>1 - Poor</option>
                                  <option value='2'>2 - Fair</option>
                                  <option value='3'>3 - Good</option>
                                  <option value='4'>4 - Very Good</option>
                                  <option value='5'>5 - Excellent</option>
                                </Form.Control>
                              </Col>
                            </Form.Group>

                            <Form.Group as={Row} className='mb-3' controlId='comment'>
                              <Form.Label column sm='3'>
                                Comment
                              </Form.Label>
                              <Col sm='9'>
                                <Form.Control as='textarea' rows={3} value={comment} onChange={(e) => setComment(e.target.value)} />
                              </Col>
                            </Form.Group>

                            <Form.Group as={Row} className='mb-3'>
                              <Col sm={{ span: 9, offset: 3 }}>
                                <Button disabled={loadingRunningProjectReview} type='submit' variant='outline-dark' className='w-50'>
                                  Submit
                                </Button>
                              </Col>
                            </Form.Group>
                          </Form>
                        ) : (
                          <Message>
                            Please <Link to='/login'>sign in</Link> to write a review{' '}
                          </Message>
                        )}
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </>
        )}
      </Container>
    </>
  )
}

export default PublicProjectDetailScreen
