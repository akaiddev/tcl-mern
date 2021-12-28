import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import FormContainer from '../../components/FormContainer'
import { listContactInfoDetails, updateContactInfo } from '../../redux/actions/contactInfoActions'
import { CONTACT_INFO_UPDATE_RESET } from '../../redux/constants/contactInfoConstants'

const ContactInfoEdit = () => {
  const params = useParams()

  const contactInfoId = params.id

  const [icon, setIcon] = useState('')
  const [title, setTitle] = useState('')
  const [textColor, setTextColor] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const contactInfoDetails = useSelector((state) => state.contactInfoDetails)
  const { loading, error, contactInfo } = contactInfoDetails

  const contactInfoUpdate = useSelector((state) => state.contactInfoUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = contactInfoUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CONTACT_INFO_UPDATE_RESET })
      navigate('/admin/contact-Info')
    } else {
      if (!contactInfo.icon || contactInfo._id !== contactInfoId) {
        dispatch(listContactInfoDetails(contactInfoId))
      } else {
        setIcon(contactInfo.icon)
        setTitle(contactInfo.title)
        setTextColor(contactInfo.textColor)
        setDescription(contactInfo.description)
      }
    }
  }, [dispatch, navigate, contactInfoId, contactInfo, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateContactInfo({ _id: contactInfoId, icon, description, title, textColor }))
  }
  return (
    <>
      <FormContainer>
        <h3 className='fw-bold text-center my-4'>
          <i className='fas fa-edit'></i>Board Of Director Updates
        </h3>

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
                Icon
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Icon' value={icon} onChange={(e) => setIcon(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Title
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Description
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                TextColor
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='textColor' value={textColor} onChange={(e) => setTextColor(e.target.value)} />
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

export default ContactInfoEdit
