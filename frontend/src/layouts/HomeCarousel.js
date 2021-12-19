import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from './../common/Loader'
import Message from './../common/Message'
import { listTopRunningProjects } from './../redux/actions/runningProjectActions'

const HomeCarousel = () => {
  const dispatch = useDispatch()

  const runningProjectTopRated = useSelector((state) => state.runningProjectTopRated)

  const { loading, error, runningProjects } = runningProjectTopRated

  useEffect(() => {
    dispatch(listTopRunningProjects())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'> {error} </Message>
  ) : (
    <Carousel pause='hover'>
      {runningProjects.map((runningProject, index) => (
        <Carousel.Item interval={1000} key={index}>
          <Image className='d-block w-100' src={runningProject.image} alt='First slide' />
          <Carousel.Caption>
            <h3 className='text-light'>Client: {runningProject.client} || Contact: {runningProject.contact}</h3>
            <p>{runningProject.nameOfWork}</p>
            <Link to='/running-project' className='btn bg-dark text-light'>More Running Project</Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default HomeCarousel
