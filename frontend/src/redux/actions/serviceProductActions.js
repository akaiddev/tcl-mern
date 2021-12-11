import axios from 'axios'
import { SERVICE_PRODUCT_LIST_FAIL, SERVICE_PRODUCT_LIST_REQUEST, SERVICE_PRODUCT_LIST_SUCCESS } from './../constants/serviceProductConstants'

export const listServiceProduct = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_PRODUCT_LIST_REQUEST })
    const { data } = await axios.get(`/api/serviceProducts`)
    dispatch({ type: SERVICE_PRODUCT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: SERVICE_PRODUCT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}
