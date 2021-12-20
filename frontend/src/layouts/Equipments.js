import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Equipment from '../components/Equipment'
import Loader from './../common/Loader'
import Message from './../common/Message'
import Paginate from './../components/Paginate'
import { listEquipment } from './../redux/actions/equipmentActions'

const Equipments = () => {
  const params = useParams()

  const keyword = params.keyword

  const pageNumber = params.pageNumber || 1

  const dispatch = useDispatch()

  const equipmentList = useSelector((state) => state.equipmentList)
  const { loading, error, equipments, page, pages } = equipmentList

  useEffect(() => {
    dispatch(listEquipment(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Container className='my-4'>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row>
              {equipments.map((equipment) => (
                <Col xs={12} sm={12} md={6} lg={6} xxl={6} key={equipment._id} className='my-3'>
                  <Equipment equipment={equipment} /> 
                </Col>
              ))}
            </Row>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
          </>
        )}
      </Container>
    </>
  )
}

export default Equipments
