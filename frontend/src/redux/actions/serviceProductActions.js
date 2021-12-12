import axios from 'axios'
import {
  SERVICE_PRODUCT_CREATE_FAIL,
  SERVICE_PRODUCT_CREATE_REQUEST,
  SERVICE_PRODUCT_CREATE_SUCCESS,
  SERVICE_PRODUCT_DELETE_FAIL,
  SERVICE_PRODUCT_DELETE_REQUEST,
  SERVICE_PRODUCT_DELETE_SUCCESS,
  SERVICE_PRODUCT_DETAILS_FAIL,
  SERVICE_PRODUCT_DETAILS_REQUEST,
  SERVICE_PRODUCT_DETAILS_SUCCESS,
  SERVICE_PRODUCT_LIST_FAIL,
  SERVICE_PRODUCT_LIST_REQUEST,
  SERVICE_PRODUCT_LIST_SUCCESS,
  SERVICE_PRODUCT_UPDATE_FAIL,
  SERVICE_PRODUCT_UPDATE_REQUEST,
  SERVICE_PRODUCT_UPDATE_SUCCESS
} from './../constants/serviceProductConstants'
import { logout } from './userActions'

export const listServiceProduct = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_PRODUCT_LIST_REQUEST })
    const { data } = await axios.get(`/api/serviceProducts`)
    dispatch({ type: SERVICE_PRODUCT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: SERVICE_PRODUCT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const listServiceProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/serviceProducts/${id}`)
    dispatch({ type: SERVICE_PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: SERVICE_PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deleteServiceProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SERVICE_PRODUCT_DELETE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    await axios.delete(`/api/serviceProducts/${id}`, config)
    dispatch({ type: SERVICE_PRODUCT_DELETE_SUCCESS })
    
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: SERVICE_PRODUCT_DELETE_FAIL, payload: message })
  }
}

export const createServiceProduct = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SERVICE_PRODUCT_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.post(`/api/serviceProducts`, {}, config)
    dispatch({ type: SERVICE_PRODUCT_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: SERVICE_PRODUCT_CREATE_FAIL, payload: message })
  }
}

export const updateServiceProduct = (serviceProduct) => async (dispatch, getState) => {
  try {
    dispatch({ type: SERVICE_PRODUCT_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.put(`/api/serviceProducts/${serviceProduct._id}`, serviceProduct, config)

    dispatch({ type: SERVICE_PRODUCT_UPDATE_SUCCESS, payload: data })
    dispatch({ type: SERVICE_PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: SERVICE_PRODUCT_UPDATE_FAIL, payload: message })
  }
}
