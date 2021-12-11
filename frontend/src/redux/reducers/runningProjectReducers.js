import {
  RUNNING_PROJECT_CREATE_FAIL,
  RUNNING_PROJECT_CREATE_REQUEST,
  RUNNING_PROJECT_CREATE_RESET,
  RUNNING_PROJECT_CREATE_REVIEW_FAIL,
  RUNNING_PROJECT_CREATE_REVIEW_REQUEST,
  RUNNING_PROJECT_CREATE_REVIEW_RESET,
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
  RUNNING_PROJECT_UPDATE_RESET,
  RUNNING_PROJECT_UPDATE_SUCCESS,
} from '../constants/runningProjectConstants'

export const runningProjectListReducer = (state = { runningProjects: [] }, action) => {
  switch (action.type) {
    case RUNNING_PROJECT_LIST_REQUEST:
      return { loading: true, runningProjects: [] }
    case RUNNING_PROJECT_LIST_SUCCESS:
      return { loading: false,   runningProjects: action.payload.runningProjects, pages: action.payload.pages, page: action.payload.page}
    case RUNNING_PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const runningProjectDetailsReducer = (state = { runningProject: { reviews: [] } }, action) => {
  switch (action.type) {
    case RUNNING_PROJECT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case RUNNING_PROJECT_DETAILS_SUCCESS:
      return { loading: false, runningProject: action.payload }
    case RUNNING_PROJECT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const runningProjectDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case RUNNING_PROJECT_DELETE_REQUEST:
      return { loading: true }
    case RUNNING_PROJECT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case RUNNING_PROJECT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const runningProjectCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case RUNNING_PROJECT_CREATE_REQUEST:
      return { loading: true }
    case RUNNING_PROJECT_CREATE_SUCCESS:
      return { loading: false, success: true, runningProject: action.payload }
    case RUNNING_PROJECT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case RUNNING_PROJECT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const runningProjectUpdateReducer = (state = { runningProject: {} }, action) => {
  switch (action.type) {
    case RUNNING_PROJECT_UPDATE_REQUEST:
      return { loading: true }
    case RUNNING_PROJECT_UPDATE_SUCCESS:
      return { loading: false, success: true, runningProject: action.payload }
    case RUNNING_PROJECT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case RUNNING_PROJECT_UPDATE_RESET:
      return { runningProject: {} }
    default:
      return state
  }
}

export const runningProjectReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case RUNNING_PROJECT_CREATE_REVIEW_REQUEST:
      return { loading: true }
    case RUNNING_PROJECT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true }
    case RUNNING_PROJECT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }
    case RUNNING_PROJECT_CREATE_REVIEW_RESET:
      return {}
    default:
      return state
  }
}

export const runningProjectTopRatedReducer = (state = { runningProjects: [] }, action) => {
  switch (action.type) {
    case RUNNING_PROJECT_TOP_REQUEST:
      return { loading: true, runningProjects: [] }
    case RUNNING_PROJECT_TOP_SUCCESS:
      return { loading: false, runningProjects: action.payload }
    case RUNNING_PROJECT_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
