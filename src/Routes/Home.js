import React from 'react'
import NavBar from '../Component/NavBar'
import TopContent from '../Component/TopContent'
import Sermon from '../Component/Sermon'
import Location from '../Component/LocationCenter'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div>
      <NavBar />
      <TopContent />
      <Sermon />
      <Location />
      <Footer />
    </div>
  )
}

export default Home
