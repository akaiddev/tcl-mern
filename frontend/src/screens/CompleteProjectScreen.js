import React from 'react'
import Banner from '../components/Banner'
import TopRatedPrivateProject from '../layouts/TopRatedPrivateProject'
import TopRatedPublicProject from '../layouts/TopRatedPublicProject'

const CompleteProjectScreen = () => {
  return (
    <>
      <Banner title='Complete Project ' subtitle='OUR All COMPLETED WORKS PUBLIC (RHD), PRIVATE SECTOR.' />

      <TopRatedPublicProject />
      <TopRatedPrivateProject />
    </>
  )
}

export default CompleteProjectScreen
