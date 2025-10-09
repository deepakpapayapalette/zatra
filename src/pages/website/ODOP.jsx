import React from 'react'
import Banner from '../../components/common/Banner'
import bannerImg from "../../assets/images/website/about/banner.png"
const ODOP = () => {
  const bannerContent = {
    image: bannerImg,
    title: "One District One Product  (ODOP)",
    description: "One District One Product (ODOP) is a government initiative that identifies and promotes one unique product from each district of India"
  }
  return (
    <section>
      <Banner bannerContent={bannerContent} />

    </section>
  )
}

export default ODOP
