import React, { useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../common/Loader'
import Message from '../common/Message'
import Banner from '../components/Banner'
import { deleteUser, listUsers } from '../redux/actions/userActions'

const UserListScreen = () => {
  const dispatch = useDispatch()

  let navigate = useNavigate()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      navigate('/login')
    }
  }, [dispatch, navigate, successDelete, userInfo])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id))
    }
  }

  return (
    <>
      <Banner title='All User List' />
      <Container className='mb-5'>
        <h4 className='fw-bold mt-5'>
          <i className='fas fa-user-alt'></i> User List
        </h4>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Table striped bordered hover variant='info' responsive size='sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>{user.isAdmin ? <i className='fas fa-check' style={{ color: 'green' }}></i> : <i className='fas fa-times' style={{ color: 'red' }}></i>}</td>
                  <td>
                    <Link to={`/admin/user/${user._id}/edit`}>
                      <Button variant='dark' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button variant='outline-danger' className='btn-sm' onClick={() => deleteHandler(user._id)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  )
}

export default UserListScreen
