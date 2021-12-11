import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../common/Loader'
import Message from '../common/Message'
import ProductService from '../components/ProductService'
import { listServiceProduct } from './../redux/actions/serviceProductActions'

const ProductServices = () => {
  const dispatch = useDispatch()

  const serviceProductList = useSelector((state) => state.serviceProductList)
  const { loading, error, serviceProducts } = serviceProductList

  useEffect(() => {
    dispatch(listServiceProduct())
  }, [dispatch])

  return (
    <Container className='my-4'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row className='g-0'>
            {serviceProducts.map((serviceProduct) => (
              <Col md={12} key={serviceProduct._id} className='my-2'>
                <ProductService serviceProduct={serviceProduct} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  )
}

export default ProductServices
