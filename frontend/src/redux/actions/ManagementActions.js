import axios from 'axios'
import {
    MANAGEMENT_CREATE_FAIL,
    MANAGEMENT_CREATE_REQUEST,
    MANAGEMENT_CREATE_SUCCESS,
    MANAGEMENT_DELETE_FAIL,
    MANAGEMENT_DELETE_REQUEST,
    MANAGEMENT_DELETE_SUCCESS,
    MANAGEMENT_DETAILS_FAIL,
    MANAGEMENT_DETAILS_REQUEST,
    MANAGEMENT_DETAILS_SUCCESS,
    MANAGEMENT_LIST_FAIL,
    MANAGEMENT_LIST_REQUEST,
    MANAGEMENT_LIST_SUCCESS,
    MANAGEMENT_UPDATE_FAIL,
    MANAGEMENT_UPDATE_REQUEST,
    MANAGEMENT_UPDATE_SUCCESS
} from './../constants/ManagementConstants'
import { logout } from './userActions'

export const listManagement = () => async (dispatch) => {
  try {
    dispatch({ type: MANAGEMENT_LIST_REQUEST })
    const { data } = await axios.get(`/api/managements`)
    dispatch({ type: MANAGEMENT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: MANAGEMENT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const listManagementDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MANAGEMENT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/managements/${id}`)
    dispatch({ type: MANAGEMENT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: MANAGEMENT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deleteManagement = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: MANAGEMENT_DELETE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    await axios.delete(`/api/managements/${id}`, config)
    dispatch({ type: MANAGEMENT_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: MANAGEMENT_DELETE_FAIL, payload: message })
  }
}

export const createManagement = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MANAGEMENT_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.post(`/api/managements`, {}, config)
    dispatch({ type: MANAGEMENT_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: MANAGEMENT_CREATE_FAIL, payload: message })
  }
}

export const updateManagement = (management) => async (dispatch, getState) => {
  try {
    dispatch({ type: MANAGEMENT_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.put(`/api/managements/${management._id}`, management, config)

    dispatch({ type: MANAGEMENT_UPDATE_SUCCESS, payload: data })
    dispatch({ type: MANAGEMENT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: MANAGEMENT_UPDATE_FAIL, payload: message })
  }
}
