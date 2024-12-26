import React from 'react'
import HomeBanner from './HomeComponents/HomeBanner/HomeBanner'
import Footer from "../../Components/Footer/Footer"
import AboutUs from './HomeComponents/AboutUs.jsx/AboutUs'
import FAQ from './HomeComponents/FAQ/FAQ'
import Newsletter from './HomeComponents/Newsletter.jsx/Newsletter'

export default function Home() {
  return (
    <>
      <HomeBanner />
      <AboutUs />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  )
}
