import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import Banner from '../../components/Banner'
import { createContactInfo, deleteContactInfo, listContactInfo } from '../../redux/actions/contactInfoActions'
import { CONTACT_INFO_CREATE_RESET } from '../../redux/constants/contactInfoConstants'

const ContactInfoList = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const contactInfoList = useSelector((state) => state.contactInfoList)
  const { loading, error, contactInfos } = contactInfoList

  const contactInfoDelete = useSelector((state) => state.contactInfoDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = contactInfoDelete

  const contactInfoCreate = useSelector((state) => state.contactInfoCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, contactInfo: createdContactInfo } = contactInfoCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: CONTACT_INFO_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/contact-Info/${createdContactInfo._id}/edit`)
    } else {
      dispatch(listContactInfo())
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdContactInfo])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteContactInfo(id))
    }
  }

  const createContactInfoHandler = () => {
    dispatch(createContactInfo())
  }

  return (
    <>
      <Banner title='Contact Info List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h1 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Contact Info List
            </h1>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createContactInfoHandler}>
              <i className='fas fa-plus'></i> Create a New Contact Info
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
                  <th>Icon</th>
                  <th>title</th>
                  <th>Description</th>
                  <th>textColor</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {contactInfos.map((contactInfo, index) => (
                  <tr key={contactInfo._id}>
                    <td>{index + 1}</td>

                    <td>
                      <i className={contactInfo.icon}></i>
                    </td>
                    <td>{contactInfo.title}</td>
                    <td>{contactInfo.description}</td>
                    <td>{contactInfo.textColor}</td>

                    <td>
                      <Link to={`/admin/contact-Info/${contactInfo._id}/edit`}>
                        <Button variant='outline-dark' className='btn-sm rounded-circle'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant='outline-danger' className='btn-sm rounded-circle' onClick={() => deleteHandler(contactInfo._id)}>
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

export default ContactInfoList
