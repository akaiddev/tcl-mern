import { SERVICE_PRODUCT_LIST_FAIL, SERVICE_PRODUCT_LIST_REQUEST, SERVICE_PRODUCT_LIST_SUCCESS } from './../constants/serviceProductConstants'

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
