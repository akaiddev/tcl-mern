import React from 'react'
import Banner from '../components/Banner'
import PrivateProjects from '../layouts/PrivateProjects'

const PrivateProjectScreen = () => {
  return (
    <>
      <Banner title='Private Project' subtitle='LIST OF COMPLETED WORKS IN PRIVATE SECTOR' />

      <PrivateProjects />
    </>
  )
}

export default PrivateProjectScreen
