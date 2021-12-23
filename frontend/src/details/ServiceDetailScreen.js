import React, { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import { listServiceProductDetails } from '../redux/actions/serviceProductActions'

const ServiceDetailScreen = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const serviceProductDetails = useSelector((state) => state.serviceProductDetails)

  const { loading, error, serviceProduct } = serviceProductDetails

  useEffect(() => {
    dispatch(listServiceProductDetails(id))
  }, [dispatch, id])

  return (
    <div className='mt-5'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Banner title={serviceProduct.title} subtitle={serviceProduct.description} />

          <Container className='my-5'>
            <Row>
              <Col md={6}>
                {serviceProduct && (
                  <>
                    {serviceProduct.point?.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </>
                )}
              </Col>
              <Col md={6}>
                <Image src={serviceProduct.image} alt={serviceProduct.title} fluid />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  )
}

export default ServiceDetailScreen
