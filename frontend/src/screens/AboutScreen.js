import React from 'react'
import Banner from '../components/Banner'
import BoardOfDirectors from '../layouts/BoardOfDirectors'
import Corporates from '../layouts/Corporates'
import Managements from '../layouts/Managements'
import OurCoreValue from '../layouts/OurCoreValue'
import OverviewTexts from '../layouts/OverviewTexts'

const AboutScreen = () => {
  return (
    <div>
      <Banner title='About Us ' subtitle='Tanvir Constructions Limited.' />

      <BoardOfDirectors />
      <Managements />
      <OverviewTexts />
      <Corporates />
      <OurCoreValue />
    </div>
  )
}

export default AboutScreen
