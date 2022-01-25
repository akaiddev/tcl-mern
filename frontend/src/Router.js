import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgotPassword from './accounts/ForgotPassword'
import Login from './accounts/Login'
import Profile from './accounts/Profile'
import Registration from './accounts/Registration'
import UserEditScreen from './accounts/UserEditScreen'
import UserListScreen from './accounts/UserListScreen'
import AdminScreen from './admin/AdminScreen'
import BoardOfDirectorEdit from './admin/update/BoardOfDirectorEdit'
import CareerEdit from './admin/update/CareerEdit'
import ContactInfoEdit from './admin/update/ContactInfoEdit'
import CorporateEdit from './admin/update/CorporateEdit'
import EquipmentEdit from './admin/update/EquipmentEdit'
import ManagementEdit from './admin/update/ManagementEdit'
import OverviewEdit from './admin/update/OverviewEdit'
import PrivateProjectEdit from './admin/update/PrivateProjectEdit'
import PublicProjectEdit from './admin/update/PublicProjectEdit'
import RunningProjectEdit from './admin/update/RunningProjectEdit'
import ServiceProductEdit from './admin/update/ServiceProductEdit'
import SocialMediaEdit from './admin/update/SocialMediaEdit'
import BoardOfDirectorList from './admin/views/BoardOfDirectorList'
import CareerList from './admin/views/CareerList'
import ContactInfoList from './admin/views/ContactInfoList'
import CorporateList from './admin/views/CorporateList'
import EquipmentList from './admin/views/EquipmentList'
import ManagementList from './admin/views/ManagementList'
import OverviewList from './admin/views/OverviewList'
import PrivateProjectList from './admin/views/PrivateProjectList'
import PublicProjectList from './admin/views/PublicProjectList'
import RunningProjectList from './admin/views/RunningProjectList'
import ServiceProductList from './admin/views/ServiceProductList'
import SocialMediaList from './admin/views/SocialMediaList'
import Footer from './common/Footer'
import Header from './common/Header'
import NotFound from './common/NotFound'
import CareerDetailScreen from './details/CareerDetailScreen'
import EquipmentDetailScreen from './details/EquipmentDetailScreen'
import PrivateProjectDetailScreen from './details/PrivateProjectDetailScreen'
import PublicProjectDetailScreen from './details/PublicProjectDetailScreen'
import RunningProjectDetailsScreen from './details/RunningProjectDetailsScreen'
import ServiceDetailScreen from './details/ServiceDetailScreen'
import AboutScreen from './screens/AboutScreen'
import CareerScreen from './screens/CareerScreen'
import CompleteProjectScreen from './screens/CompleteProjectScreen'
import ContactScreen from './screens/ContactScreen'
import EquipmentScreen from './screens/EquipmentScreen'
import HomeScreen from './screens/HomeScreen'
import ManagementScreen from './screens/ManagementScreen'
import PrivateProjectScreen from './screens/PrivateProjectScreen'
import PublicProjectScreen from './screens/PublicProjectScreen'
import RunningProjectScreen from './screens/RunningProjectScreen'
import ServiceScreen from './screens/ServiceScreen'

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />

        {/* Running-project */}
        <Route path='/running-project' element={<RunningProjectScreen />} />
        <Route path='/running-project-details/:id' element={<RunningProjectDetailsScreen />} />

        {/* about */}
        <Route path='/about' element={<AboutScreen />} />
        

        {/* Services */}
        <Route path='/service' element={<ServiceScreen />} />
        <Route path='/service-product-details/:id' element={<ServiceDetailScreen />} />

        {/* Equipments */}
        <Route path='/equipments' element={<EquipmentScreen />} />
        <Route path='/equipment-details/:id' element={<EquipmentDetailScreen />} />

        {/* Complete-project */}
        <Route path='/complete-project' element={<CompleteProjectScreen />} />

        {/* management */}
        <Route path='/management' element={<ManagementScreen />} />

        {/* Public-projects */}
        <Route path='/public-projects' element={<PublicProjectScreen />} />
        <Route path='/search/:keyword' element={<PublicProjectScreen />} />
        <Route path='/search/:keyword/page/:pageNumber' element={<PublicProjectScreen />} />
        <Route path='/page/:pageNumber' element={<PublicProjectScreen />} />
        <Route path='/public-project-details/:id' element={<PublicProjectDetailScreen />} />

        {/*Private-projects */}
        <Route path='/private-projects' element={<PrivateProjectScreen />} />
        <Route path='/search/:keyword' element={<PrivateProjectScreen />} />
        <Route path='/search/:keyword/page/:pageNumber' element={<PrivateProjectScreen />} />
        <Route path='/page/:pageNumber' element={<PrivateProjectScreen />} />
        <Route path='/private-project-details/:id' element={<PrivateProjectDetailScreen />} />

        {/* Contact */}
        <Route path='/contact' element={<ContactScreen />} />

        {/* Careers */}
        <Route path='/careers' element={<CareerScreen />} />
        <Route path='/career-datails/:id' element={<CareerDetailScreen />} />

        {/* Account admin Auth And User Screen */}
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin' element={<AdminScreen />} />
        <Route path='/admin/users' element={<UserListScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />

        {/* admin  panel*/}

        <Route path='/admin/careers' element={<CareerList />} />
        <Route path='/admin/career/:id/edit' element={<CareerEdit />} />

        <Route path='/admin/social-Media' element={<SocialMediaList />} />
        <Route path='/admin/social-media/:id/edit' element={<SocialMediaEdit />} />

        <Route path='/admin/contact-Info' element={<ContactInfoList />} />
        <Route path='/admin/contact-Info/:id/edit' element={<ContactInfoEdit />} />

        <Route path='/admin/management' element={<ManagementList />} />
        <Route path='/admin/management/:id/edit' element={<ManagementEdit />} />

        <Route path='/admin/board-of-director' element={<BoardOfDirectorList />} />
        <Route path='/admin/board-of-director/:id/edit' element={<BoardOfDirectorEdit />} />

        <Route path='/admin/corporate' element={<CorporateList />} />
        <Route path='/admin/corporate/:id/edit' element={<CorporateEdit />} />

        <Route path='/admin/overview' element={<OverviewList />} />
        <Route path='/admin/overview/:id/edit' element={<OverviewEdit />} />

        <Route path='/admin/service-product' element={<ServiceProductList />} />
        <Route path='/admin/service-product/:id/edit' element={<ServiceProductEdit />} />

        <Route path='/admin/equipment' element={<EquipmentList />} />
        <Route path='/admin/equipment/:pageNumber' element={<EquipmentList />} />
        <Route path='/admin/equipment/:id/edit' element={<EquipmentEdit />} />

        <Route path='/admin/running-project' element={<RunningProjectList />} />
        <Route path='/admin/running-project/:pageNumber' element={<RunningProjectList />} />
        <Route path='/admin/running-project/:id/edit' element={<RunningProjectEdit />} />

        <Route path='/admin/public-project' element={<PublicProjectList />} />
        <Route path='/admin/public-project/:pageNumber' element={<PublicProjectList />} />
        <Route path='/admin/public-project/:id/edit' element={<PublicProjectEdit />} />

        <Route path='/admin/private-project' element={<PrivateProjectList />} />
        <Route path='/admin/private-project/:pageNumber' element={<PrivateProjectList />} />
        <Route path='/admin/private-project/:id/edit' element={<PrivateProjectEdit />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default Router
