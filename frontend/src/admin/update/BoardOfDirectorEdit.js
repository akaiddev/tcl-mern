import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import FormContainer from '../../components/FormContainer'
import { listBoardOfDirectorDetails, updateBoardOfDirector } from '../../redux/actions/BoardOfDirectorActions'
import { BOARD_OF_DIRECTOR_UPDATE_RESET } from '../../redux/constants/BoardOfDirectorConstants'

const BoardOfDirectorEdit = () => {
  const params = useParams()

  const boardOfDirectorId = params.id

  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')

  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const boardOfDirectorDetails = useSelector((state) => state.boardOfDirectorDetails)
  const { loading, error, boardOfDirector } = boardOfDirectorDetails

  const boardOfDirectorUpdate = useSelector((state) => state.boardOfDirectorUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = boardOfDirectorUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BOARD_OF_DIRECTOR_UPDATE_RESET })
      navigate('/admin/board-of-director')
    } else {
      if (!boardOfDirector.name || boardOfDirector._id !== boardOfDirectorId) {
        dispatch(listBoardOfDirectorDetails(boardOfDirectorId))
      } else {
        setName(boardOfDirector.name)
        setDesignation(boardOfDirector.designation)

        setImage(boardOfDirector.image)
      }
    }
  }, [dispatch, navigate, boardOfDirectorId, boardOfDirector, successUpdate])

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
    dispatch(updateBoardOfDirector({ _id: boardOfDirectorId, image, name, designation }))
  }
  return (
    <>
      <FormContainer>
        <h1 className='fw-bold text-center my-4'>
          <i className='fas fa-edit'></i>Board Of Director Updates
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

export default BoardOfDirectorEdit
