import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductService from '../components/ProductService'
import Loader from './../common/Loader'
import Message from './../common/Message'
import Banner from './../components/Banner'
import WhoWeAre from './../layouts/WhoWeAre'
import { listServiceProduct } from './../redux/actions/serviceProductActions'

const ServiceScreen = () => {
  const dispatch = useDispatch()

  const serviceProductList = useSelector((state) => state.serviceProductList)
  const { loading, error, serviceProducts } = serviceProductList

  useEffect(() => {
    dispatch(listServiceProduct())
  }, [dispatch])

  return (
    <>
      <Banner title='Our Service And Product' subtitle='TCL is a reputed civil engineering company operating in Bangladesh' />

      <WhoWeAre />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div className='services-section'>
            <div className='inner-width'>
              <div className='services-container'>
                {serviceProducts.map((serviceProduct) => (
                  <ProductService serviceProduct={serviceProduct} key={serviceProduct._id} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ServiceScreen
