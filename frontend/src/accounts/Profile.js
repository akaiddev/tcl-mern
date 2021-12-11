import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import FormContainer from '../components/FormContainer'
import { getUserDetails, updateUserProfile } from '../redux/actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../redux/constants/userConstants'

const Profile = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  let navigate = useNavigate()

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const updateUser = useSelector((state) => state.updateUser)
  const { success } = updateUser

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, navigate, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <FormContainer>
      <h1 className='fw-bold text-center my-5'>
        <i className='fas fa-id-card'></i> Update Profile
      </h1>

      {message && <Message variant='danger'>{message}</Message>}
      {}
      {success && <Message variant='success'>Profile Updated</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Form onSubmit={submitHandler} autoComplete='off'>
          <Form.Group as={Row} className='mb-3' controlId='Name'>
            <Form.Label column sm='3'>
              Name
            </Form.Label>
            <Col sm='9'>
              <Form.Control type='text' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='Email'>
            <Form.Label column sm='3'>
              Email
            </Form.Label>
            <Col sm='9'>
              <Form.Control type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='Password'>
            <Form.Label column sm='3'>
              Password
            </Form.Label>
            <Col sm='9'>
              <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
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
                Update Profile
              </Button>
            </Col>
          </Form.Group>
        </Form>
      )}
    </FormContainer>
  )
}

export default Profile
