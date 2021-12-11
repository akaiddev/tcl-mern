import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TopTitle = ({ text, link, title }) => {
  return (
    <Row className='align-items-center shadow-sm px-2 my-2 g-1 rounded-2'>
      <Col md={8}>
        <h4 className='fw-bold my-3  text-uppercase border-0 '>{text}</h4>
      </Col>

      {link && (
        <Col md={4} className='d-md-flex justify-content-md-end'>
          <Link to={link} className='btn btn-outline-danger btn-sm'>
            {title}
          </Link>
        </Col>
      )}
    </Row>
  )
}

export default TopTitle
