import React from 'react'
import JobPosts from '../layouts/JobPosts'
import Banner from './../components/Banner'

const CareerScreen = () => {
  return (
    <div>
      <Banner title='Career' subtitle='Discover who we are, what we do, and why we do it' />
      <JobPosts />
    </div>
  )
}

export default CareerScreen
