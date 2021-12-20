import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import { createSocialMedia, deleteSocialMedia, listSocialMedia } from '../redux/actions/SocialMediaActions'
import { SOCIAL_MEDIA_CREATE_RESET } from './../redux/constants/SocialMediaConstants'

const SocialMediaList = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const socialMediaList = useSelector((state) => state.socialMediaList)
  const { loading, error, socialMedias } = socialMediaList

  const socialMediaDelete = useSelector((state) => state.socialMediaDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = socialMediaDelete

  const socialMediaCreate = useSelector((state) => state.socialMediaCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, socialMedia: createdSocialMedia } = socialMediaCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: SOCIAL_MEDIA_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/social-media/${createdSocialMedia._id}/edit`)
    } else {
      dispatch(listSocialMedia())
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdSocialMedia])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteSocialMedia(id))
    }
  }

  const createSocialMediaHandler = () => {
    dispatch(createSocialMedia())
  }

  return (
    <>
      <Banner title='Contact Info List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h1 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Contact Infos List
            </h1>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createSocialMediaHandler}>
              <i className='fas fa-plus'></i> Create a New Contact Infos
            </Button>
          </Col>
        </Row>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Table striped bordered hover variant='info' responsive size='sm' className='text-center'>
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>name</th>
                  <th>url</th>
                  <th>icon</th>
                  <th>iconColor</th>
                  <th>animation</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {socialMedias.map((socialMedia, index) => (
                  <tr key={socialMedia._id}>
                    <td>{index + 1}</td>
                    <td>{socialMedia.name}</td>
                    <td>{socialMedia.url}</td>
                    <td>
                      <i className={socialMedia.icon}></i>
                    </td>

                    <td>{socialMedia.iconColor}</td>
                    <td>{socialMedia.animation}</td>

                    <td>
                      <Link to={`/admin/social-media/${socialMedia._id}/edit`}>
                        <Button variant='outline-dark' className='btn-sm rounded-circle'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant='outline-danger' className='btn-sm rounded-circle' onClick={() => deleteHandler(socialMedia._id)}>
                        <i className='fas fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Container>
    </>
  )
}

export default SocialMediaList
