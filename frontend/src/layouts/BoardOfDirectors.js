import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BoardOfDirector from '../components/BoardOfDirector'
import TopTitle from '../components/TopTitle'
import BoardOfDirectorsData from '../data/BoardOfDirectorsData'

const BoardOfDirectors = () => {
  return (
    <Container className='my-4'>
      <TopTitle text='BOARD OF DIRECTORS' />

      <Row>
        {BoardOfDirectorsData.map((BoardOfDirectorItem) => (
          <Col xs={12} sm={12} md={6} key={BoardOfDirectorItem._id} className='mt-2'>
            <BoardOfDirector BoardOfDirectorItem={BoardOfDirectorItem} />
          </Col>
        ))}
      </Row>
      <Row className='my-5'>
        <Col xs={12} sm={12} className='mx-auto'>
          <TopTitle text=' MESSAGE FROM THE MANAGING DIRECTOR' />

          <p className=' text-justify'>
            With the constant pursuit for operational excellence and relentless strive for business accomplishment,
            <strong>Tanvir Constructions Ltd</strong> . is now one of the growing construction firms in Bangladesh. As one of the promising construction company in
            Bangladesh, our corporate journey began in the early 2001 named as <strong>TANVIR TRADERS</strong>. Now we prepare to embark on the next chapter of our
            journey at a time when the Bangladesh is also embarking on its own nascent path towards prominence on the world business and economic stage. Our values built
            the foundation that carried us through a fantastic decade. Today, we remain committed to the same ideals and objectives that have driven our success over the
            last sixteen years. Zero compromise on quality, continuing innovation and improvement in business process, significant investment in human resources, and a
            strong commitment to maximizing value, these values are ingrained into our corporate culture and are followed in every aspect of our business operation. It
            gives us great pride to have been involved in projects of national importance. Our business excels only through the relationships we have built so far and by
            execution that promises a world-class standard. We believe in growing our business while enhancing the lives of people, everywhere we operate. Thanks to our
            loyal team of workers and professionals, we have succeeded in proving that we can deliver on our promises, we can rise to the challenge and excel in our
            performance to the satisfaction of our clients. Our major challenge today is to sustain the growth we generated till date. We are proud of our past and we
            have an active present and we look forward to a promising future. It is an absolute pleasure to introduce <strong>Tanvir Constructions Ltd</strong>.
          </p>
          <small>
            <h5 className='fw-bold'>Tanvir Ahmed</h5>
            <cite className='fw-bold'>Managing Director and CEO</cite>
          </small>
        </Col>
      </Row>
    </Container>
  )
}

export default BoardOfDirectors
