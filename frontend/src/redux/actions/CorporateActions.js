import axios from 'axios'
import {
  CORPORATE_CREATE_FAIL,
  CORPORATE_CREATE_REQUEST,
  CORPORATE_CREATE_SUCCESS,
  CORPORATE_DELETE_FAIL,
  CORPORATE_DELETE_REQUEST,
  CORPORATE_DELETE_SUCCESS,
  CORPORATE_DETAILS_FAIL,
  CORPORATE_DETAILS_REQUEST,
  CORPORATE_DETAILS_SUCCESS,
  CORPORATE_LIST_FAIL,
  CORPORATE_LIST_REQUEST,
  CORPORATE_LIST_SUCCESS,
  CORPORATE_UPDATE_FAIL,
  CORPORATE_UPDATE_REQUEST,
  CORPORATE_UPDATE_SUCCESS
} from './../constants/CorporateConstants'
import { logout } from './userActions'

export const listCorporate = () => async (dispatch) => {
  try {
    dispatch({ type: CORPORATE_LIST_REQUEST })
    const { data } = await axios.get(`/api/corporates`)
    dispatch({ type: CORPORATE_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: CORPORATE_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const listCorporateDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CORPORATE_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/corporates/${id}`)
    dispatch({ type: CORPORATE_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: CORPORATE_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deleteCorporate = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CORPORATE_DELETE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    await axios.delete(`/api/corporates/${id}`, config)
    dispatch({ type: CORPORATE_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: CORPORATE_DELETE_FAIL, payload: message })
  }
}

export const createCorporate = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CORPORATE_CREATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.post(`/api/corporates`, {}, config)
    dispatch({ type: CORPORATE_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: CORPORATE_CREATE_FAIL, payload: message })
  }
}

export const updateCorporate = (corporate) => async (dispatch, getState) => {
  try {
    dispatch({ type: CORPORATE_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.put(`/api/corporates/${corporate._id}`, corporate, config)

    dispatch({ type: CORPORATE_UPDATE_SUCCESS, payload: data })
    dispatch({ type: CORPORATE_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: CORPORATE_UPDATE_FAIL, payload: message })
  }
}
