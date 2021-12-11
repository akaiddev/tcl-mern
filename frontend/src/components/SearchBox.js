import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Container>
      <Row className='justify-content-md-center bg-light my-3'>
        <Col md={6}>
          <Form onSubmit={submitHandler} inline>
            <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} placeholder='Search Any Word...' className='mr-sm-2 ml-sm-5'></Form.Control>
            <Button type='submit' variant='outline-success' className='col-12 p-2'>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBox
