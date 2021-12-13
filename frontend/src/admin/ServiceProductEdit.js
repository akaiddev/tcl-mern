import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import FormContainer from '../components/FormContainer'
import { listServiceProductDetails, updateServiceProduct } from './../redux/actions/serviceProductActions'
import { SERVICE_PRODUCT_UPDATE_RESET } from './../redux/constants/serviceProductConstants'

const ServiceProductEdit = () => {
  const params = useParams()

  const serviceProductId = params.id

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [point, setPoint] = useState('')

  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const serviceProductDetails = useSelector((state) => state.serviceProductDetails)
  const { loading, error, serviceProduct } = serviceProductDetails

  const serviceProductUpdate = useSelector((state) => state.serviceProductUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = serviceProductUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SERVICE_PRODUCT_UPDATE_RESET })
      navigate('/admin/service-product')
    } else {
      if (!serviceProduct.title || serviceProduct._id !== serviceProductId) {
        dispatch(listServiceProductDetails(serviceProductId))
      } else {
        setTitle(serviceProduct.title)
        setDescription(serviceProduct.description)
        setPoint(serviceProduct.point)
        setImage(serviceProduct.image)
      }
    }
  }, [dispatch, navigate, serviceProductId, serviceProduct, successUpdate])

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
    dispatch(updateServiceProduct({ _id: serviceProductId, image, title, description, point }))
  }
  return (
    <>
      <FormContainer>
        <h1 className='fw-bold text-center my-4'>
          <i className='fas fa-edit'></i> Service Product Updates
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
                Title
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Description
              </Form.Label>
              <Col sm='9'>
                <Form.Control as='textarea' rows={6} type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
              </Col>
            </Form.Group>

            
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Point
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Point' value={point} onChange={(e) => setPoint(e.target.value)} />
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

export default ServiceProductEdit
