import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import Management from '../components/Management'
import { listManagement } from './../redux/actions/ManagementActions'

const ManagementScreen = () => {
  const dispatch = useDispatch()
  const managementList = useSelector((state) => state.managementList)
  const { loading, error, managements } = managementList

  useEffect(() => {
    dispatch(listManagement())
  }, [dispatch])

  return (
    <>
      <Banner
        title='Our Management Structure'
        subtitle='We recognize that our primary asset is our people, and that a truly successful company needs to be a rewarding work environment for its staff. Our organization is structured and managed to provide ample opportunity and encouragement for our team to reach their optimum potential. We believe that mutual respect forms the basis of our success'
      />
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row className='py-5'>
            {managements.map((managementItem) => (
              <Col xs={12} sm={6} md={4} lg={4} xl={3} key={managementItem._id}>
                <Management managementItem={managementItem} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  )
}

export default ManagementScreen
