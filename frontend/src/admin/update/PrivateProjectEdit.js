import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import FormContainer from '../../components/FormContainer'
import { listPrivateProjectDetails, updatePrivateProject } from '../../redux/actions/privateProjectActions'
import { PRIVATE_PROJECT_UPDATE_RESET } from '../../redux/constants/privateProjectsConstants'


const PrivateProjectEdit = () => {
  const params = useParams()

  const privateProjectId = params.id

  const [contact, setContact] = useState('')
  const [valueOfWork, setValueOfWork] = useState(0)
  const [client, setClient] = useState('')
  const [nameOfWork, setNameOfWork] = useState('')
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const privateProjectDetails = useSelector((state) => state.privateProjectDetails)
  const { loading, error, privateProject } = privateProjectDetails

  const privateProjectUpdate = useSelector((state) => state.privateProjectUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = privateProjectUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRIVATE_PROJECT_UPDATE_RESET })
      navigate('/admin/private-project')
    } else {
      if (!privateProject.contact || privateProject._id !== privateProjectId) {
        dispatch(listPrivateProjectDetails(privateProjectId))
      } else {
        setContact(privateProject.contact)
        setValueOfWork(privateProject.valueOfWork)
        setClient(privateProject.client)
        setImage(privateProject.image)
        setNameOfWork(privateProject.nameOfWork)
      }
    }
  }, [dispatch, navigate, privateProjectId, privateProject, successUpdate])

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
    dispatch(updatePrivateProject({ _id: privateProjectId, image, client, contact, valueOfWork, nameOfWork }))
  }
  return (
    <>
      <FormContainer>
        <h3 className='fw-bold text-center my-4'>
          <i className='fas fa-edit'></i> Private Project Updates
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

export default PrivateProjectEdit
