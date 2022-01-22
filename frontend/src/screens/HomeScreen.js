import React from 'react'
import BoardOfDirectors from '../layouts/BoardOfDirectors'
import FeatureArea from '../layouts/FeatureArea'
import HomeCarousel from '../layouts/HomeCarousel'
import Managements from '../layouts/Managements'
import WhyChooseUs from '../layouts/WhyChooseUs'

const HomeScreen = () => {
  return (
    <div className='home'>
      <HomeCarousel />
      <BoardOfDirectors />

      <FeatureArea />

      <Managements />
      <WhyChooseUs />
    </div>
  )
}

export default HomeScreen
