import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import FormContainer from '../components/FormContainer'
import { listCorporateDetails, updateCorporate } from '../redux/actions/CorporateActions'
import { CORPORATE_UPDATE_RESET } from '../redux/constants/CorporateConstants'

const CorporateEdit = () => {
  const params = useParams()

  const corporateId = params.id

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const corporateDetails = useSelector((state) => state.corporateDetails)
  const { loading, error, corporate } = corporateDetails

  const corporateUpdate = useSelector((state) => state.corporateUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = corporateUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CORPORATE_UPDATE_RESET })
      navigate('/admin/corporate')
    } else {
      if (!corporate.name || corporate._id !== corporateId) {
        dispatch(listCorporateDetails(corporateId))
      } else {
        setName(corporate.name)
        setDescription(corporate.description)
      }
    }
  }, [dispatch, navigate, corporateId, corporate, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateCorporate({ _id: corporateId, name, description }))
  }
  return (
    <>
      <FormContainer>
        <h1 className='fw-bold text-center my-4'>
          <i className='fas fa-edit'></i> Corporate Updates
        </h1>

        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler} autoComplete='off'>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Name
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Description
              </Form.Label>
              <Col sm='9'>
                <Form.Control
                  as='textarea'
                  rows={6}
                  type='text'
                  placeholder='Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Col sm={{ span: 9, offset: 3 }}>
                <Button type='submit' variant='outline-dark' className='w-50'>
                  Updated
                </Button>
              </Col>
            </Form.Group>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default CorporateEdit
