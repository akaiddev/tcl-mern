import React from 'react'
import BoardOfDirectors from '../layouts/BoardOfDirectors'
import HomeCarousel from '../layouts/HomeCarousel'
import Managements from '../layouts/Managements'
import WhoWeAre from '../layouts/WhoWeAre'
import WhyChooseUs from '../layouts/WhyChooseUs'

const HomeScreen = () => {
  return (
    <div className='home'>
      <HomeCarousel />
      <WhoWeAre />
      <BoardOfDirectors />
      <Managements />
      <WhyChooseUs />
      
    </div>
  )
}

export default HomeScreen
