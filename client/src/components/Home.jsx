import React from 'react'
import Banner from './Banner'
import AboutHome from './AboutHome'
import TopRatedHome from './TopRatedHome'
import OfferBannerHome from './OfferBannerHome'
import Testimonial from './Testimonial'
import ContactHome from './ContactHome'
import CompanyLogo from './CompanyLogo'
import PopUpForm from './PopUpForm'

function Home() {
  return (
    <>
      <Banner />
      <AboutHome />
      <TopRatedHome />
      <OfferBannerHome />
      <Testimonial />
      <CompanyLogo />
      <ContactHome />
      {/* <PopUpForm /> */}
    </>
  )
}

export default Home
