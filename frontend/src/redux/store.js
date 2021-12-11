import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  equipmentCreateReducer,
  equipmentDeleteReducer,
  equipmentDetailsReducer,
  equipmentListReducer,
  equipmentReviewCreateReducer,
  equipmentTopRatedReducer,
  equipmentUpdateReducer
} from './reducers/equipmentReducers'
import {
  privateProjectCreateReducer,
  privateProjectDeleteReducer,
  privateProjectDetailsReducer,
  privateProjectListReducer,
  privateProjectReviewCreateReducer,
  privateProjectTopRatedReducer,
  privateProjectUpdateReducer
} from './reducers/privateProjectReducers'
import {
  publicProjectCreateReducer,
  publicProjectDeleteReducer,
  publicProjectDetailsReducer,
  publicProjectListReducer,
  publicProjectReviewCreateReducer,
  publicProjectTopRatedReducer,
  publicProjectUpdateReducer
} from './reducers/publicProjectReducers'
import {
  runningProjectCreateReducer,
  runningProjectDeleteReducer,
  runningProjectDetailsReducer,
  runningProjectListReducer,
  runningProjectReviewCreateReducer,
  runningProjectTopRatedReducer,
  runningProjectUpdateReducer
} from './reducers/runningProjectReducers'
import { serviceProductListReducer } from './reducers/serviceProductReducers'
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userUpdateReducer
} from './reducers/userReducers'

const reducer = combineReducers({
  // Service Product
  serviceProductList: serviceProductListReducer,

  // equipment List
  equipmentList: equipmentListReducer,
  equipmentDetails: equipmentDetailsReducer,
  equipmentDelete: equipmentDeleteReducer,
  equipmentCreate: equipmentCreateReducer,
  equipmentUpdate: equipmentUpdateReducer,
  equipmentReviewCreate: equipmentReviewCreateReducer,
  equipmentTopRated: equipmentTopRatedReducer,

  // running Project List
  runningProjectList: runningProjectListReducer,
  runningProjectDetails: runningProjectDetailsReducer,
  runningProjectDelete: runningProjectDeleteReducer,
  runningProjectCreate: runningProjectCreateReducer,
  runningProjectUpdate: runningProjectUpdateReducer,
  runningProjectReviewCreate: runningProjectReviewCreateReducer,
  runningProjectTopRated: runningProjectTopRatedReducer,

  // public Project
  publicProjectList: publicProjectListReducer,
  publicProjectDetails: publicProjectDetailsReducer,
  publicProjectDelete: publicProjectDeleteReducer,
  publicProjectCreate: publicProjectCreateReducer,
  publicProjectUpdate: publicProjectUpdateReducer,
  publicProjectReviewCreate: publicProjectReviewCreateReducer,
  publicProjectTopRated: publicProjectTopRatedReducer,

  // private Project
  privateProjectList: privateProjectListReducer,
  privateProjectDetails: privateProjectDetailsReducer,
  privateProjectDelete: privateProjectDeleteReducer,
  privateProjectCreate: privateProjectCreateReducer,
  privateProjectUpdate: privateProjectUpdateReducer,
  privateProjectReviewCreate: privateProjectReviewCreateReducer,
  privateProjectTopRated: privateProjectTopRatedReducer,

  // Auth
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  updateUser: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
