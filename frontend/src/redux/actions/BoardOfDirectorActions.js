import axios from 'axios'
import {
  BOARD_OF_DIRECTOR_CREATE_FAIL,
  BOARD_OF_DIRECTOR_CREATE_REQUEST,
  BOARD_OF_DIRECTOR_CREATE_SUCCESS,
  BOARD_OF_DIRECTOR_DELETE_FAIL,
  BOARD_OF_DIRECTOR_DELETE_REQUEST,
  BOARD_OF_DIRECTOR_DELETE_SUCCESS,
  BOARD_OF_DIRECTOR_DETAILS_FAIL,
  BOARD_OF_DIRECTOR_DETAILS_REQUEST,
  BOARD_OF_DIRECTOR_DETAILS_SUCCESS,
  BOARD_OF_DIRECTOR_LIST_FAIL,
  BOARD_OF_DIRECTOR_LIST_REQUEST,
  BOARD_OF_DIRECTOR_LIST_SUCCESS,
  BOARD_OF_DIRECTOR_UPDATE_FAIL,
  BOARD_OF_DIRECTOR_UPDATE_REQUEST,
  BOARD_OF_DIRECTOR_UPDATE_SUCCESS
} from './../constants/BoardOfDirectorConstants'
import { logout } from './userActions'

export const listBoardOfDirector = () => async (dispatch) => {
  try {
    dispatch({ type: BOARD_OF_DIRECTOR_LIST_REQUEST })
    const { data } = await axios.get(`/api/boardOfDirectors`)
    dispatch({ type: BOARD_OF_DIRECTOR_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: BOARD_OF_DIRECTOR_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const listBoardOfDirectorDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOARD_OF_DIRECTOR_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/boardOfDirectors/${id}`)
    dispatch({ type: BOARD_OF_DIRECTOR_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: BOARD_OF_DIRECTOR_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deleteBoardOfDirector = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BOARD_OF_DIRECTOR_DELETE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    await axios.delete(`/api/boardOfDirectors/${id}`, config)
    dispatch({ type: BOARD_OF_DIRECTOR_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: BOARD_OF_DIRECTOR_DELETE_FAIL, payload: message })
  }
}

export const createBoardOfDirector = () => async (dispatch, getState) => {
  try {
    dispatch({ type: BOARD_OF_DIRECTOR_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.post(`/api/boardOfDirectors`, {}, config)
    dispatch({ type: BOARD_OF_DIRECTOR_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: BOARD_OF_DIRECTOR_CREATE_FAIL, payload: message })
  }
}

export const updateBoardOfDirector = (boardOfDirector) => async (dispatch, getState) => {
  try {
    dispatch({ type: BOARD_OF_DIRECTOR_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()
    
    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.put(`/api/boardOfDirectors/${boardOfDirector._id}`, boardOfDirector, config)
    dispatch({ type: BOARD_OF_DIRECTOR_UPDATE_SUCCESS, payload: data })
    dispatch({ type: BOARD_OF_DIRECTOR_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: BOARD_OF_DIRECTOR_UPDATE_FAIL, payload: message })
  }
}
