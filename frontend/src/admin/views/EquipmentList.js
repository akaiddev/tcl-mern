import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../../common/Loader'
import Message from '../../common/Message'
import Banner from '../../components/Banner'
import Paginate from '../../components/Paginate'
import { createEquipment, deleteEquipment, listEquipment } from '../../redux/actions/equipmentActions'
import { EQUIPMENTS_CREATE_RESET } from '../../redux/constants/equipmentConstants'

const EquipmentList = () => {
  const dispatch = useDispatch()

  let navigate = useNavigate()

  const params = useParams()

  const pageNumber = params.pageNumber || 1

  const equipmentList = useSelector((state) => state.equipmentList)
  const { loading, error, equipments, page, pages } = equipmentList

  const equipmentDelete = useSelector((state) => state.equipmentDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = equipmentDelete

  const equipmentCreate = useSelector((state) => state.equipmentCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, equipment: creatEdequipment } = equipmentCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: EQUIPMENTS_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/equipment/${creatEdequipment._id}/edit`)
    } else {
      dispatch(listEquipment('', pageNumber))
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, creatEdequipment, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteEquipment(id))
    }
  }

  const createEquipmentHandler = () => {
    dispatch(createEquipment())
  }

  return (
    <>
      <Banner title='All Equipment List' />
      <Container className='my-5'>
        <Row className='align-items-center my-3'>
          <Col>
            <h1 className='fw-bold'>
              <i className='fas fa-briefcase'></i> Equipment List
            </h1>
          </Col>
          <Col className='text-right'>
            <Button variant='dark' className='col-12 ' onClick={createEquipmentHandler}>
              <i className='fas fa-plus'></i> Create a New Equipment
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
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name Of Equipment</th>
                  <th>Model No</th>
                  <th>Quantity</th>
                  <th>Made In</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {equipments.map((equipment, index) => (
                  <tr key={equipment._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image src={equipment.image} fluid width='60' />
                    </td>
                    <td>{equipment.nameOfEquipment}</td>
                    <td>{equipment.capacity}</td>
                    <td>{equipment.modelNo}</td>

                    <td>{equipment.madeIn}</td>

                    <td>
                      <Link to={`/admin/equipment/${equipment._id}/edit`}>
                        <Button variant='outline-dark' className='btn-sm rounded-circle'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button variant='outline-danger' className='btn-sm rounded-circle' onClick={() => deleteHandler(equipment._id)}>
                        <i className='fas fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Paginate pages={pages} page={page} />
          </>
        )}
      </Container>
    </>
  )
}

export default EquipmentList
