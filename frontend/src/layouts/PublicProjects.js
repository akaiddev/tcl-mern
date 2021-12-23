import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Paginate from '../components/Paginate'
import PublicProject from '../components/PublicProject'
import { listPublicProject } from '../redux/actions/publicProjectActions'

const PublicProjects = () => {
  const params = useParams()

  const keyword = params.keyword

  const pageNumber = params.pageNumber || 1

  const dispatch = useDispatch()

  const publicProjectList = useSelector((state) => state.publicProjectList)
  const { loading, error, publicProjects, page, pages } = publicProjectList

  useEffect(() => {
    dispatch(listPublicProject(keyword, pageNumber))
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
            {publicProjects.map((publicProject) => (
              <Col xs={12} sm={12} md={6} lg={6} xl={4}  key={publicProject._id} className='my-3'>
                <PublicProject publicProject={publicProject} />
              </Col>
            ))}
          </Row>

          <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </>
      )}
    </Container>
  )
}

export default PublicProjects
