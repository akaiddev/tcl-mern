import axios from 'axios'
import {
  CAREER_CREATE_FAIL,
  CAREER_CREATE_REQUEST,
  CAREER_CREATE_SUCCESS,
  CAREER_DELETE_FAIL,
  CAREER_DELETE_REQUEST,
  CAREER_DELETE_SUCCESS,
  CAREER_DETAILS_FAIL,
  CAREER_DETAILS_REQUEST,
  CAREER_DETAILS_SUCCESS,
  CAREER_LIST_FAIL,
  CAREER_LIST_REQUEST,
  CAREER_LIST_SUCCESS,
  CAREER_UPDATE_FAIL,
  CAREER_UPDATE_REQUEST,
  CAREER_UPDATE_SUCCESS
} from './../constants/CareerConstants'
import { logout } from './userActions'

export const listCareer =() => async (dispatch) => {
    try {
      dispatch({ type: CAREER_LIST_REQUEST })
      const { data } = await axios.get(`/api/careers`)
      dispatch({ type: CAREER_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: CAREER_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
  }

export const listCareerDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CAREER_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/careers/${id}`)
    dispatch({ type: CAREER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: CAREER_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deleteCareer = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CAREER_DELETE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    await axios.delete(`/api/careers/${id}`, config)
    dispatch({ type: CAREER_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: CAREER_DELETE_FAIL, payload: message })
  }
}

export const createCareer = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CAREER_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.post(`/api/careers`, {}, config)
    dispatch({ type: CAREER_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: CAREER_CREATE_FAIL, payload: message })
  }
}

export const updateCareer = (career) => async (dispatch, getState) => {
  try {
    dispatch({ type: CAREER_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.put(`/api/careers/${career._id}`, career, config)

    dispatch({ type: CAREER_UPDATE_SUCCESS, payload: data })
    dispatch({ type: CAREER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: CAREER_UPDATE_FAIL, payload: message })
  }
}
