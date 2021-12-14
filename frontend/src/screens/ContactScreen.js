import React from 'react'
import Banner from '../components/Banner'
import GetInTouch from '../layouts/GetInTouch'
import SocialMedia from '../layouts/SocialMedia'

const ContactScreen = () => {
  return (
    <div className='contact'>
      <Banner title='Contact Us ' subtitle='Contact With Tanvir Constructions Limited' />
      <GetInTouch />
      <SocialMedia />
    </div>
  )
}

export default ContactScreen
