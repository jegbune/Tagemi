import './FooterStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Gallery/tagemi logo.png'
import Contact from '../Routes/Contact'
import About from '../Routes/About'
import { FaChurch, FaDonate, FaFacebook, FaPlaceOfWorship, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='fleft'>
        <Link to='/'className='flogo-container' >
            <img src={logo} className='flogo' alt='logo' />
            <p className='flogo-text'>Truth & Grace Evangelical Mission Int'l</p>
        </Link>

        <Link to ='/about' element={<About />} className='footer-li'><FaPlaceOfWorship size={20} className='icon' /> Mission</Link>
        <Link to ='/contact' element={<Contact />} className='footer-li'><FaChurch size={20} className='icon'/> Worship with us</Link>
        </div>

        <div className='fright'>
        <Link to ='/about' element={<About />} className='footer-li'><FaPlaceOfWorship size={20} className='icon' /> Mission</Link>
        <Link to ='/contact' element={<Contact />} className='footer-li'><FaChurch size={20} className='icon' /> Worship with us</Link>
        <Link to ='/contact' element={<Contact />} className='footer-li'><FaDonate size={20} className='icon' /> Donation</Link>
        <div>
        <Link to ='/contact' element={<Contact />} className='footer-li'><FaFacebook size={20} className='icon' />/tagemiHq</Link>
        <Link to ='/contact' element={<Contact />} className='footer-li'><FaYoutube size={20} className='icon' />/tagemi</Link>
            
        </div>
        </div>
      
    </div>
  )
}

export default Footer
