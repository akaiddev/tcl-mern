import axios from 'axios'
import {
  SOCIAL_MEDIA_CREATE_FAIL,
  SOCIAL_MEDIA_CREATE_REQUEST,
  SOCIAL_MEDIA_CREATE_SUCCESS,
  SOCIAL_MEDIA_DELETE_FAIL,
  SOCIAL_MEDIA_DELETE_REQUEST,
  SOCIAL_MEDIA_DELETE_SUCCESS,
  SOCIAL_MEDIA_DETAILS_FAIL,
  SOCIAL_MEDIA_DETAILS_REQUEST,
  SOCIAL_MEDIA_DETAILS_SUCCESS,
  SOCIAL_MEDIA_LIST_FAIL,
  SOCIAL_MEDIA_LIST_REQUEST,
  SOCIAL_MEDIA_LIST_SUCCESS,
  SOCIAL_MEDIA_UPDATE_FAIL,
  SOCIAL_MEDIA_UPDATE_REQUEST,
  SOCIAL_MEDIA_UPDATE_SUCCESS
} from './../constants/SocialMediaConstants'
import { logout } from './userActions'

export const listSocialMedia = () => async (dispatch) => {
  try {
    dispatch({ type: SOCIAL_MEDIA_LIST_REQUEST })
    const { data } = await axios.get(`/api/socialMedias`)
    dispatch({ type: SOCIAL_MEDIA_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: SOCIAL_MEDIA_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const listSocialMediaDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SOCIAL_MEDIA_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/socialMedias/${id}`)
    dispatch({ type: SOCIAL_MEDIA_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: SOCIAL_MEDIA_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deleteSocialMedia = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SOCIAL_MEDIA_DELETE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    await axios.delete(`/api/socialMedias/${id}`, config)
    dispatch({ type: SOCIAL_MEDIA_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: SOCIAL_MEDIA_DELETE_FAIL, payload: message })
  }
}

export const createSocialMedia = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SOCIAL_MEDIA_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.post(`/api/socialMedias`, {}, config)
    dispatch({ type: SOCIAL_MEDIA_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: SOCIAL_MEDIA_CREATE_FAIL, payload: message })
  }
}

export const updateSocialMedia = (socialMedia) => async (dispatch, getState) => {
  try {
    dispatch({ type: SOCIAL_MEDIA_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.put(`/api/socialMedias/${socialMedia._id}`, socialMedia, config)

    dispatch({ type: SOCIAL_MEDIA_UPDATE_SUCCESS, payload: data })
    dispatch({ type: SOCIAL_MEDIA_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not Authorized, Token Failed') {
      dispatch(logout())
    }
    dispatch({ type: SOCIAL_MEDIA_UPDATE_FAIL, payload: message })
  }
}
