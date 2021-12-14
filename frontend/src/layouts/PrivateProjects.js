import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Paginate from '../components/Paginate'
import PrivateProject from '../components/PrivateProject'
import { listPrivateProject } from '../redux/actions/privateProjectActions'

const PrivateProjects = () => {
  const params = useParams()

  const keyword = params.keyword

  const pageNumber = params.pageNumber || 1

  const dispatch = useDispatch()

  const privateProjectList = useSelector((state) => state.privateProjectList)
  const { loading, error, privateProjects, page, pages } = privateProjectList

  useEffect(() => {
    dispatch(listPrivateProject(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <Container className='my-4'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {privateProjects.map((privateProject) => (
              <Col sm={12} md={6} lg={4}  key={privateProject._id}>
                <PrivateProject privateProject={privateProject} />
              </Col>
            ))}
          </Row>

          <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </>
      )}
    </Container>
  )
}

export default PrivateProjects
