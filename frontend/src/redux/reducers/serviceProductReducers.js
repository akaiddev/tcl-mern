import {
  SERVICE_PRODUCT_CREATE_FAIL,
  SERVICE_PRODUCT_CREATE_REQUEST,
  SERVICE_PRODUCT_CREATE_RESET,
  SERVICE_PRODUCT_CREATE_SUCCESS,
  SERVICE_PRODUCT_DELETE_FAIL,
  SERVICE_PRODUCT_DELETE_REQUEST,
  SERVICE_PRODUCT_DELETE_SUCCESS,
  SERVICE_PRODUCT_DETAILS_FAIL,
  SERVICE_PRODUCT_DETAILS_REQUEST,
  SERVICE_PRODUCT_DETAILS_SUCCESS,
  SERVICE_PRODUCT_LIST_FAIL,
  SERVICE_PRODUCT_LIST_REQUEST,
  SERVICE_PRODUCT_LIST_SUCCESS,
  SERVICE_PRODUCT_UPDATE_FAIL,
  SERVICE_PRODUCT_UPDATE_REQUEST,
  SERVICE_PRODUCT_UPDATE_RESET,
  SERVICE_PRODUCT_UPDATE_SUCCESS
} from './../constants/serviceProductConstants'

export const serviceProductListReducer = (state = { serviceProducts: [] }, action) => {
  switch (action.type) {
    case SERVICE_PRODUCT_LIST_REQUEST:
      return { loading: true, serviceProducts: [] }
    case SERVICE_PRODUCT_LIST_SUCCESS:
      return { loading: false, serviceProducts: action.payload }
    case SERVICE_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const serviceProductDetailsReducer = (state = { serviceProduct: { reviews: [] } }, action) => {
  switch (action.type) {
    case SERVICE_PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case SERVICE_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, serviceProduct: action.payload }
    case SERVICE_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const serviceProductDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_PRODUCT_DELETE_REQUEST:
      return { loading: true }
    case SERVICE_PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case SERVICE_PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const serviceProductCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_PRODUCT_CREATE_REQUEST:
      return { loading: true }
    case SERVICE_PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, serviceProduct: action.payload }
    case SERVICE_PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case SERVICE_PRODUCT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const serviceProductUpdateReducer = (state = { serviceProduct: {} }, action) => {
  switch (action.type) {
    case SERVICE_PRODUCT_UPDATE_REQUEST:
      return { loading: true }
    case SERVICE_PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, serviceProduct: action.payload }
    case SERVICE_PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case SERVICE_PRODUCT_UPDATE_RESET:
      return { serviceProduct: {} }
    default:
      return state
  }
}
