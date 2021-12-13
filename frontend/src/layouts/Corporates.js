import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../common/Loader'
import Message from '../common/Message'
import TopTitle from '../components/TopTitle'
import { listCorporate } from './../redux/actions/CorporateActions'

const Corporates = () => {
  const dispatch = useDispatch()

  const corporateList = useSelector((state) => state.corporateList)

  const { loading, error, corporates } = corporateList

  useEffect(() => {
    dispatch(listCorporate())
  }, [dispatch])

  return (
    <Container className='my-5'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {corporates.map((corporate) => (
              <Col xs={12} sm={6} key={corporate._id}>
                <TopTitle text={corporate.name} />
                <ol>
                  {corporate.description.map((items) => (
                    <li key={items}> {items} </li>
                  ))}
                </ol>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  )
}

export default Corporates
