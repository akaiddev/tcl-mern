import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import FormContainer from '../../components/FormContainer'
import { listSocialMediaDetails, updateSocialMedia } from '../../redux/actions/SocialMediaActions'
import { SOCIAL_MEDIA_UPDATE_RESET } from '../../redux/constants/SocialMediaConstants'

const SocialMediaEdit = () => {
  const params = useParams()

  const socialMediaId = params.id

  const [name, setName] = useState('')
  const [icon, setIcon] = useState('')
  const [url, setUrl] = useState('')
  const [iconColor, setIconColor] = useState('')
  const [textColor, setTextColor] = useState('')
  const [animation, setAnimation] = useState('')

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const socialMediaDetails = useSelector((state) => state.socialMediaDetails)
  const { loading, error, socialMedia } = socialMediaDetails

  const socialMediaUpdate = useSelector((state) => state.socialMediaUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = socialMediaUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SOCIAL_MEDIA_UPDATE_RESET })
      navigate('/admin/social-media')
    } else {
      if (!socialMedia.name || socialMedia._id !== socialMediaId) {
        dispatch(listSocialMediaDetails(socialMediaId))
      } else {
        setName(socialMedia.name)
        setIcon(socialMedia.icon)
        setUrl(socialMedia.url)
        setIconColor(socialMedia.iconColor)
        setTextColor(socialMedia.textColor)
        setAnimation(socialMedia.animation)
      }
    }
  }, [dispatch, navigate, socialMediaId, socialMedia, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateSocialMedia({ _id: socialMediaId, icon, name, animation, iconColor, textColor, url }))
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
                name
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
              </Col>
            </Form.Group>

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
                url
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='url' value={url} onChange={(e) => setUrl(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                iconColor
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='iconColor' value={iconColor} onChange={(e) => setIconColor(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm='3'>
                animation
              </Form.Label>
              <Col sm='9'>
                <Form.Control type='text' placeholder='animation' value={animation} onChange={(e) => setAnimation(e.target.value)} />
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

export default SocialMediaEdit
