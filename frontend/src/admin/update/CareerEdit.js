import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import FormContainer from '../../components/FormContainer'
import { listCareerDetails, updateCareer } from '../../redux/actions/CareerActions'
import { CAREER_UPDATE_RESET } from '../../redux/constants/CareerConstants'




const CareerEdit = () => {
  const params = useParams()

  const careerId = params.id

  const [position, setPosition] = useState('')
  const [headline, setHeadline] = useState('')
  const [qualifications, setQualifications] = useState('')
  const [experience, setExperience] = useState('')
  const [salary, setSalary] = useState('')
  const [skills, setSkills] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const careerDetails = useSelector((state) => state.careerDetails)
  const { loading, error, career } = careerDetails

  const careerUpdate = useSelector((state) => state.careerUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = careerUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CAREER_UPDATE_RESET })
      navigate('/admin/careers')
    } else {
      if (!career.position || career._id !== careerId) {
        dispatch(listCareerDetails(careerId))
      } else {
        setPosition(career.position)
        setHeadline(career.headline)
        setQualifications(career.qualifications)
        setExperience(career.experience)
        setSalary(career.salary)
        setSkills(career.skills)
        setDescription(career.description)
        setType(career.type)
      }
    }
  }, [dispatch, navigate, careerId, career, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateCareer({ _id: careerId, position, experience, headline, qualifications, salary, skills, description, type }))
  }
  return (
    <>
      <FormContainer>
        <h1 className='fw-bold text-center my-4'>
          <i className='fas fa-edit'></i> Career Updates
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
                Position
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='position' value={position} onChange={(e) => setPosition(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Type
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='type' value={type} onChange={(e) => setType(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Title
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='headline' value={headline} onChange={(e) => setHeadline(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Experience
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='experience' value={experience} onChange={(e) => setExperience(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Qualifications
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='qualifications' value={qualifications} onChange={(e) => setQualifications(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Salary
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Skills
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='skills' value={skills} onChange={(e) => setSkills(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                Description
              </Form.Label>
              <Col sm='9'>
                <Form.Control as='textarea' rows={4} type='text' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
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

export default CareerEdit
