import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import loginImg from '../assets/accounts/illustration_login.png'
import Loader from '../common/Loader'
import Message from '../common/Message'
import { login } from '../redux/actions/userActions'
import Banner from './../components/Banner'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRevealPwd, setIsRevealPwd] = useState(false)

  let navigate = useNavigate()

  let location = useLocation()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <Banner title='Login' />

      <Container className='my-5'>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Image src={loginImg} alt='login' />
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} className='my-5'>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

            <Form onSubmit={submitHandler} autoComplete='off'>
              <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
                <Form.Label column sm='3'>
                  Email
                </Form.Label>
                <Col sm='9'>
                  <Form.Control type='email' placeholder='your-mail@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
                <Form.Label column sm='3'>
                  Password
                </Form.Label>
                <Col sm='9'>
                  <Form.Control type={isRevealPwd ? 'text' : 'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className='mb-3' controlId='formBasicCheckbox'>
                <Form.Label column sm='3'></Form.Label>
                <Col sm='9'>
                  <Row className='align-items-center fw-bold'>
                    <Col>
                      <Form.Check label='Remember me' />
                    </Col>
                    <Col className='d-md-flex justify-content-md-end'>
                      <Form.Check
                        type='switch'
                        id='custom-switch'
                        label={isRevealPwd ? 'Hide password' : 'Show password'}
                        onClick={() => setIsRevealPwd((prevState) => !prevState)}
                      />
                    </Col>
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className='mb-3'>
                <Col sm={{ span: 9, offset: 3 }}>
                  <Button type='submit' variant='dark' className='col-12'>
                    <i className='fas fa-sign-in-alt'></i> Login
                  </Button>
                </Col>
              </Form.Group>
            </Form>

            <Row className='align-items-center mt-4 fw-bold'>
              <Col >
                Don’t have an account? <Link to={redirect ? `/registration?redirect=${redirect}` : '/registration'}> Register</Link>
              </Col>
              <Col className='d-md-flex justify-content-md-end'>
                <Link to={redirect ? `/forgot-password?redirect=${redirect}` : '/forgot-password'}> Forget Password</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
