import React, { useEffect } from 'react'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Loader from '../common/Loader'
import Message from '../common/Message'
import { listContactInfo } from '../redux/actions/contactInfoActions'

const Footer = () => {
  const dispatch = useDispatch()

  const contactInfoList = useSelector((state) => state.contactInfoList)
  const { loading, error, contactInfos } = contactInfoList

  useEffect(() => {
    dispatch(listContactInfo())
  }, [dispatch])

  return (
    <div className='footer'>
      <Container>
        <Row className='py-5'>
          <Col xs={12} sm={12} md={12} lg={4} className='text-md-center'>
            <Image src={logo} alt='logo' className='d-inline-block align-top img-fluid' />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <h5 className='my-3  fw-bold'>Contact Info</h5>
            
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

            {contactInfos.map((contactInfo) => (
              <p key={contactInfo._id} className=' fw-bold'>
                {contactInfo.description}
              </p>
            ))}
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <h5 className='my-3 fw-bold '>Importent Link</h5>
            <Nav className='flex-column fw-bold '>
              <Nav.Item >
                <Nav.Link as={Link} to='/about' >
                  About
                </Nav.Link>
                <Nav.Link as={Link} to='/management'>
                  Management
                </Nav.Link>
                <Nav.Link as={Link} to='/careers'>
                  Career
                </Nav.Link>
                <Nav.Link as={Link} to='/contact'>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className='bg-info text-light  py-2'>
        <div className='text-center'>
          All Rights Reserved <strong> <span className='text-danger fw-bold'> Tanvir </span> Constructions Ltd</strong>. {new Date().getFullYear()}
        </div>
        <div className='text-center '>
          Designed and Development by{' '}
          <a href='https://akaid.herokuapp.com' target='_blank' rel='noreferrer' className='text-dark fw-bold '>
            <cite> Abdur Rahman </cite>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
