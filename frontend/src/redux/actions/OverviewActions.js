import axios from 'axios'
import {
    OVERVIEW_CREATE_FAIL,
    OVERVIEW_CREATE_REQUEST,
    OVERVIEW_CREATE_SUCCESS,
    OVERVIEW_DELETE_FAIL,
    OVERVIEW_DELETE_REQUEST,
    OVERVIEW_DELETE_SUCCESS,
    OVERVIEW_DETAILS_FAIL,
    OVERVIEW_DETAILS_REQUEST,
    OVERVIEW_DETAILS_SUCCESS,
    OVERVIEW_LIST_FAIL,
    OVERVIEW_LIST_REQUEST,
    OVERVIEW_LIST_SUCCESS,
    OVERVIEW_UPDATE_FAIL,
    OVERVIEW_UPDATE_REQUEST,
    OVERVIEW_UPDATE_SUCCESS
} from './../constants/OverviewConstants'
import { logout } from './userActions'

export const listOverview = () => async (dispatch) => {
  try {
    dispatch({ type: OVERVIEW_LIST_REQUEST })
    const { data } = await axios.get(`/api/overviews`)
    dispatch({ type: OVERVIEW_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: OVERVIEW_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const listOverviewDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: OVERVIEW_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/overviews/${id}`)
    dispatch({ type: OVERVIEW_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: OVERVIEW_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deleteOverview = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: OVERVIEW_DELETE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    await axios.delete(`/api/overviews/${id}`, config)
    dispatch({ type: OVERVIEW_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: OVERVIEW_DELETE_FAIL, payload: message })
  }
}

export const createOverview = () => async (dispatch, getState) => {
  try {
    dispatch({ type: OVERVIEW_CREATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.post(`/api/overviews`, {}, config)
    dispatch({ type: OVERVIEW_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: OVERVIEW_CREATE_FAIL, payload: message })
  }
}

export const updateOverview = (overview) => async (dispatch, getState) => {
  try {
    dispatch({ type: OVERVIEW_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.put(`/api/overviews/${overview._id}`, overview, config)

    dispatch({ type: OVERVIEW_UPDATE_SUCCESS, payload: data })
    dispatch({ type: OVERVIEW_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: OVERVIEW_UPDATE_FAIL, payload: message })
  }
}
