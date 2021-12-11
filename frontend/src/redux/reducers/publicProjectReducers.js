import {
  PUBLIC_PROJECT_CREATE_FAIL,
  PUBLIC_PROJECT_CREATE_REQUEST,
  PUBLIC_PROJECT_CREATE_RESET,
  PUBLIC_PROJECT_CREATE_REVIEW_FAIL,
  PUBLIC_PROJECT_CREATE_REVIEW_REQUEST,
  PUBLIC_PROJECT_CREATE_REVIEW_RESET,
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
  PUBLIC_PROJECT_UPDATE_RESET,
  PUBLIC_PROJECT_UPDATE_SUCCESS,
} from '../constants/publicProjectConstants'

export const publicProjectListReducer = (state = { publicProjects: [] }, action) => {
  switch (action.type) {
    case PUBLIC_PROJECT_LIST_REQUEST:
      return { loading: true, publicProjects: [] }
    case PUBLIC_PROJECT_LIST_SUCCESS:
      return { loading: false, publicProjects: action.payload.publicProjects, pages: action.payload.pages, page: action.payload.page }
    case PUBLIC_PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const publicProjectDetailsReducer = (state = { publicProject: { reviews: [] } }, action) => {
  switch (action.type) {
    case PUBLIC_PROJECT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PUBLIC_PROJECT_DETAILS_SUCCESS:
      return { loading: false, publicProject: action.payload }
    case PUBLIC_PROJECT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const publicProjectDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PUBLIC_PROJECT_DELETE_REQUEST:
      return { loading: true }
    case PUBLIC_PROJECT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case PUBLIC_PROJECT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const publicProjectCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PUBLIC_PROJECT_CREATE_REQUEST:
      return { loading: true }
    case PUBLIC_PROJECT_CREATE_SUCCESS:
      return { loading: false, success: true, publicProject: action.payload }
    case PUBLIC_PROJECT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PUBLIC_PROJECT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const publicProjectUpdateReducer = (state = { publicProject: {} }, action) => {
  switch (action.type) {
    case PUBLIC_PROJECT_UPDATE_REQUEST:
      return { loading: true }
    case PUBLIC_PROJECT_UPDATE_SUCCESS:
      return { loading: false, success: true, publicProject: action.payload }
    case PUBLIC_PROJECT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PUBLIC_PROJECT_UPDATE_RESET:
      return { publicProject: {} }
    default:
      return state
  }
}

export const publicProjectReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PUBLIC_PROJECT_CREATE_REVIEW_REQUEST:
      return { loading: true }
    case PUBLIC_PROJECT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true }
    case PUBLIC_PROJECT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }
    case PUBLIC_PROJECT_CREATE_REVIEW_RESET:
      return {}
    default:
      return state
  }
}

export const publicProjectTopRatedReducer = (state = { publicProjects: [] }, action) => {
  switch (action.type) {
    case PUBLIC_PROJECT_TOP_REQUEST:
      return { loading: true, publicProjects: [] }
    case PUBLIC_PROJECT_TOP_SUCCESS:
      return { loading: false, publicProjects: action.payload }
    case PUBLIC_PROJECT_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
