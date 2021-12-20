import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import Paginate from '../components/Paginate'
import { createRunningProject, deleteRunningProject, listRunningProject } from '../redux/actions/runningProjectActions'
import { RUNNING_PROJECT_CREATE_RESET } from '../redux/constants/runningProjectConstants'

const RunningProjectList = () => {
  const params = useParams()

  const pageNumber = params.pageNumber || 1

  const dispatch = useDispatch()

  let navigate = useNavigate()

  const runningProjectList = useSelector((state) => state.runningProjectList)
  const { loading, error, runningProjects, page, pages } = runningProjectList

  const runningProjectDelete = useSelector((state) => state.runningProjectDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = runningProjectDelete

  const runningProjectCreate = useSelector((state) => state.runningProjectCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, runningProject: createdRunningProject } = runningProjectCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: RUNNING_PROJECT_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/running-project/${createdRunningProject._id}/edit`)
    } else {
      dispatch(listRunningProject('', pageNumber))
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdRunningProject, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteRunningProject(id))
    }
  }

  const createRunningProjectHandler = () => {
    dispatch(createRunningProject())
  }

  return (
    <>
      <Banner title='All Running Project List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h1 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Running Project List
            </h1>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createRunningProjectHandler}>
              <i className='fas fa-plus'></i> Create a New Project
            </Button>
          </Col>
        </Row>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Table striped bordered hover variant='info' responsive size='sm' className='text-center'>
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Image</th>
                  <th>Contact</th>
                  <th>Work Value</th>
                  <th>Client</th>
                  <th>Name Of Work</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {runningProjects.map((runningProject, index) => (
                  <tr key={runningProject._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image src={runningProject.image} fluid width='60' />
                    </td>
                    <td>{runningProject.contact}</td>
                    <td>{runningProject.valueOfWork}</td>

                    <td>{runningProject.client}</td>
                    <td>{runningProject.nameOfWork}</td>

                    <td>
                      <Link to={`/admin/running-project/${runningProject._id}/edit`}>
                        <Button variant='outline-dark' className='btn-sm rounded-circle'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant='outline-danger' className='btn-sm rounded-circle' onClick={() => deleteHandler(runningProject._id)}>
                        <i className='fas fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Paginate pages={pages} page={page} />
          </>
        )}
      </Container>
    </>
  )
}

export default RunningProjectList
