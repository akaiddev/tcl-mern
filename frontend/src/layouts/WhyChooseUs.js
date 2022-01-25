import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './../common/Loader'
import Message from './../common/Message'
import { listCorporate } from './../redux/actions/CorporateActions'

const WhyChooseUs = () => {
  const dispatch = useDispatch()

  const corporateList = useSelector((state) => state.corporateList)

  const { loading, error, corporates } = corporateList

  useEffect(() => {
    dispatch(listCorporate())
  }, [dispatch])

  return (
    <div className='feat bg-gray pt-5 pb-5'>
      <Container>
        <Row>
          <Col sm={12} className='section-head'>
            <h4>
              <span>Why Choose</span> Us?
            </h4>
          </Col>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              {corporates.map((corporate) => (
                <Col sm={6} lg={4}>
                  <div className='item'>
                    <span className='icon feature_box_col_one'>
                      <i className='fa fa-globe' />
                    </span>
                    <h6>{corporate.name}</h6>
                    <p>{corporate.description.map((items) => items)}</p>
                  </div>
                </Col>
              ))}
            </>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default WhyChooseUs
