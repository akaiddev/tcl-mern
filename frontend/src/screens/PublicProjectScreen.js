import React from 'react'
import Banner from '../components/Banner'
import PublicProjects from '../layouts/PublicProjects'

const PublicProjectScreen = () => {
  return (
    <>
      <Banner title='Public Project ' subtitle='LIST OF COMPLETED WORKS IN PUBLIC SECTOR (LGED) OR (RHD)' />

      <PublicProjects />
    </>
  )
}

export default PublicProjectScreen
