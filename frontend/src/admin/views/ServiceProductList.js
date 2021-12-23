import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import Banner from '../../components/Banner'
import { createServiceProduct, deleteServiceProduct, listServiceProduct } from '../../redux/actions/serviceProductActions'
import { SERVICE_PRODUCT_CREATE_RESET } from '../../redux/constants/serviceProductConstants'

const ServiceProductList = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const serviceProductList = useSelector((state) => state.serviceProductList)
  const { loading, error, serviceProducts } = serviceProductList

  const serviceProductDelete = useSelector((state) => state.serviceProductDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = serviceProductDelete

  const serviceProductCreate = useSelector((state) => state.serviceProductCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, serviceProduct: createdServiceProduct } = serviceProductCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: SERVICE_PRODUCT_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/service-product/${createdServiceProduct._id}/edit`)
    } else {
      dispatch(listServiceProduct())
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdServiceProduct])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteServiceProduct(id))
    }
  }

  const createServiceProductHandler = () => {
    dispatch(createServiceProduct())
  }

  return (
    <>
      <Banner title='Service Product List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h1 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Service Products List
            </h1>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createServiceProductHandler}>
              <i className='fas fa-plus'></i> Create a New Service Products
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
                  <th>#ID</th>
                  <th>Image</th>
                  <th>title</th>
                  <th>description</th>
                  <th>point</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {serviceProducts.map((serviceProduct, index) => (
                  <tr key={serviceProduct._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image src={serviceProduct.image} fluid width='60' />
                    </td>
                    <td>{serviceProduct.title}</td>
                    <td width='350'>{serviceProduct.description}</td>

                    <td>
                      <ol>
                        {serviceProduct.point.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    </td>
                    <td>
                      <Link to={`/admin/service-product/${serviceProduct._id}/edit`}>
                        <Button variant='outline-dark' className='btn-sm rounded-circle'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant='outline-danger' className='btn-sm rounded-circle' onClick={() => deleteHandler(serviceProduct._id)}>
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

export default ServiceProductList
