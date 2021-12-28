import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import Banner from '../../components/Banner'
import { createCorporate, deleteCorporate, listCorporate } from '../../redux/actions/CorporateActions'
import { CORPORATE_CREATE_RESET } from '../../redux/constants/CorporateConstants'

const CorporateList = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const corporateList = useSelector((state) => state.corporateList)
  const { loading, error, corporates } = corporateList

  const corporateDelete = useSelector((state) => state.corporateDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = corporateDelete

  const corporateCreate = useSelector((state) => state.corporateCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, corporate: createdCorporate } = corporateCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: CORPORATE_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/corporate/${createdCorporate._id}/edit`)
    } else {
      dispatch(listCorporate())
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdCorporate])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteCorporate(id))
    }
  }

  const createCorporateHandler = () => {
    dispatch(createCorporate())
  }

  return (
    <>
      <Banner title='Corporate List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h3 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Corporates List
            </h3>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createCorporateHandler}>
              <i className='fas fa-plus'></i> Create a New Corporates
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
                  <th>name</th>
                  <th>Description</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {corporates.map((corporate, index) => (
                  <tr key={corporate._id}>
                    <td>{index + 1}</td>

                    <td>{corporate.name}</td>
                    <td>
                      <ol>
                        {corporate.description.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    </td>

                    <td>
                      <Link to={`/admin/corporate/${corporate._id}/edit`}>
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

export default CorporateList
