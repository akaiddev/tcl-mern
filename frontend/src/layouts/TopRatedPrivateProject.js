import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import PrivateProject from '../components/PrivateProject'
import { listTopPrivateProjects } from '../redux/actions/privateProjectActions'

const TopRatedPrivateProject = () => {
  const dispatch = useDispatch()

  const privateProjectTopRated = useSelector((state) => state.privateProjectTopRated)

  const { loading, error, privateProjects } = privateProjectTopRated

  useEffect(() => {
    dispatch(listTopPrivateProjects())
  }, [dispatch])

  return (
    <div className='private-project'>
      <Container className='my-4'>
        <Row className='align-items-center my-2'>
          <Col>
            <h4 className='fw-bold'>
              <i className='fab fa-staylinked'></i> Our Complete Private Project
            </h4>
          </Col>
          <Col className='d-md-flex justify-content-md-end'>
            <Link to='/private-projects' className='btn btn-outline-danger btn-sm'>
              <i className='far fa-gem'></i> All Private Project
            </Link>
          </Col>
        </Row>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {privateProjects.map((privateProject) => (
              <Col xs={12} sm={12} md={6} lg={6} xl={4} key={privateProject._id}>
                <PrivateProject privateProject={privateProject} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  )
}

export default TopRatedPrivateProject
