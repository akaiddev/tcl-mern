import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import FormContainer from '../../components/FormContainer'
import { listPublicProjectDetails, updatePublicProject } from '../../redux/actions/publicProjectActions'
import { PUBLIC_PROJECT_UPDATE_RESET } from '../../redux/constants/publicProjectConstants'


const PublicProjectEdit = () => {
  const params = useParams()

  const publicProjectId = params.id

  const [contact, setContact] = useState('')
  const [valueOfWork, setValueOfWork] = useState(0)
  const [client, setClient] = useState('')
  const [nameOfWork, setNameOfWork] = useState('')
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const publicProjectDetails = useSelector((state) => state.publicProjectDetails)
  const { loading, error, publicProject } = publicProjectDetails

  const publicProjectUpdate = useSelector((state) => state.publicProjectUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = publicProjectUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PUBLIC_PROJECT_UPDATE_RESET })
      navigate('/admin/public-project')
    } else {
      if (!publicProject.contact || publicProject._id !== publicProjectId) {
        dispatch(listPublicProjectDetails(publicProjectId))
      } else {
        setContact(publicProject.contact)
        setValueOfWork(publicProject.valueOfWork)
        setClient(publicProject.client)
        setImage(publicProject.image)
        setNameOfWork(publicProject.nameOfWork)
      }
    }
  }, [dispatch, navigate, publicProjectId, publicProject, successUpdate])

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
    dispatch(updatePublicProject({ _id: publicProjectId, image, client, contact, valueOfWork, nameOfWork }))
  }
  return (
    <>
      <FormContainer>
        <h3 className='fw-bold text-center my-4'>
          <i className='fas fa-edit'></i> Public Project Updates
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
                Contact
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Contact' value={contact} onChange={(e) => setContact(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Value Of Work
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Value Of Work' value={valueOfWork} onChange={(e) => setValueOfWork(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Client
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Client' value={client} onChange={(e) => setClient(e.target.value)} />
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
              <Form.Label column sm='3'>
                Name Of Work
              </Form.Label>
              <Col sm='9'>
                <Form.Control as='textarea' rows={4} value={nameOfWork} onChange={(e) => setNameOfWork(e.target.value)} placeholder='Name Of Work' />
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

export default PublicProjectEdit
