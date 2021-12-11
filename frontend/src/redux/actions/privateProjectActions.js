import axios from 'axios'
import {
  PRIVATE_PROJECT_CREATE_FAIL,
  PRIVATE_PROJECT_CREATE_REQUEST,
  PRIVATE_PROJECT_CREATE_REVIEW_FAIL,
  PRIVATE_PROJECT_CREATE_REVIEW_REQUEST,
  PRIVATE_PROJECT_CREATE_REVIEW_SUCCESS,
  PRIVATE_PROJECT_CREATE_SUCCESS,
  PRIVATE_PROJECT_DELETE_FAIL,
  PRIVATE_PROJECT_DELETE_REQUEST,
  PRIVATE_PROJECT_DELETE_SUCCESS,
  PRIVATE_PROJECT_DETAILS_FAIL,
  PRIVATE_PROJECT_DETAILS_REQUEST,
  PRIVATE_PROJECT_DETAILS_SUCCESS,
  PRIVATE_PROJECT_LIST_FAIL,
  PRIVATE_PROJECT_LIST_REQUEST,
  PRIVATE_PROJECT_LIST_SUCCESS,
  PRIVATE_PROJECT_TOP_FAIL,
  PRIVATE_PROJECT_TOP_REQUEST,
  PRIVATE_PROJECT_TOP_SUCCESS,
  PRIVATE_PROJECT_UPDATE_FAIL,
  PRIVATE_PROJECT_UPDATE_REQUEST,
  PRIVATE_PROJECT_UPDATE_SUCCESS,
} from '../constants/privateProjectsConstants'
import { logout } from './userActions'

export const listPrivateProject =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: PRIVATE_PROJECT_LIST_REQUEST })
      const { data } = await axios.get(`/api/privateProjects?keyword=${keyword}&pageNumber=${pageNumber}`)
      dispatch({ type: PRIVATE_PROJECT_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: PRIVATE_PROJECT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
  }

export const listPrivateProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRIVATE_PROJECT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/privateProjects/${id}`)

    dispatch({ type: PRIVATE_PROJECT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PRIVATE_PROJECT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deletePrivateProject = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRIVATE_PROJECT_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }

    await axios.delete(`/api/privateProjects/${id}`, config)

    dispatch({ type: PRIVATE_PROJECT_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: PRIVATE_PROJECT_DELETE_FAIL, payload: message })
  }
}

export const createPrivateProject = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRIVATE_PROJECT_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }

    const { data } = await axios.post(`/api/privateProjects`, {}, config)

    dispatch({ type: PRIVATE_PROJECT_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: PRIVATE_PROJECT_CREATE_FAIL, payload: message })
  }
}

export const updatePrivateProject = (privateProject) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRIVATE_PROJECT_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }

    const { data } = await axios.put(`/api/privateProjects/${privateProject._id}`, privateProject, config)

    dispatch({ type: PRIVATE_PROJECT_UPDATE_SUCCESS, payload: data })
    dispatch({ type: PRIVATE_PROJECT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: PRIVATE_PROJECT_UPDATE_FAIL, payload: message })
  }
}

export const createPrivateProjectReview = (privateProjectId, review) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRIVATE_PROJECT_CREATE_REVIEW_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }

    await axios.post(`/api/privateProjects/${privateProjectId}/reviews`, review, config)

    dispatch({ type: PRIVATE_PROJECT_CREATE_REVIEW_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: PRIVATE_PROJECT_CREATE_REVIEW_FAIL, payload: message })
  }
}

export const listTopPrivateProjects = () => async (dispatch) => {
  try {
    dispatch({ type: PRIVATE_PROJECT_TOP_REQUEST })

    const { data } = await axios.get(`/api/privateProjects/top`)

    dispatch({ type: PRIVATE_PROJECT_TOP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PRIVATE_PROJECT_TOP_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}
