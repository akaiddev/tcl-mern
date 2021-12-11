import React from 'react'
import { Carousel } from 'react-bootstrap'
import equipment1 from '../assets/equipments/1.jpg'
import equipment2 from '../assets/equipments/2.jpg'
import equipment4 from '../assets/equipments/4.jpg'

const HomeCarousel = () => {
  return (
    <Carousel pause='hover'>
      <Carousel.Item interval={1000}>
        <img className='d-block w-100' src={equipment1} alt='First slide' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='d-block w-100' src={equipment2} alt='Second slide' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={equipment4} alt='Third slide' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel
