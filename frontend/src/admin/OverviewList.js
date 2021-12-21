import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import { createOverview, deleteOverview, listOverview } from './../redux/actions/OverviewActions'
import { OVERVIEW_CREATE_RESET } from './../redux/constants/OverviewConstants'

const OverviewList = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const overviewList = useSelector((state) => state.overviewList)
  const { loading, error, overviews } = overviewList

  const overviewDelete = useSelector((state) => state.overviewDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = overviewDelete

  const overviewCreate = useSelector((state) => state.overviewCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, overview: createdOverview } = overviewCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: OVERVIEW_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/overview/${createdOverview._id}/edit`)
    } else {
      dispatch(listOverview())
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdOverview])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteOverview(id))
    }
  }

  const createOverviewHandler = () => {
    dispatch(createOverview())
  }

  return (
    <>
      <Banner title='Overviews List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h1 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Overviews List
            </h1>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createOverviewHandler}>
              <i className='fas fa-plus'></i> Create a New Overviews
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
            <Table striped bordered hover variant='info' responsive size='sm' >
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>col</th>
                  <th>animation</th>
                  <th>Description</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {overviews.map((corporate, index) => (
                  <tr key={corporate._id}>
                    <td>{index + 1}</td>

                    <td>{corporate.col}</td>
                    <td width='180'>{corporate.animation}</td>
                    <td>
                      {corporate.description.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </td>

                    <td>
                      <Link to={`/admin/overview/${corporate._id}/edit`}>
                        <Button variant='outline-dark' className='btn-sm rounded-circle'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant='outline-danger' className='btn-sm rounded-circle' onClick={() => deleteHandler(corporate._id)}>
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

export default OverviewList
