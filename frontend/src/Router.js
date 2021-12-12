import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './accounts/Login'
import Profile from './accounts/Profile'
import Registration from './accounts/Registration'
import EquipmentEdit from './admin/EquipmentEdit'
import EquipmentList from './admin/EquipmentList'
import PrivateProjectEdit from './admin/PrivateProjectEdit'
import PrivateProjectList from './admin/PrivateProjectList'
import PublicProjectEdit from './admin/PublicProjectEdit'
import PublicProjectList from './admin/PublicProjectList'
import RunningProjectEdit from './admin/RunningProjectEdit'
import RunningProjectList from './admin/RunningProjectList'
import ServiceProductEdit from './admin/ServiceProductEdit'
import ServiceProductList from './admin/ServiceProductList'
import UserEditScreen from './admin/UserEditScreen'
import UserListScreen from './admin/UserListScreen'
import Footer from './common/Footer'
import Header from './common/Header'
import NotFound from './common/NotFound'
import AboutScreen from './screens/AboutScreen'
import CompleteProjectScreen from './screens/CompleteProjectScreen'
import ContactScreen from './screens/ContactScreen'
import EquipmentDetailScreen from './screens/EquipmentDetailScreen'
import EquipmentScreen from './screens/EquipmentScreen'
import HomeScreen from './screens/HomeScreen'
import PrivateProjectDetailScreen from './screens/PrivateProjectDetailScreen'
import PrivateProjectScreen from './screens/PrivateProjectScreen'
import ProductServicesScreen from './screens/ProductServicesScreen'
import ProjectEquipmentScreen from './screens/ProjectEquipmentScreen'
import PublicProjectDetailScreen from './screens/PublicProjectDetailScreen'
import PublicProjectScreen from './screens/PublicProjectScreen'
import RunningProjectDetailsScreen from './screens/RunningProjectDetailsScreen'
import RunningProjectScreen from './screens/RunningProjectScreen'

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
        <Route path='/project-equipment' element={<ProjectEquipmentScreen />} />

        {/* Services */}
        <Route path='/service' element={<ProductServicesScreen />} />

        {/* Equipments */}
        <Route path='/equipments' element={<EquipmentScreen />} />
        <Route path='/equipment-details/:id' element={<EquipmentDetailScreen />} />

        {/* Complete-project */}
        <Route path='/complete-project' element={<CompleteProjectScreen />} />

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

        {/* Account admin Auth And User Screen */}
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin' element={<adminScreen />} />
        <Route path='/admin/users' element={<UserListScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />

        {/* admin  panel*/}

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