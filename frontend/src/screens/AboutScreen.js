import React from 'react'
import Banner from '../components/Banner'
import Corporates from '../layouts/Corporates'
import OurCoreValue from '../layouts/OurCoreValue'
import OverviewTexts from '../layouts/OverviewTexts'

const AboutScreen = () => {
  return (
    <div>
      <Banner
        title='About Us.'
        subtitle='We Building Everything That You Needed.'
      />
      <OverviewTexts />
      <Corporates />
      <OurCoreValue />
    </div>
  )
}

export default AboutScreen
