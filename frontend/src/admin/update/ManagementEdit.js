import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import FormContainer from '../../components/FormContainer'
import { listManagementDetails, updateManagement } from '../../redux/actions/ManagementActions'
import { MANAGEMENT_UPDATE_RESET } from '../../redux/constants/ManagementConstants'


const ManagementEdit = () => {
  const params = useParams()

  const managementId = params.id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [designation, setDesignation] = useState('')

  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const managementDetails = useSelector((state) => state.managementDetails)
  const { loading, error, management } = managementDetails

  const managementUpdate = useSelector((state) => state.managementUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = managementUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: MANAGEMENT_UPDATE_RESET })
      navigate('/admin/management')
    } else {
      if (!management.name || management._id !== managementId) {
        dispatch(listManagementDetails(managementId))
      } else {
        setName(management.name)
        setEmail(management.email)
        setDesignation(management.designation)

        setImage(management.image)
      }
    }
  }, [dispatch, navigate, managementId, management, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } }
      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateManagement({ _id: managementId, image, name, email, designation }))
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
                Name
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Email
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Name' value={email} onChange={(e) => setEmail(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Designation
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Designation' value={designation} onChange={(e) => setDesignation(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Image
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Choose File' value={image} onChange={(e) => setImage(e.target.value)} />
                <Form.Control type='file' id='image-file' label='Choose File' custom='true' onChange={uploadFileHandler}></Form.Control>
                {uploading && <Loader />}
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

export default ManagementEdit
