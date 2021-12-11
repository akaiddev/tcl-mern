import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopTitle from '../components/TopTitle'
import CorporateData from '../data/CorporateData'

const Corporates = () => {
  return (
    <Container className='my-5'>
      <Row>
        {CorporateData.map((corporate) => (
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
    </Container>
  )
}

export default Corporates
