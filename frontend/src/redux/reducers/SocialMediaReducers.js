import {
    SOCIAL_MEDIA_CREATE_FAIL,
    SOCIAL_MEDIA_CREATE_REQUEST,
    SOCIAL_MEDIA_CREATE_RESET,
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
    SOCIAL_MEDIA_UPDATE_RESET,
    SOCIAL_MEDIA_UPDATE_SUCCESS
} from './../constants/SocialMediaConstants'
  
  export const socialMediaListReducer = (state = { socialMedias: [] }, action) => {
    switch (action.type) {
      case SOCIAL_MEDIA_LIST_REQUEST:
        return { loading: true, socialMedias: [] }
      case SOCIAL_MEDIA_LIST_SUCCESS:
        return { loading: false, socialMedias: action.payload }
      case SOCIAL_MEDIA_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const socialMediaDetailsReducer = (state = { socialMedia: {} }, action) => {
    switch (action.type) {
      case SOCIAL_MEDIA_DETAILS_REQUEST:
        return { ...state, loading: true }
      case SOCIAL_MEDIA_DETAILS_SUCCESS:
        return { loading: false, socialMedia: action.payload }
      case SOCIAL_MEDIA_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const socialMediaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case SOCIAL_MEDIA_DELETE_REQUEST:
        return { loading: true }
      case SOCIAL_MEDIA_DELETE_SUCCESS:
        return { loading: false, success: true }
      case SOCIAL_MEDIA_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const socialMediaCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SOCIAL_MEDIA_CREATE_REQUEST:
        return { loading: true }
      case SOCIAL_MEDIA_CREATE_SUCCESS:
        return { loading: false, success: true, socialMedia: action.payload }
      case SOCIAL_MEDIA_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case SOCIAL_MEDIA_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const socialMediaUpdateReducer = (state = { socialMedia: {} }, action) => {
    switch (action.type) {
      case SOCIAL_MEDIA_UPDATE_REQUEST:
        return { loading: true }
      case SOCIAL_MEDIA_UPDATE_SUCCESS:
        return { loading: false, success: true, socialMedia: action.payload }
      case SOCIAL_MEDIA_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case SOCIAL_MEDIA_UPDATE_RESET:
        return { socialMedia: {} }
      default:
        return state
    }
  }
  