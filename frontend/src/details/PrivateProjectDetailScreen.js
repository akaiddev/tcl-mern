import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import Rating from '../components/Rating'
import { createPrivateProjectReview, listPrivateProjectDetails } from '../redux/actions/privateProjectActions'

const PrivateProjectDetailScreen = () => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const { id } = useParams()

  const dispatch = useDispatch()

  const privateProjectDetails = useSelector((state) => state.privateProjectDetails)
  const { loading, error, privateProject } = privateProjectDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const privateProjectReviewCreate = useSelector((state) => state.privateProjectReviewCreate)
  const { success: successPrivateProjectReview, loading: loadingPrivateProjectReview, error: errorPrivateProjectReview } = privateProjectReviewCreate

  useEffect(() => {
    dispatch(listPrivateProjectDetails(id))
  }, [dispatch, id, successPrivateProjectReview])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createPrivateProjectReview(id, { rating, comment }))
  }

  return (
    <>
      <Banner title={privateProject.contact} subtitle={privateProject.nameOfWork} />

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
                  <Card.Img variant='top' src={privateProject.image} />
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Card.Body>
                  <ListGroup variant='flush'>
                    <ListGroupItem>
                      <Card.Title className='fw-bold'>{privateProject.contact}</Card.Title>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text>Value Of Work: {privateProject.valueOfWork}</Card.Text>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text>Client: {privateProject.client}</Card.Text>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text>{privateProject.nameOfWork}</Card.Text>
                    </ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Footer as='div' className='d-flex justify-content-between align-items-center'>
                  <small>
                    <Rating value={privateProject.rating} text={` ${privateProject.numReviews} Reviews`} />
                  </small>
                </Card.Footer>
              </Col>
            </Row>

            <Card  className='my-3'>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h4 className='fw-bold'>
                      <i className='fas fa-comments'></i> Reviews
                      <hr className='w-50 bg-info rounded-3' />
                    </h4>
                    {privateProject.reviews.length === 0 && <Message>No Reviews</Message>}
                    <ListGroup variant='flush'>
                      {privateProject.reviews.map((review) => (
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
                        <h4 className='fw-bold'>
                          <i className='fas fa-pen-alt'></i> Write a Review
                          <hr className='w-50 bg-info rounded-3' />
                        </h4>

                        {successPrivateProjectReview && <Message variant='success'>Review submitted successfully</Message>}
                        {loadingPrivateProjectReview && <Loader />}
                        {errorPrivateProjectReview && <Message variant='danger'>{errorPrivateProjectReview}</Message>}
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
                                <Button disabled={loadingPrivateProjectReview} type='submit' variant='outline-dark' className='w-50'>
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

export default PrivateProjectDetailScreen
