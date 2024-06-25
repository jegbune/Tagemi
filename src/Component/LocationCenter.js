import './LocationStyles.css'
import React from 'react'
import { FaLocationPin } from 'react-icons/fa6'
import img from '../Gallery/Church.jpeg'
function LocationCenter() {
  return (
    <div className='location-container'>
    <div className='location-box'>
      <div className='left'>
        <h2><FaLocationPin /> Multiple Location</h2>
        <p>Join us in our Service in more than 5 location in Nigeria</p>
      </div>
      <div className='right'>
        <img src={img} className= 'loc-img' alt='church image' />
      </div>
    </div>
    </div>
  )
}

export default LocationCenter
