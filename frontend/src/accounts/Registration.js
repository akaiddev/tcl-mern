import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import FormContainer from '../components/FormContainer'
import { register } from '../redux/actions/userActions'

const Registration = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

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
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h1 className='fw-bold text-center my-3'>
        <i className='fas fa-id-card'></i> Registration
      </h1>

      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler} autoComplete='off'>
        <Form.Group as={Row} className='mb-3' controlId='FullName'>
          <Form.Label column sm='3'>
            Full Name
          </Form.Label>
          <Col sm='9'>
            <Form.Control type='text' placeholder='Your Full Name' value={name} onChange={(e) => setName(e.target.value)} required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='Email'>
          <Form.Label column sm='3'>
            Email
          </Form.Label>
          <Col sm='9'>
            <Form.Control type='email' placeholder='your-mail@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='Password'>
          <Form.Label column sm='3'>
            Password
          </Form.Label>
          <Col sm='9'>
            <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='confirmPassword'>
          <Form.Label column sm='3'>
            Confirm
          </Form.Label>
          <Col sm='9'>
            <Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3'>
          <Col sm={{ span: 9, offset: 3 }}>
            <Button type='submit' variant='outline-dark' className='w-50'>
              Registration
            </Button>
          </Col>
        </Form.Group>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Registration
