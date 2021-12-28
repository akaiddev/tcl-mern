import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <FormContainer>
        <h1 className='fw-bold text-center my-4'>
          <i className='fas fa-user-cog'></i> Forgot your password?
        </h1>

        <Col>
          <p className='fw-bold my-3'>Please enter the email address associated with your account and We will email you a link to reset your password</p>
        </Col>

        <Form onSubmit={submitHandler} autoComplete='off'>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='your-mail@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
          </Form>

          <Form.Group as={Row} className='mb-3'>
            <Col>
              <Button type='submit' variant='dark' className='col-12'>
                Reset-Password
              </Button>
            </Col>
          </Form.Group>
        </Form>

        <Col>
          <Row className='align-items-center mt-4 fw-bold'>
            <Col>
              <Link to='/login'> Login</Link>
            </Col>
            <Col className='d-md-flex justify-content-md-end'>
              <Link to='/registration'> Register</Link>
            </Col>
          </Row>
        </Col>
      </FormContainer>
    </>
  )
}

export default ForgotPassword
