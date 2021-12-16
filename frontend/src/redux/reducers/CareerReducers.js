import {
    CAREER_CREATE_FAIL,
    CAREER_CREATE_REQUEST,
    CAREER_CREATE_RESET,
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
    CAREER_UPDATE_RESET,
    CAREER_UPDATE_SUCCESS
} from './../constants/CareerConstants'

export const careerListReducer = (state = { careers: [] }, action) => {
  switch (action.type) {
    case CAREER_LIST_REQUEST:
      return { loading: true, careers: [] }
    case CAREER_LIST_SUCCESS:
      return { loading: false, careers: action.payload }
    case CAREER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const careerDetailsReducer = (state = { career: {} }, action) => {
  switch (action.type) {
    case CAREER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case CAREER_DETAILS_SUCCESS:
      return { loading: false, career: action.payload }
    case CAREER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const careerDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CAREER_DELETE_REQUEST:
      return { loading: true }
    case CAREER_DELETE_SUCCESS:
      return { loading: false, success: true }
    case CAREER_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const careerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CAREER_CREATE_REQUEST:
      return { loading: true }
    case CAREER_CREATE_SUCCESS:
      return { loading: false, success: true, career: action.payload }
    case CAREER_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case CAREER_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const careerUpdateReducer = (state = { career: {} }, action) => {
  switch (action.type) {
    case CAREER_UPDATE_REQUEST:
      return { loading: true }
    case CAREER_UPDATE_SUCCESS:
      return { loading: false, success: true, career: action.payload }
    case CAREER_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case CAREER_UPDATE_RESET:
      return { career: {} }
    default:
      return state
  }
}
