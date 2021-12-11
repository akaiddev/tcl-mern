import React from 'react'
import Banner from '../components/Banner'
import Equipments from '../layouts/Equipments'
import PrivateProjects from '../layouts/PrivateProjects'
import TopRatedPublicProject from '../layouts/TopRatedPublicProject'

const ProjectEquipmentScreen = () => {
  return (
    <>
      <Banner title='Project And Equipment  ' subtitle='MAJOR CONSTRUCTION EQUIPMENT AND OUR All COMPLETED WORKS PUBLIC (RHD), PRIVATE SECTOR.' />
      <Equipments />
      <TopRatedPublicProject />
      <PrivateProjects />
    </>
  )
}

export default ProjectEquipmentScreen
