import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import PublicProject from '../components/PublicProject'
import { listTopPublicProjects } from '../redux/actions/publicProjectActions'

const TopRatedPublicProject = () => {
  const dispatch = useDispatch()

  const publicProjectTopRated = useSelector((state) => state.publicProjectTopRated)

  const { loading, error, publicProjects } = publicProjectTopRated

  useEffect(() => {
    dispatch(listTopPublicProjects())
  }, [dispatch])

  return (
    <div className='public-project'>
      <Container>
        <Row className='align-items-center my-2'>
          <Col>
            <h4 className='fw-bold'>
              <i className='fab fa-staylinked'></i> Our Complete Public Project
            </h4>
          </Col>
          <Col className='d-md-flex justify-content-md-end'>
            <Link to='/public-projects' className='btn btn-outline-danger btn-sm'>
              <i className='far fa-gem'></i> All Public Project
            </Link>
          </Col>
        </Row>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {publicProjects.map((publicProject) => (
              <Col xs={12} sm={6} md={6} lg={4} xl={3} xxl={3} key={publicProject._id} className='mb-4'>
                <PublicProject publicProject={publicProject} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  )
}

export default TopRatedPublicProject
