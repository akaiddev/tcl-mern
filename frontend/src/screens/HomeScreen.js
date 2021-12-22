import React from 'react'
import FeatureArea from '../layouts/FeatureArea'
import HomeCarousel from '../layouts/HomeCarousel'
import Managements from '../layouts/Managements'

const HomeScreen = () => {
  return (
    <div className='home'>
      <HomeCarousel />
      <FeatureArea />
      <Managements />      

    </div>
  )
}

export default HomeScreen

