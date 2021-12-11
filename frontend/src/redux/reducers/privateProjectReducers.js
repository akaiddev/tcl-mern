import {
  PRIVATE_PROJECT_CREATE_FAIL,
  PRIVATE_PROJECT_CREATE_REQUEST,
  PRIVATE_PROJECT_CREATE_RESET,
  PRIVATE_PROJECT_CREATE_REVIEW_FAIL,
  PRIVATE_PROJECT_CREATE_REVIEW_REQUEST,
  PRIVATE_PROJECT_CREATE_REVIEW_RESET,
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
  PRIVATE_PROJECT_UPDATE_RESET,
  PRIVATE_PROJECT_UPDATE_SUCCESS,
} from '../constants/privateProjectsConstants'

export const privateProjectListReducer = (state = { privateProjects: [] }, action) => {
  switch (action.type) {
    case PRIVATE_PROJECT_LIST_REQUEST:
      return { loading: true, privateProjects: [] }
    case PRIVATE_PROJECT_LIST_SUCCESS:
      return { loading: false, privateProjects: action.payload.privateProjects, pages: action.payload.pages, page: action.payload.page }
    case PRIVATE_PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const privateProjectDetailsReducer = (state = { privateProject: { reviews: [] } }, action) => {
  switch (action.type) {
    case PRIVATE_PROJECT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PRIVATE_PROJECT_DETAILS_SUCCESS:
      return { loading: false, privateProject: action.payload }
    case PRIVATE_PROJECT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const privateProjectDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRIVATE_PROJECT_DELETE_REQUEST:
      return { loading: true }
    case PRIVATE_PROJECT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case PRIVATE_PROJECT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const privateProjectCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRIVATE_PROJECT_CREATE_REQUEST:
      return { loading: true }
    case PRIVATE_PROJECT_CREATE_SUCCESS:
      return { loading: false, success: true, privateProject: action.payload }
    case PRIVATE_PROJECT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PRIVATE_PROJECT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const privateProjectUpdateReducer = (state = { privateProject: {} }, action) => {
  switch (action.type) {
    case PRIVATE_PROJECT_UPDATE_REQUEST:
      return { loading: true }
    case PRIVATE_PROJECT_UPDATE_SUCCESS:
      return { loading: false, success: true, privateProject: action.payload }
    case PRIVATE_PROJECT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PRIVATE_PROJECT_UPDATE_RESET:
      return { privateProject: {} }
    default:
      return state
  }
}

export const privateProjectReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRIVATE_PROJECT_CREATE_REVIEW_REQUEST:
      return { loading: true }
    case PRIVATE_PROJECT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true }
    case PRIVATE_PROJECT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }
    case PRIVATE_PROJECT_CREATE_REVIEW_RESET:
      return {}
    default:
      return state
  }
}

export const privateProjectTopRatedReducer = (state = { privateProjects: [] }, action) => {
  switch (action.type) {
    case PRIVATE_PROJECT_TOP_REQUEST:
      return { loading: true, privateProjects: [] }
    case PRIVATE_PROJECT_TOP_SUCCESS:
      return { loading: false, privateProjects: action.payload }
    case PRIVATE_PROJECT_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
