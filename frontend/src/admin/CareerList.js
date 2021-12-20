import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import { createCareer, deleteCareer, listCareer } from './../redux/actions/CareerActions'
import { CAREER_CREATE_RESET } from './../redux/constants/CareerConstants'

const CareerList = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const careerList = useSelector((state) => state.careerList)
  const { loading, error, careers } = careerList

  const careerDelete = useSelector((state) => state.careerDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = careerDelete

  const careerCreate = useSelector((state) => state.careerCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, career: createdCareer } = careerCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: CAREER_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/career/${createdCareer._id}/edit`)
    } else {
      dispatch(listCareer())
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdCareer])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteCareer(id))
    }
  }

  const createCareerHandler = () => {
    dispatch(createCareer())
  }

  return (
    <>
      <Banner headline='Career List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h1 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Career List
            </h1>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createCareerHandler}>
              <i className='fas fa-plus'></i> Create a New Career List
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
                  <th>Position</th>
                  <th>Headline</th>
                  <th>qualifications</th>

                  <th>experience</th>
                  <th>skills</th>
                  <th>salary</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {careers.map((career, index) => (
                  <tr key={career._id}>
                    <td>{index + 1}</td>

                    <td>{career.position}</td>
                    <td>{career.headline}</td>
                    <td>{career.qualifications}</td>

                    <td>{career.experience}</td>

                    <td>{career.skills}</td>
                    <td>{career.salary}</td>

                    <td>
                      <Link to={`/admin/career/${career._id}/edit`}>
                        <Button variant='outline-dark' className='btn-sm rounded-circle'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant='outline-danger' className='btn-sm rounded-circle' onClick={() => deleteHandler(career._id)}>
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

export default CareerList
