import React from 'react'
import FeatureArea from '../layouts/FeatureArea'
import HomeCarousel from '../layouts/HomeCarousel'

const HomeScreen = () => {
  return (
    <div className='home'>
      <HomeCarousel />
      <FeatureArea />
    </div>
  )
}

export default HomeScreen
