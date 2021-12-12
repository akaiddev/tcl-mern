import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import Paginate from '../components/Paginate'
import { createPrivateProject, deletePrivateProject, listPrivateProject } from '../redux/actions/privateProjectActions'
import { PRIVATE_PROJECT_CREATE_RESET } from '../redux/constants/privateProjectsConstants'

const PrivateProjectList = () => {
  const dispatch = useDispatch()

  let navigate = useNavigate()

  const params = useParams()

  const pageNumber = params.pageNumber || 1

  const privateProjectList = useSelector((state) => state.privateProjectList)
  const { loading, error, privateProjects, page, pages } = privateProjectList

  const privateProjectDelete = useSelector((state) => state.privateProjectDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = privateProjectDelete

  const privateProjectCreate = useSelector((state) => state.privateProjectCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, privateProject: createdPrivateProjeuct } = privateProjectCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: PRIVATE_PROJECT_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/private-project/${createdPrivateProjeuct._id}/edit`)
    } else {
      dispatch(listPrivateProject('', pageNumber))
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdPrivateProjeuct, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deletePrivateProject(id))
    }
  }

  const createPrivateProjectHandler = () => {
    dispatch(createPrivateProject())
  }

  return (
    <>
      <Banner title='All Private Project List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h1 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Private Project List
            </h1>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createPrivateProjectHandler}>
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
            <Table striped bordered hover variant='info' responsive size='sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Contact</th>
                  <th>Work Value </th>
                  <th>Client</th>
                  <th>Name Of Work</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {privateProjects.map((privateProject, index) => (
                  <tr key={privateProject._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image src={privateProject.image} fluid width='60' />
                    </td>
                    <td>{privateProject.contact}</td>
                    <td>{privateProject.valueOfWork}</td>
                    <td>{privateProject.client}</td>
                    <td>{privateProject.nameOfWork}</td>

                    <td>
                      <Link to={`/admin/private-project/${privateProject._id}/edit`}>
                        <Button variant='outline-dark' className='btn-sm rounded-circle'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant='outline-danger' className='btn-sm rounded-circle' onClick={() => deleteHandler(privateProject._id)}>
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

export default PrivateProjectList
