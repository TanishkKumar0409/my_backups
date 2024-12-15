import React from 'react'
import RecentFiles from './MainComponents/RecentFiles/RecentFiles'
import SharedHistory from './MainComponents/SharedHistory/SharedHistory'
import Footer from "../../Components/Footer/Footer"
import Banner from './MainComponents/Banner/Banner'

import "./Main.css"

export default function Main() {
  return (
    <>
      <Banner />
      <RecentFiles />
      <SharedHistory />
      <Footer />
    </>
  )
}
