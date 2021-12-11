import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../redux/actions/userActions'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    <FormContainer>
      <h1 className='fw-bold text-center my-3'>
        <i className='fas fa-user-alt'></i> Login
      </h1>

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
            <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3'>
          <Col sm={{ span: 9, offset: 3 }}>
            <Button type='submit' variant='outline-dark' className='w-50'>
              <i className='fas fa-sign-in-alt'></i> Login
            </Button>
          </Col>
        </Form.Group>
      </Form>

      <Row className='py-3'>
        <Col>
          Create Account? <Link to={redirect ? `/Registration?redirect=${redirect}` : '/Registration'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Login
