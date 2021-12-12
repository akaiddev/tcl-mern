import {
  MANAGEMENT_CREATE_FAIL,
  MANAGEMENT_CREATE_REQUEST,
  MANAGEMENT_CREATE_RESET,
  MANAGEMENT_CREATE_SUCCESS,
  MANAGEMENT_DELETE_FAIL,
  MANAGEMENT_DELETE_REQUEST,
  MANAGEMENT_DELETE_SUCCESS,
  MANAGEMENT_DETAILS_FAIL,
  MANAGEMENT_DETAILS_REQUEST,
  MANAGEMENT_DETAILS_SUCCESS,
  MANAGEMENT_LIST_FAIL,
  MANAGEMENT_LIST_REQUEST,
  MANAGEMENT_LIST_SUCCESS,
  MANAGEMENT_UPDATE_FAIL,
  MANAGEMENT_UPDATE_REQUEST,
  MANAGEMENT_UPDATE_RESET,
  MANAGEMENT_UPDATE_SUCCESS
} from './../constants/ManagementConstants'

export const managementListReducer = (state = { managements: [] }, action) => {
  switch (action.type) {
    case MANAGEMENT_LIST_REQUEST:
      return { loading: true, managements: [] }
    case MANAGEMENT_LIST_SUCCESS:
      return { loading: false, managements: action.payload }
    case MANAGEMENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const managementDetailsReducer = (state = { management: {} }, action) => {
  switch (action.type) {
    case MANAGEMENT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case MANAGEMENT_DETAILS_SUCCESS:
      return { loading: false, management: action.payload }
    case MANAGEMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const managementDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MANAGEMENT_DELETE_REQUEST:
      return { loading: true }
    case MANAGEMENT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case MANAGEMENT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const managementCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MANAGEMENT_CREATE_REQUEST:
      return { loading: true }
    case MANAGEMENT_CREATE_SUCCESS:
      return { loading: false, success: true, management: action.payload }
    case MANAGEMENT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case MANAGEMENT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const managementUpdateReducer = (state = { management: {} }, action) => {
  switch (action.type) {
    case MANAGEMENT_UPDATE_REQUEST:
      return { loading: true }
    case MANAGEMENT_UPDATE_SUCCESS:
      return { loading: false, success: true, management: action.payload }
    case MANAGEMENT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case MANAGEMENT_UPDATE_RESET:
      return { management: {} }
    default:
      return state
  }
}
