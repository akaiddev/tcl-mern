import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const WhoWeAre = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col sm={12} className='section-head'>
          <h4>
            <span>What We </span> Do?
          </h4>
          <p className='mb-2 text-justify'>
            Tanvir Constructions Ltd. (TCL) is one of the most promising construction companies in Bangladesh delivering high quality and innovative engineering solutions
            in the areafor road and airport constructions and maintenance as well asWater and Energy sector management. We also provide advisory services on
            Infrastructure Development Project. <br /> To serve the construction sector of the country and to manage the countrymost sensitive and large construction
            projects, TCL has acquiredremarkable numbers of specialized heavy Construction Machineries and branded Equipment around the globe.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default WhoWeAre
