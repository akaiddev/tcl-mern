import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import JobPost from '../components/JobPost'
import Loader from './../common/Loader'
import Message from './../common/Message'
import { listCareer } from './../redux/actions/CareerActions'

const JobPosts = () => {
  const dispatch = useDispatch()

  const careerList = useSelector((state) => state.careerList)

  const { loading, error, careers } = careerList

  useEffect(() => {
    dispatch(listCareer())
  }, [dispatch])

  return (
    <Container className='my-5'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <Row>
          {careers.map((career) => (
            <Col key={career._id} xs={12} sm={4} md={4} lg={4} className='my-3'>
              <JobPost career={career} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default JobPosts
