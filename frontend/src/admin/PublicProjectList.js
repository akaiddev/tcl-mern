import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import Paginate from '../components/Paginate'
import { createPublicProject, deletePublicProject, listPublicProject } from '../redux/actions/publicProjectActions'
import { PUBLIC_PROJECT_CREATE_RESET } from '../redux/constants/publicProjectConstants'

const PublicProjectList = () => {
  const params = useParams()

  const pageNumber = params.pageNumber || 1

  const dispatch = useDispatch()

  let navigate = useNavigate()

  const publicProjectList = useSelector((state) => state.publicProjectList)
  const { loading, error, publicProjects, page, pages } = publicProjectList

  const publicProjectDelete = useSelector((state) => state.publicProjectDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = publicProjectDelete

  const publicProjectCreate = useSelector((state) => state.publicProjectCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, publicProject: createdPublicProject } = publicProjectCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: PUBLIC_PROJECT_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/public-project/${createdPublicProject._id}/edit`)
    } else {
      dispatch(listPublicProject('', pageNumber))
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdPublicProject, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deletePublicProject(id))
    }
  }

  const createPublicProjectHandler = () => {
    dispatch(createPublicProject())
  }

  return (
    <>
      <Banner title='All Public Project List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h1 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Public Project List
            </h1>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createPublicProjectHandler}>
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
                  <th>name Of Work</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {publicProjects.map((publicProject, index) => (
                  <tr key={publicProject._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image src={publicProject.image} fluid width='60' />
                    </td>
                    <td>{publicProject.contact}</td>
                    <td>{publicProject.valueOfWork}</td>
                    <td>{publicProject.client}</td>
                    <td>{publicProject.nameOfWork}</td>
                    <td>
                      <Link to={`/admin/public-project/${publicProject._id}/edit`}>
                        <Button variant='outline-dark' className='btn-sm rounded-circle'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant='outline-danger' className='btn-sm rounded-circle' onClick={() => deleteHandler(publicProject._id)}>
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

export default PublicProjectList
