import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../common/Loader'
import Message from '../common/Message'
import RunningProject from '../components/RunningProject'
import { listRunningProject } from '../redux/actions/runningProjectActions'

const RunningProjects = () => {
  const dispatch = useDispatch()

  const runningProjectList = useSelector((state) => state.runningProjectList)
  const { loading, error, runningProjects } = runningProjectList

  useEffect(() => {
    dispatch(listRunningProject())
  }, [dispatch])

  return (
    <Container className='my-4'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {runningProjects.map((runningProject) => (
              <Col sm={12} md={6} lg={4} key={runningProject._id} className='my-3'>
                <RunningProject runningProject={runningProject} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  )
}

export default RunningProjects
