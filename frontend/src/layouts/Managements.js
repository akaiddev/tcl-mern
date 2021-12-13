import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Message from '../common/Message'
import Management from '../components/Management'
import TopTitle from '../components/TopTitle'
import Loader from './../common/Loader'
import { listManagement } from './../redux/actions/ManagementActions'

const Managements = () => {
  const dispatch = useDispatch()
  const managementList = useSelector((state) => state.managementList)
  const { loading, error, managements } = managementList

  useEffect(() => {
    dispatch(listManagement())
  }, [dispatch])

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: 'center',
    centerMode: true,
    centerPadding: '10rem',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Container className='mt-5'>
      <TopTitle text='MANAGEMENT STRUCTURE' />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Slider {...settings}>
          {managements.map((managementItem) => (
            <Col xs={12} sm={6} md={4} lg={4} key={managementItem._id} className='mb-3 '>
              <Management managementItem={managementItem} />
            </Col>
          ))}
        </Slider>
      )}
    </Container>
  )
}

export default Managements
