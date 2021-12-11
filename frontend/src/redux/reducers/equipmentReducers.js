import {
    EQUIPMENTS_CREATE_FAIL,
    EQUIPMENTS_CREATE_REQUEST,
    EQUIPMENTS_CREATE_RESET,
    EQUIPMENTS_CREATE_REVIEW_FAIL,
    EQUIPMENTS_CREATE_REVIEW_REQUEST,
    EQUIPMENTS_CREATE_REVIEW_RESET,
    EQUIPMENTS_CREATE_REVIEW_SUCCESS,
    EQUIPMENTS_CREATE_SUCCESS,
    EQUIPMENTS_DELETE_FAIL,
    EQUIPMENTS_DELETE_REQUEST,
    EQUIPMENTS_DELETE_SUCCESS,
    EQUIPMENTS_DETAILS_FAIL,
    EQUIPMENTS_DETAILS_REQUEST,
    EQUIPMENTS_DETAILS_SUCCESS,
    EQUIPMENTS_LIST_FAIL,
    EQUIPMENTS_LIST_REQUEST,
    EQUIPMENTS_LIST_SUCCESS,
    EQUIPMENTS_TOP_FAIL,
    EQUIPMENTS_TOP_REQUEST,
    EQUIPMENTS_TOP_SUCCESS,
    EQUIPMENTS_UPDATE_FAIL,
    EQUIPMENTS_UPDATE_REQUEST,
    EQUIPMENTS_UPDATE_RESET,
    EQUIPMENTS_UPDATE_SUCCESS,
  } from '../constants/equipmentConstants'
  
  export const equipmentListReducer = (state = { equipments: [] }, action) => {
    switch (action.type) {
      case EQUIPMENTS_LIST_REQUEST:
        return { loading: true, equipments: [] }
      case EQUIPMENTS_LIST_SUCCESS:
        return { loading: false, equipments: action.payload.equipments, pages: action.payload.pages, page: action.payload.page }
      case EQUIPMENTS_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const equipmentDetailsReducer = (state = { equipment: { reviews: [] } }, action) => {
    switch (action.type) {
      case EQUIPMENTS_DETAILS_REQUEST:
        return { ...state, loading: true }
      case EQUIPMENTS_DETAILS_SUCCESS:
        return { loading: false, equipment: action.payload }
      case EQUIPMENTS_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const equipmentDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case EQUIPMENTS_DELETE_REQUEST:
        return { loading: true }
      case EQUIPMENTS_DELETE_SUCCESS:
        return { loading: false, success: true }
      case EQUIPMENTS_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const equipmentCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case EQUIPMENTS_CREATE_REQUEST:
        return { loading: true }
      case EQUIPMENTS_CREATE_SUCCESS:
        return { loading: false, success: true, equipment: action.payload }
      case EQUIPMENTS_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case EQUIPMENTS_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const equipmentUpdateReducer = (state = { equipment: {} }, action) => {
    switch (action.type) {
      case EQUIPMENTS_UPDATE_REQUEST:
        return { loading: true }
      case EQUIPMENTS_UPDATE_SUCCESS:
        return { loading: false, success: true, equipment: action.payload }
      case EQUIPMENTS_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case EQUIPMENTS_UPDATE_RESET:
        return { equipment: {} }
      default:
        return state
    }
  }
  
  export const equipmentReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case EQUIPMENTS_CREATE_REVIEW_REQUEST:
        return { loading: true }
      case EQUIPMENTS_CREATE_REVIEW_SUCCESS:
        return { loading: false, success: true }
      case EQUIPMENTS_CREATE_REVIEW_FAIL:
        return { loading: false, error: action.payload }
      case EQUIPMENTS_CREATE_REVIEW_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const equipmentTopRatedReducer = (state = { equipments: [] }, action) => {
    switch (action.type) {
      case EQUIPMENTS_TOP_REQUEST:
        return { loading: true, equipments: [] }
      case EQUIPMENTS_TOP_SUCCESS:
        return { loading: false, equipments: action.payload }
      case EQUIPMENTS_TOP_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  