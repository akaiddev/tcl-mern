
import {
    CONTACT_INFO_CREATE_FAIL,
    CONTACT_INFO_CREATE_REQUEST,
    CONTACT_INFO_CREATE_RESET,
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
    CONTACT_INFO_UPDATE_RESET,
    CONTACT_INFO_UPDATE_SUCCESS
} from './../constants/contactInfoConstants'
  
  export const contactInfoListReducer = (state = { contactInfos: [] }, action) => {
    switch (action.type) {
      case CONTACT_INFO_LIST_REQUEST:
        return { loading: true, contactInfos: [] }
      case CONTACT_INFO_LIST_SUCCESS:
        return { loading: false, contactInfos: action.payload }
      case CONTACT_INFO_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const contactInfoDetailsReducer = (state = { contactInfo: {} }, action) => {
    switch (action.type) {
      case CONTACT_INFO_DETAILS_REQUEST:
        return { ...state, loading: true }
      case CONTACT_INFO_DETAILS_SUCCESS:
        return { loading: false, contactInfo: action.payload }
      case CONTACT_INFO_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const contactInfoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case CONTACT_INFO_DELETE_REQUEST:
        return { loading: true }
      case CONTACT_INFO_DELETE_SUCCESS:
        return { loading: false, success: true }
      case CONTACT_INFO_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const contactInfoCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CONTACT_INFO_CREATE_REQUEST:
        return { loading: true }
      case CONTACT_INFO_CREATE_SUCCESS:
        return { loading: false, success: true, contactInfo: action.payload }
      case CONTACT_INFO_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case CONTACT_INFO_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const contactInfoUpdateReducer = (state = { contactInfo: {} }, action) => {
    switch (action.type) {
      case CONTACT_INFO_UPDATE_REQUEST:
        return { loading: true }
      case CONTACT_INFO_UPDATE_SUCCESS:
        return { loading: false, success: true, contactInfo: action.payload }
      case CONTACT_INFO_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case CONTACT_INFO_UPDATE_RESET:
        return { contactInfo: {} }
      default:
        return state
    }
  }
  