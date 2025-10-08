import React from 'react'
import '../../assets/styles/home.css'
import PackageCard from '../../components/website/PackageCard'

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ZatraAbout from '../../components/website/Home/ZatraAbout'
import OneDistrict from '../../components/website/Home/OneDistrict'
import HeroSlider from '../../components/website/Home/HeroSlider'
import Hero from '../../components/website/Home/Hero'
import SearchTabs from '../../components/website/Home/SearchTabs'
import ZataraPackages from '../../components/website/Home/ZataraPackages'


const LandingPage = () => {

  return (
    <>
      {/* <HeroSlider /> */}
      <Hero />
      <SearchTabs />
      <ZataraPackages />
      <ZatraAbout />
      <OneDistrict />
      <div className='space-top'>
      </div>
    </>
  )
}

export default LandingPage
