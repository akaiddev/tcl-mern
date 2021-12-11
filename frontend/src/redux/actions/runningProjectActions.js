import axios from 'axios'
import {
  RUNNING_PROJECT_CREATE_FAIL,
  RUNNING_PROJECT_CREATE_REQUEST,
  RUNNING_PROJECT_CREATE_REVIEW_FAIL,
  RUNNING_PROJECT_CREATE_REVIEW_REQUEST,
  RUNNING_PROJECT_CREATE_REVIEW_SUCCESS,
  RUNNING_PROJECT_CREATE_SUCCESS,
  RUNNING_PROJECT_DELETE_FAIL,
  RUNNING_PROJECT_DELETE_REQUEST,
  RUNNING_PROJECT_DELETE_SUCCESS,
  RUNNING_PROJECT_DETAILS_FAIL,
  RUNNING_PROJECT_DETAILS_REQUEST,
  RUNNING_PROJECT_DETAILS_SUCCESS,
  RUNNING_PROJECT_LIST_FAIL,
  RUNNING_PROJECT_LIST_REQUEST,
  RUNNING_PROJECT_LIST_SUCCESS,
  RUNNING_PROJECT_TOP_FAIL,
  RUNNING_PROJECT_TOP_REQUEST,
  RUNNING_PROJECT_TOP_SUCCESS,
  RUNNING_PROJECT_UPDATE_FAIL,
  RUNNING_PROJECT_UPDATE_REQUEST,
  RUNNING_PROJECT_UPDATE_SUCCESS,
} from '../constants/runningProjectConstants'
import { logout } from './userActions'

export const listRunningProject =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: RUNNING_PROJECT_LIST_REQUEST })
      const { data } = await axios.get(`/api/runningProjects?keyword=${keyword}&pageNumber=${pageNumber}`)
      dispatch({ type: RUNNING_PROJECT_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: RUNNING_PROJECT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
  }

export const listRunningProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: RUNNING_PROJECT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/runningProjects/${id}`)
    dispatch({ type: RUNNING_PROJECT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: RUNNING_PROJECT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deleteRunningProject = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: RUNNING_PROJECT_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()
    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    await axios.delete(`/api/runningProjects/${id}`, config)
    dispatch({ type: RUNNING_PROJECT_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: RUNNING_PROJECT_DELETE_FAIL, payload: message })
  }
}

export const createRunningProject = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: RUNNING_PROJECT_CREATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }

    const { data } = await axios.post(`/api/runningProjects`, {}, config)

    dispatch({ type: RUNNING_PROJECT_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: RUNNING_PROJECT_CREATE_FAIL, payload: message })
  }
}

export const updateRunningProject = (runningProject) => async (dispatch, getState) => {
  try {
    dispatch({ type: RUNNING_PROJECT_UPDATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.put(`/api/runningProjects/${runningProject._id}`, runningProject, config)

    dispatch({ type: RUNNING_PROJECT_UPDATE_SUCCESS, payload: data })

    dispatch({ type: RUNNING_PROJECT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: RUNNING_PROJECT_UPDATE_FAIL, payload: message })
  }
}

export const createRunningProjectReview = (runningProjectId, review) => async (dispatch, getState) => {
  try {
    dispatch({ type: RUNNING_PROJECT_CREATE_REVIEW_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }

    await axios.post(`/api/runningProjects/${runningProjectId}/reviews`, review, config)

    dispatch({ type: RUNNING_PROJECT_CREATE_REVIEW_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: RUNNING_PROJECT_CREATE_REVIEW_FAIL, payload: message })
  }
}

export const listTopRunningProjects = () => async (dispatch) => {
  try {
    dispatch({ type: RUNNING_PROJECT_TOP_REQUEST })

    const { data } = await axios.get(`/api/runningProjects/top`)

    dispatch({ type: RUNNING_PROJECT_TOP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: RUNNING_PROJECT_TOP_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}
