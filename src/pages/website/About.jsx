import React from 'react'
import Banner from '../../components/common/Banner'
import bannerImg from "../../assets/images/website/about/banner.png"

const About = () => {
  const bannerContent = {
    image: bannerImg,
    title: "About US",
    description: "ZATRA is a unique initiative offering a 360-degree exploration of tourism and culture."
  }
  return (
    <section>
      <Banner bannerContent={bannerContent} />

    </section>
  )
}

export default About

