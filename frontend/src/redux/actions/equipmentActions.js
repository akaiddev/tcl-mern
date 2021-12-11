import axios from 'axios'
import {
    EQUIPMENTS_CREATE_FAIL,
    EQUIPMENTS_CREATE_REQUEST,
    EQUIPMENTS_CREATE_REVIEW_FAIL,
    EQUIPMENTS_CREATE_REVIEW_REQUEST,
    EQUIPMENTS_CREATE_REVIEW_SUCCESS,
    EQUIPMENTS_CREATE_SUCCESS,
    EQUIPMENTS_DELETE_FAIL,
    EQUIPMENTS_DELETE_REQUEST,
    EQUIPMENTS_DELETE_SUCCESS,
    EQUIPMENTS_DETAILS_FAIL,
    EQUIPMENTS_DETAILS_REQUEST,
    EQUIPMENTS_DETAILS_SUCCESS,
    EQUIPMENTS_LIST_FAIL,
    EQUIPMENTS_LIST_REQUEST,
    EQUIPMENTS_LIST_SUCCESS,
    EQUIPMENTS_TOP_FAIL,
    EQUIPMENTS_TOP_REQUEST,
    EQUIPMENTS_TOP_SUCCESS,
    EQUIPMENTS_UPDATE_FAIL,
    EQUIPMENTS_UPDATE_REQUEST,
    EQUIPMENTS_UPDATE_SUCCESS
} from '../constants/equipmentConstants'
import { logout } from './userActions'

export const listEquipment =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: EQUIPMENTS_LIST_REQUEST })
      const { data } = await axios.get(`/api/equipments?keyword=${keyword}&pageNumber=${pageNumber}`)
      dispatch({ type: EQUIPMENTS_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: EQUIPMENTS_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
  }

export const listEquipmentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: EQUIPMENTS_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/equipments/${id}`)

    dispatch({ type: EQUIPMENTS_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: EQUIPMENTS_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deleteEquipment = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: EQUIPMENTS_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }

    await axios.delete(`/api/equipments/${id}`, config)

    dispatch({ type: EQUIPMENTS_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: EQUIPMENTS_DELETE_FAIL, payload: message })
  }
}

export const createEquipment = () => async (dispatch, getState) => {
  try {
    dispatch({ type: EQUIPMENTS_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }

    const { data } = await axios.post(`/api/equipments`, {}, config)

    dispatch({ type: EQUIPMENTS_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: EQUIPMENTS_CREATE_FAIL, payload: message })
  }
}

export const updateEquipment = (equipment) => async (dispatch, getState) => {
  try {
    dispatch({ type: EQUIPMENTS_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }

    const { data } = await axios.put(`/api/equipments/${equipment._id}`, equipment, config)

    dispatch({ type: EQUIPMENTS_UPDATE_SUCCESS, payload: data })
    dispatch({ type: EQUIPMENTS_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: EQUIPMENTS_UPDATE_FAIL, payload: message })
  }
}

export const createEquipmentReview = (equipmentId, review) => async (dispatch, getState) => {
  try {
    dispatch({ type: EQUIPMENTS_CREATE_REVIEW_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }

    await axios.post(`/api/equipments/${equipmentId}/reviews`, review, config)

    dispatch({ type: EQUIPMENTS_CREATE_REVIEW_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: EQUIPMENTS_CREATE_REVIEW_FAIL, payload: message })
  }
}

export const listTopEquipments = () => async (dispatch) => {
  try {
    dispatch({ type: EQUIPMENTS_TOP_REQUEST })

    const { data } = await axios.get(`/api/equipments/top`)

    dispatch({ type: EQUIPMENTS_TOP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: EQUIPMENTS_TOP_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}
