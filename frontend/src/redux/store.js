import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  boardOfDirectorCreateReducer,
  boardOfDirectorDeleteReducer,
  boardOfDirectorDetailsReducer,
  boardOfDirectorListReducer,
  boardOfDirectorUpdateReducer
} from './reducers/BoardOfDirectorReducers'
import { careerCreateReducer, careerDeleteReducer, careerDetailsReducer, careerListReducer, careerUpdateReducer } from './reducers/CareerReducers'
import {
  contactInfoCreateReducer,
  contactInfoDeleteReducer,
  contactInfoDetailsReducer,
  contactInfoListReducer,
  contactInfoUpdateReducer
} from './reducers/contactInfoReducers'
import { corporateCreateReducer, corporateDeleteReducer, corporateDetailsReducer, corporateListReducer, corporateUpdateReducer } from './reducers/CorporateReducers'
import {
  equipmentCreateReducer,
  equipmentDeleteReducer,
  equipmentDetailsReducer,
  equipmentListReducer,
  equipmentReviewCreateReducer,
  equipmentTopRatedReducer,
  equipmentUpdateReducer
} from './reducers/equipmentReducers'
import { managementCreateReducer, managementDeleteReducer, managementDetailsReducer, managementListReducer, managementUpdateReducer } from './reducers/ManagementReducers'
import { overviewCreateReducer, overviewDeleteReducer, overviewDetailsReducer, overviewListReducer, overviewUpdateReducer } from './reducers/OverviewReducers'
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
import {
  serviceProductCreateReducer,
  serviceProductDeleteReducer,
  serviceProductDetailsReducer,
  serviceProductListReducer,
  serviceProductUpdateReducer
} from './reducers/serviceProductReducers'
import {
  socialMediaCreateReducer,
  socialMediaDeleteReducer,
  socialMediaDetailsReducer,
  socialMediaListReducer,
  socialMediaUpdateReducer
} from './reducers/SocialMediaReducers'
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
  // Career 
  careerList: careerListReducer,
  careerDetails: careerDetailsReducer,
  careerDelete: careerDeleteReducer,
  careerCreate: careerCreateReducer,
  careerUpdate: careerUpdateReducer,
  
  // Contact Info
  contactInfoList: contactInfoListReducer,
  contactInfoDetails: contactInfoDetailsReducer,
  contactInfoDelete: contactInfoDeleteReducer,
  contactInfoCreate: contactInfoCreateReducer,
  contactInfoUpdate: contactInfoUpdateReducer,

  // Social Media
  socialMediaList: socialMediaListReducer,
  socialMediaDetails: socialMediaDetailsReducer,
  socialMediaDelete: socialMediaDeleteReducer,
  socialMediaCreate: socialMediaCreateReducer,
  socialMediaUpdate: socialMediaUpdateReducer,

  // Overviews
  overviewList: overviewListReducer,
  overviewDetails: overviewDetailsReducer,
  overviewDelete: overviewDeleteReducer,
  overviewCreate: overviewCreateReducer,
  overviewUpdate: overviewUpdateReducer,

  // Corporate
  corporateList: corporateListReducer,
  corporateDetails: corporateDetailsReducer,
  corporateDelete: corporateDeleteReducer,
  corporateCreate: corporateCreateReducer,
  corporateUpdate: corporateUpdateReducer,

  // Managements
  managementList: managementListReducer,
  managementDetails: managementDetailsReducer,
  managementDelete: managementDeleteReducer,
  managementCreate: managementCreateReducer,
  managementUpdate: managementUpdateReducer,

  // Board Of Director
  boardOfDirectorList: boardOfDirectorListReducer,
  boardOfDirectorDetails: boardOfDirectorDetailsReducer,
  boardOfDirectorDelete: boardOfDirectorDeleteReducer,
  boardOfDirectorCreate: boardOfDirectorCreateReducer,
  boardOfDirectorUpdate: boardOfDirectorUpdateReducer,

  // Service Product
  serviceProductList: serviceProductListReducer,
  serviceProductDetails: serviceProductDetailsReducer,
  serviceProductDelete: serviceProductDeleteReducer,
  serviceProductCreate: serviceProductCreateReducer,
  serviceProductUpdate: serviceProductUpdateReducer,

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
