import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductService = ({ serviceProduct }) => {
  return (
    <div className='service-box'>
      <div className='service-icon'>
        <Image src={serviceProduct.image} alt='image' width='100' />
      </div>
      <div className='service-title mt-4 fw-bold'>{serviceProduct.title}</div>
      <div className='service-desc mb-3'>{serviceProduct.description}</div>

      <Link to={`/service-product-details/${serviceProduct._id}`} className='btn fw-bold btn-dark'>
        Explore <i className='fas fa-angle-right'></i>
      </Link>
    </div>
  )
}

export default ProductService
