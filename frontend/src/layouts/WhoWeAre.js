import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopTitle from '../components/TopTitle'

const WhoWeAre = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col xs={12} sm={12} className='mx-auto'>
          <TopTitle text='What We Do' />

          <p className='mb-2 text-justify'>
            Tanvir Constructions Ltd. (TCL) is one of the most promising construction companies in Bangladesh delivering high quality and innovative engineering solutions
            in the areafor road and airport constructions and maintenance as well asWater and Energy sector management. We also provide advisory services on
            Infrastructure Development Project.
          </p>
          <p>
            To serve the construction sector of the country and to manage the countrymost sensitive and large construction projects, TCL has acquiredremarkable numbers of
            specialized heavy Construction Machineries and branded Equipment around the globe.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default WhoWeAre
