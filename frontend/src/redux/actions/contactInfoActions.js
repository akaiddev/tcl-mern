import axios from 'axios'
import {
    CONTACT_INFO_CREATE_FAIL,
    CONTACT_INFO_CREATE_REQUEST,
    CONTACT_INFO_CREATE_SUCCESS,
    CONTACT_INFO_DELETE_FAIL,
    CONTACT_INFO_DELETE_REQUEST,
    CONTACT_INFO_DELETE_SUCCESS,
    CONTACT_INFO_DETAILS_FAIL,
    CONTACT_INFO_DETAILS_REQUEST,
    CONTACT_INFO_DETAILS_SUCCESS,
    CONTACT_INFO_LIST_FAIL,
    CONTACT_INFO_LIST_REQUEST,
    CONTACT_INFO_LIST_SUCCESS,
    CONTACT_INFO_UPDATE_FAIL,
    CONTACT_INFO_UPDATE_REQUEST,
    CONTACT_INFO_UPDATE_SUCCESS
} from './../constants/contactInfoConstants'
import { logout } from './userActions'


export const listContactInfo = () => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_INFO_LIST_REQUEST })
    const { data } = await axios.get(`/api/contactInfos`)
    dispatch({ type: CONTACT_INFO_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: CONTACT_INFO_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const listContactInfoDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_INFO_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/contactInfos/${id}`)
    dispatch({ type: CONTACT_INFO_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: CONTACT_INFO_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deleteContactInfo = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_INFO_DELETE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    await axios.delete(`/api/contactInfos/${id}`, config)
    dispatch({ type: CONTACT_INFO_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: CONTACT_INFO_DELETE_FAIL, payload: message })
  }
}

export const createContactInfo = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_INFO_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.post(`/api/contactInfos`, {}, config)
    dispatch({ type: CONTACT_INFO_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: CONTACT_INFO_CREATE_FAIL, payload: message })
  }
}

export const updateContactInfo = (contactInfo) => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_INFO_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.put(`/api/contactInfos/${contactInfo._id}`, contactInfo, config)

    dispatch({ type: CONTACT_INFO_UPDATE_SUCCESS, payload: data })
    dispatch({ type: CONTACT_INFO_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: CONTACT_INFO_UPDATE_FAIL, payload: message })
  }
}
