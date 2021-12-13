import {
    CORPORATE_CREATE_FAIL,
    CORPORATE_CREATE_REQUEST,
    CORPORATE_CREATE_RESET,
    CORPORATE_CREATE_SUCCESS,
    CORPORATE_DELETE_FAIL,
    CORPORATE_DELETE_REQUEST,
    CORPORATE_DELETE_SUCCESS,
    CORPORATE_DETAILS_FAIL,
    CORPORATE_DETAILS_REQUEST,
    CORPORATE_DETAILS_SUCCESS,
    CORPORATE_LIST_FAIL,
    CORPORATE_LIST_REQUEST,
    CORPORATE_LIST_SUCCESS,
    CORPORATE_UPDATE_FAIL,
    CORPORATE_UPDATE_REQUEST,
    CORPORATE_UPDATE_RESET,
    CORPORATE_UPDATE_SUCCESS
} from './../constants/CorporateConstants'

export const corporateListReducer = (state = { corporates: [] }, action) => {
  switch (action.type) {
    case CORPORATE_LIST_REQUEST:
      return { loading: true, corporates: [] }
    case CORPORATE_LIST_SUCCESS:
      return { loading: false, corporates: action.payload }
    case CORPORATE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const corporateDetailsReducer = (state = { corporate: {} }, action) => {
  switch (action.type) {
    case CORPORATE_DETAILS_REQUEST:
      return { ...state, loading: true }
    case CORPORATE_DETAILS_SUCCESS:
      return { loading: false, corporate: action.payload }
    case CORPORATE_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const corporateDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CORPORATE_DELETE_REQUEST:
      return { loading: true }
    case CORPORATE_DELETE_SUCCESS:
      return { loading: false, success: true }
    case CORPORATE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const corporateCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CORPORATE_CREATE_REQUEST:
      return { loading: true }
    case CORPORATE_CREATE_SUCCESS:
      return { loading: false, success: true, corporate: action.payload }
    case CORPORATE_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case CORPORATE_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const corporateUpdateReducer = (state = { corporate: {} }, action) => {
  switch (action.type) {
    case CORPORATE_UPDATE_REQUEST:
      return { loading: true }
    case CORPORATE_UPDATE_SUCCESS:
      return { loading: false, success: true, corporate: action.payload }
    case CORPORATE_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case CORPORATE_UPDATE_RESET:
      return { corporate: {} }
    default:
      return state
  }
}
