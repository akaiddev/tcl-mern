import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import FormContainer from '../../components/FormContainer'
import { listEquipmentDetails, updateEquipment } from '../../redux/actions/equipmentActions'
import { EQUIPMENTS_UPDATE_RESET } from '../../redux/constants/equipmentConstants'


const EquipmentEdit = () => {
  const params = useParams()

  const equipmentId = params.id

  const [nameOfEquipment, setNameOfEquipment] = useState('')
  const [capacity, setCapacity] = useState('')
  const [modelNo, setModelNo] = useState('')
  const [quantity, setQuantity] = useState('')
  const [madeIn, setMadeIn] = useState('')
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const equipmentDetails = useSelector((state) => state.equipmentDetails)
  const { loading, error, equipment } = equipmentDetails

  const equipmentUpdate = useSelector((state) => state.equipmentUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = equipmentUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: EQUIPMENTS_UPDATE_RESET })
      navigate('/admin/equipment')
    } else {
      if (!equipment.nameOfEquipment || equipment._id !== equipmentId) {
        dispatch(listEquipmentDetails(equipmentId))
      } else {
        setNameOfEquipment(equipment.nameOfEquipment)
        setCapacity(equipment.capacity)
        setQuantity(equipment.quantity)
        setMadeIn(equipment.madeIn)
        setModelNo(equipment.modelNo)
        setImage(equipment.image)
      }
    }
  }, [dispatch, navigate, equipmentId, equipment, successUpdate])

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
    dispatch(updateEquipment({ _id: equipmentId, image, nameOfEquipment, capacity, modelNo, quantity, madeIn }))
  }
  return (
    <>
      <FormContainer>
        <h1 className='fw-bold text-center my-4'>
          <i className='fas fa-edit'></i> Equipment Updates
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
                Name Of Equipment
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='name Of Equipment' value={nameOfEquipment} onChange={(e) => setNameOfEquipment(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Capacity
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Capacity' value={capacity} onChange={(e) => setCapacity(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Model No
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Model No' value={modelNo} onChange={(e) => setModelNo(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Made In
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Made In' value={madeIn} onChange={(e) => setModelNo(e.target.value)} />
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

export default EquipmentEdit
