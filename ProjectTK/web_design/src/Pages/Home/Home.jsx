import React from 'react'
import HomeBanner from './HomeComponents/HomeBanner/HomeBanner'
import Footer from "../../Components/Footer/Footer"
import AboutUs from './HomeComponents/AboutUs.jsx/AboutUs'
import FAQ from './HomeComponents/FAQ/FAQ'

export default function Home() {
  return (
    <>
      <HomeBanner />
      <AboutUs />
      <FAQ />
      <Footer />
    </>
  )
}
