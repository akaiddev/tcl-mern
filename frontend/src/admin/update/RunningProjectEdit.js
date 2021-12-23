import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import FormContainer from '../../components/FormContainer'
import { listRunningProjectDetails, updateRunningProject } from '../../redux/actions/runningProjectActions'
import { RUNNING_PROJECT_UPDATE_RESET } from '../../redux/constants/runningProjectConstants'

const RunningProjectEdit = () => {
  const params = useParams()

  const runningProjectId = params.id

  const [contact, setContact] = useState('')
  const [valueOfWork, setValueOfWork] = useState(0)
  const [client, setClient] = useState('')
  const [nameOfWork, setNameOfWork] = useState('')
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const runningProjectDetails = useSelector((state) => state.runningProjectDetails)
  const { loading, error, runningProject } = runningProjectDetails

  const runningProjectUpdate = useSelector((state) => state.runningProjectUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = runningProjectUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: RUNNING_PROJECT_UPDATE_RESET })
      navigate('/admin/running-project')
    } else {
      if (!runningProject.contact || runningProject._id !== runningProjectId) {
        dispatch(listRunningProjectDetails(runningProjectId))
      } else {
        setContact(runningProject.contact)
        setValueOfWork(runningProject.valueOfWork)
        setClient(runningProject.client)
        setImage(runningProject.image)
        setNameOfWork(runningProject.nameOfWork)
      }
    }
  }, [dispatch, navigate, runningProjectId, runningProject, successUpdate])

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
    dispatch(updateRunningProject({ _id: runningProjectId, image, client, contact, valueOfWork, nameOfWork }))
  }
  return (
    <>
      <FormContainer>
        <h1 className='fw-bold text-center my-4'>
          <i className='fas fa-edit'></i> Running Project Updates
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

export default RunningProjectEdit
