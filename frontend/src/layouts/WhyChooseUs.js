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
            <h4 className='fw-bold'>
              <span>Why Work With</span> Tanvir Constructions Ltd?
            </h4>
          </Col>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              {corporates.map((corporate , index) => (
                <Col xs={12}  key={index}>
                  <div className='item'>
                    <h4>{index + 1}. <span>{corporate.name}</span> </h4>
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
