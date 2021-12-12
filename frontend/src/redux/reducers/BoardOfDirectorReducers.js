import {
  BOARD_OF_DIRECTOR_CREATE_FAIL,
  BOARD_OF_DIRECTOR_CREATE_REQUEST,
  BOARD_OF_DIRECTOR_CREATE_RESET,
  BOARD_OF_DIRECTOR_CREATE_SUCCESS,
  BOARD_OF_DIRECTOR_DELETE_FAIL,
  BOARD_OF_DIRECTOR_DELETE_REQUEST,
  BOARD_OF_DIRECTOR_DELETE_SUCCESS,
  BOARD_OF_DIRECTOR_DETAILS_FAIL,
  BOARD_OF_DIRECTOR_DETAILS_REQUEST,
  BOARD_OF_DIRECTOR_DETAILS_SUCCESS,
  BOARD_OF_DIRECTOR_LIST_FAIL,
  BOARD_OF_DIRECTOR_LIST_REQUEST,
  BOARD_OF_DIRECTOR_LIST_SUCCESS,
  BOARD_OF_DIRECTOR_UPDATE_FAIL,
  BOARD_OF_DIRECTOR_UPDATE_REQUEST,
  BOARD_OF_DIRECTOR_UPDATE_RESET,
  BOARD_OF_DIRECTOR_UPDATE_SUCCESS
} from './../constants/BoardOfDirectorConstants'

export const boardOfDirectorListReducer = (state = { boardOfDirectors: [] }, action) => {
  switch (action.type) {
    case BOARD_OF_DIRECTOR_LIST_REQUEST:
      return { loading: true, boardOfDirectors: [] }
    case BOARD_OF_DIRECTOR_LIST_SUCCESS:
      return { loading: false, boardOfDirectors: action.payload }
    case BOARD_OF_DIRECTOR_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const boardOfDirectorDetailsReducer = (state = { boardOfDirector: {} }, action) => {
  switch (action.type) {
    case BOARD_OF_DIRECTOR_DETAILS_REQUEST:
      return { ...state, loading: true }
    case BOARD_OF_DIRECTOR_DETAILS_SUCCESS:
      return { loading: false, boardOfDirector: action.payload }
    case BOARD_OF_DIRECTOR_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const boardOfDirectorDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BOARD_OF_DIRECTOR_DELETE_REQUEST:
      return { loading: true }
    case BOARD_OF_DIRECTOR_DELETE_SUCCESS:
      return { loading: false, success: true }
    case BOARD_OF_DIRECTOR_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const boardOfDirectorCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BOARD_OF_DIRECTOR_CREATE_REQUEST:
      return { loading: true }
    case BOARD_OF_DIRECTOR_CREATE_SUCCESS:
      return { loading: false, success: true, boardOfDirector: action.payload }
    case BOARD_OF_DIRECTOR_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case BOARD_OF_DIRECTOR_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const boardOfDirectorUpdateReducer = (state = { boardOfDirector: {} }, action) => {
  switch (action.type) {
    case BOARD_OF_DIRECTOR_UPDATE_REQUEST:
      return { loading: true }
    case BOARD_OF_DIRECTOR_UPDATE_SUCCESS:
      return { loading: false, success: true, boardOfDirector: action.payload }
    case BOARD_OF_DIRECTOR_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case BOARD_OF_DIRECTOR_UPDATE_RESET:
      return { boardOfDirector: {} }
    default:
      return state
  }
}
