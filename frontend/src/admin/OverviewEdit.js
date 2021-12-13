import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import FormContainer from '../components/FormContainer'
import { listOverviewDetails } from '../redux/actions/OverviewActions'
import { updateOverview } from './../redux/actions/OverviewActions'
import { OVERVIEW_UPDATE_RESET } from './../redux/constants/OverviewConstants'

const OverviewEdit = () => {
  const params = useParams()

  const overviewId = params.id

  const [col, setCol] = useState(12)
  const [animation, setAnimation] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const overviewDetails = useSelector((state) => state.overviewDetails)
  const { loading, error, overview } = overviewDetails

  const overviewUpdate = useSelector((state) => state.overviewUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = overviewUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: OVERVIEW_UPDATE_RESET })
      navigate('/admin/overview')
    } else {
      if (!overview.col || overview._id !== overviewId) {
        dispatch(listOverviewDetails(overviewId))
      } else {
        setCol(overview.col)
        setAnimation(overview.animation)
        setDescription(overview.description)
      }
    }
  }, [dispatch, navigate, overviewId, overview, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateOverview({ _id: overviewId, col, description, animation }))
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
                Col
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='Col' value={col} onChange={(e) => setCol(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Animation
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='animation' value={animation} onChange={(e) => setAnimation(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Description
              </Form.Label>
              <Col sm='9'>
                <Form.Control as='textarea' rows={10} type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
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

export default OverviewEdit
