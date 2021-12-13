import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import TopTitle from '../components/TopTitle'
import Loader from './../common/Loader'
import Message from './../common/Message'
import { listOverview } from './../redux/actions/OverviewActions'

const OverviewTexts = () => {
  const dispatch = useDispatch()

  const overviewList = useSelector((state) => state.overviewList)
  const { loading, error, overviews } = overviewList

  useEffect(() => {
    dispatch(listOverview())
  }, [dispatch])

  return (
    <Container className='mt-5'>
      <TopTitle text='OVERVIEW OF TANVIR CONSTRUCTIONS LTD' />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <Row>
          {overviews.map((OverviewText, index) => (
            <Col md={OverviewText.col} key={OverviewText._id} className={`${OverviewText.animation} mx-auto mb-2`}>
              <Card.Body>
                <Card.Text>
                  <strong>{index + 1}.</strong> {OverviewText.description}
                </Card.Text>
              </Card.Body>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default OverviewTexts
