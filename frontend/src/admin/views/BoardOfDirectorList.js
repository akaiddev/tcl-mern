import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import Banner from '../../components/Banner'
import { createBoardOfDirector, deleteBoardOfDirector, listBoardOfDirector } from '../../redux/actions/BoardOfDirectorActions'
import { BOARD_OF_DIRECTOR_CREATE_RESET } from '../../redux/constants/BoardOfDirectorConstants'

const BoardOfDirectorList = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const boardOfDirectorList = useSelector((state) => state.boardOfDirectorList)
  const { loading, error, boardOfDirectors } = boardOfDirectorList

  const boardOfDirectorDelete = useSelector((state) => state.boardOfDirectorDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = boardOfDirectorDelete

  const boardOfDirectorCreate = useSelector((state) => state.boardOfDirectorCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, boardOfDirector: createdBoardOfDirector } = boardOfDirectorCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: BOARD_OF_DIRECTOR_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/board-of-director/${createdBoardOfDirector._id}/edit`)
    } else {
      dispatch(listBoardOfDirector())
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdBoardOfDirector])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteBoardOfDirector(id))
    }
  }

  const createboardOfDirectorHandler = () => {
    dispatch(createBoardOfDirector())
  }

  return (
    <>
      <Banner title='Board Of Director List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h3 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Board Of Directors List
            </h3>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createboardOfDirectorHandler}>
              <i className='fas fa-plus'></i> Create a New Board Of Directors
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
                  <th>Image</th>
                  <th>name</th>
                  <th>Designation</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {boardOfDirectors.map((boardOfDirector, index) => (
                  <tr key={boardOfDirector._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image src={boardOfDirector.image} fluid width='40' className='rounded-circle' />
                    </td>
                    <td>{boardOfDirector.name}</td>
                    <td>{boardOfDirector.designation}</td>

                    <td>
                      <Link to={`/admin/board-of-director/${boardOfDirector._id}/edit`}>
                        <Button variant='outline-dark' className='btn-sm rounded-circle'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant='outline-danger' className='btn-sm rounded-circle' onClick={() => deleteHandler(boardOfDirector._id)}>
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

export default BoardOfDirectorList
