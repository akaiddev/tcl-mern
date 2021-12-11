import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import TopTitle from '../components/TopTitle'
import OverviewTextData from '../data/OverviewTexts'

const OverviewTexts = () => {
  return (
    <Container className='mt-5'>
      <TopTitle text='OVERVIEW OF TANVIR CONSTRUCTIONS LTD' />
      <Row>
        {OverviewTextData.map((OverviewText) => (
          <Col md={OverviewText.width} key={OverviewText._id} className={`${OverviewText.animation} mx-auto mb-2`}>
            <Card className='rounded-3'>
              <Card.Body>
                <Card.Text>
                  <strong>{OverviewText._id}.</strong> {OverviewText.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default OverviewTexts
