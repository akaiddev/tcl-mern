import React from 'react'
import Banner from '../components/Banner'
import Sidebar from './Sidebar'
import UserListScreen from './UserListScreen'

const adminScreen = () => {
  return (
    <>
      <Banner title='Dashboard' />
      <Sidebar />
      <UserListScreen />
    </>
  )
}

export default adminScreen
