import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import Banner from '../../components/Banner'
import { createManagement, deleteManagement, listManagement } from '../../redux/actions/ManagementActions'
import { MANAGEMENT_CREATE_RESET } from '../../redux/constants/ManagementConstants'

const ManagementList = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const managementList = useSelector((state) => state.managementList)
  const { loading, error, managements } = managementList

  const managementDelete = useSelector((state) => state.managementDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = managementDelete

  const managementCreate = useSelector((state) => state.managementCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, management: createdManagementCreate } = managementCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: MANAGEMENT_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/management/${createdManagementCreate._id}/edit`)
    } else {
      dispatch(listManagement())
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdManagementCreate])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteManagement(id))
    }
  }

  const createManagementHandler = () => {
    dispatch(createManagement())
  }

  return (
    <>
      <Banner title=' Management List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h1 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Management List
            </h1>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createManagementHandler}>
              <i className='fas fa-plus'></i> Create a New Management Membar
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
                  <th>name</th>
                  <th>Email</th>
                  <th>Designation</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {managements.map((management, index) => (
                  <tr key={management._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image src={management.image} fluid width='40' className='rounded-circle' />
                    </td>
                    <td>{management.name}</td>
                    <td>{management.email}</td>
                    <td>{management.designation}</td>

                    <td>
                      <Link to={`/admin/management/${management._id}/edit`}>
                        <Button variant='outline-dark' className='btn-sm rounded-circle'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant='outline-danger' className='btn-sm rounded-circle' onClick={() => deleteHandler(management._id)}>
                        <i className='fas fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Container>
    </>
  )
}

export default ManagementList
