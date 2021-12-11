import axios from 'axios'
import {
  PUBLIC_PROJECT_CREATE_FAIL,
  PUBLIC_PROJECT_CREATE_REQUEST,
  PUBLIC_PROJECT_CREATE_REVIEW_FAIL,
  PUBLIC_PROJECT_CREATE_REVIEW_REQUEST,
  PUBLIC_PROJECT_CREATE_REVIEW_SUCCESS,
  PUBLIC_PROJECT_CREATE_SUCCESS,
  PUBLIC_PROJECT_DELETE_FAIL,
  PUBLIC_PROJECT_DELETE_REQUEST,
  PUBLIC_PROJECT_DELETE_SUCCESS,
  PUBLIC_PROJECT_DETAILS_FAIL,
  PUBLIC_PROJECT_DETAILS_REQUEST,
  PUBLIC_PROJECT_DETAILS_SUCCESS,
  PUBLIC_PROJECT_LIST_FAIL,
  PUBLIC_PROJECT_LIST_REQUEST,
  PUBLIC_PROJECT_LIST_SUCCESS,
  PUBLIC_PROJECT_TOP_FAIL,
  PUBLIC_PROJECT_TOP_REQUEST,
  PUBLIC_PROJECT_TOP_SUCCESS,
  PUBLIC_PROJECT_UPDATE_FAIL,
  PUBLIC_PROJECT_UPDATE_REQUEST,
  PUBLIC_PROJECT_UPDATE_SUCCESS,
} from '../constants/publicProjectConstants'
import { logout } from './userActions'

export const listPublicProject =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: PUBLIC_PROJECT_LIST_REQUEST })
      const { data } = await axios.get(`/api/publicProjects?keyword=${keyword}&pageNumber=${pageNumber}`)
      dispatch({ type: PUBLIC_PROJECT_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: PUBLIC_PROJECT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
  }

export const listPublicProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PUBLIC_PROJECT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/publicProjects/${id}`)

    dispatch({ type: PUBLIC_PROJECT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PUBLIC_PROJECT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deletePublicProject = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PUBLIC_PROJECT_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }

    await axios.delete(`/api/publicProjects/${id}`, config)

    dispatch({ type: PUBLIC_PROJECT_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: PUBLIC_PROJECT_DELETE_FAIL, payload: message })
  }
}

export const createPublicProject = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PUBLIC_PROJECT_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }

    const { data } = await axios.post(`/api/publicProjects`, {}, config)

    dispatch({ type: PUBLIC_PROJECT_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: PUBLIC_PROJECT_CREATE_FAIL, payload: message })
  }
}

export const updatePublicProject = (publicProject) => async (dispatch, getState) => {
  try {
    dispatch({ type: PUBLIC_PROJECT_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }

    const { data } = await axios.put(`/api/publicProjects/${publicProject._id}`, publicProject, config)

    dispatch({ type: PUBLIC_PROJECT_UPDATE_SUCCESS, payload: data })
    dispatch({ type: PUBLIC_PROJECT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: PUBLIC_PROJECT_UPDATE_FAIL, payload: message })
  }
}

export const createPublicProjectReview = (publicProjectId, review) => async (dispatch, getState) => {
  try {
    dispatch({ type: PUBLIC_PROJECT_CREATE_REVIEW_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }

    await axios.post(`/api/publicProjects/${publicProjectId}/reviews`, review, config)

    dispatch({ type: PUBLIC_PROJECT_CREATE_REVIEW_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: PUBLIC_PROJECT_CREATE_REVIEW_FAIL, payload: message })
  }
}

export const listTopPublicProjects = () => async (dispatch) => {
  try {
    dispatch({ type: PUBLIC_PROJECT_TOP_REQUEST })

    const { data } = await axios.get(`/api/publicProjects/top`)

    dispatch({ type: PUBLIC_PROJECT_TOP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PUBLIC_PROJECT_TOP_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}
