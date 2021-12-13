import {
    OVERVIEW_CREATE_FAIL,
    OVERVIEW_CREATE_REQUEST,
    OVERVIEW_CREATE_RESET,
    OVERVIEW_CREATE_SUCCESS,
    OVERVIEW_DELETE_FAIL,
    OVERVIEW_DELETE_REQUEST,
    OVERVIEW_DELETE_SUCCESS,
    OVERVIEW_DETAILS_FAIL,
    OVERVIEW_DETAILS_REQUEST,
    OVERVIEW_DETAILS_SUCCESS,
    OVERVIEW_LIST_FAIL,
    OVERVIEW_LIST_REQUEST,
    OVERVIEW_LIST_SUCCESS,
    OVERVIEW_UPDATE_FAIL,
    OVERVIEW_UPDATE_REQUEST,
    OVERVIEW_UPDATE_RESET,
    OVERVIEW_UPDATE_SUCCESS
} from './../constants/OverviewConstants'

export const overviewListReducer = (state = { overviews: [] }, action) => {
  switch (action.type) {
    case OVERVIEW_LIST_REQUEST:
      return { loading: true, overviews: [] }
    case OVERVIEW_LIST_SUCCESS:
      return { loading: false, overviews: action.payload }
    case OVERVIEW_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const overviewDetailsReducer = (state = { overview: {} }, action) => {
  switch (action.type) {
    case OVERVIEW_DETAILS_REQUEST:
      return { ...state, loading: true }
    case OVERVIEW_DETAILS_SUCCESS:
      return { loading: false, overview: action.payload }
    case OVERVIEW_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const overviewDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case OVERVIEW_DELETE_REQUEST:
      return { loading: true }
    case OVERVIEW_DELETE_SUCCESS:
      return { loading: false, success: true }
    case OVERVIEW_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const overviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case OVERVIEW_CREATE_REQUEST:
      return { loading: true }
    case OVERVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, overview: action.payload }
    case OVERVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case OVERVIEW_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const overviewUpdateReducer = (state = { overview: {} }, action) => {
  switch (action.type) {
    case OVERVIEW_UPDATE_REQUEST:
      return { loading: true }
    case OVERVIEW_UPDATE_SUCCESS:
      return { loading: false, success: true, overview: action.payload }
    case OVERVIEW_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case OVERVIEW_UPDATE_RESET:
      return { overview: {} }
    default:
      return state
  }
}
