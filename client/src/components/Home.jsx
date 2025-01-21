import React from 'react'
import Banner from './Banner'
import AboutHome from './AboutHome'
import TopRatedHome from './TopRatedHome'
import OfferBannerHome from './OfferBannerHome'
import Testimonial from './Testimonial'
import ContactHome from './ContactHome'

function Home() {
  return (
    <div className=''>
      <Banner />
      <AboutHome />
      <TopRatedHome />
      <OfferBannerHome />
      <Testimonial />
      <ContactHome />
    </div>
  )
}

export default Home
