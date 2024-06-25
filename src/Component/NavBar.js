import './NavBarStyles.css'
import React, { useEffect, useState } from 'react'
import logo from '../Gallery/tagemi logo.png'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import About from '../Routes/About'
import Streaming from '../Routes/Streaming'
import Contact from '../Routes/Contact'
import Location from '../Routes/Location'

function NavBar() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const [color, setColor] = useState(false)


    const changeColor = () => {
        if(window.scrollY >= 100) {setColor(true)}else{setColor(false)}}

useEffect(()=> {
    window.addEventListener('scroll', changeColor )
})


  return (
    <div className={color? 'nav color': 'nav'}>
        <Link to='/'className='logo-container' >
            <img src={logo} className='logo' alt='logo' />
            <p className='logo-text'>Truth & Grace Evangelical Mission Int'l</p>
        </Link>
       
        <ul className={click ? 'list-menu active' : 'list-menu'}>
            
            <li>
            <Link to='/about' element= {<About />} className='li-menu'> About</Link>
            </li>
            <li>
            <Link to='/location' element={<Location /> } className='li-menu'> Location</Link>
            </li>
            <li>
            <Link to='/LiveStreaming' element={<Streaming />} className='li-menu'> Streaming</Link>
            </li>
            <li>
            <Link to='' element = {<Contact />}className='li-menu'> Contact</Link>
            </li>
            
        </ul>
    
        <div onClick={handleClick} className='hamburger'>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
    </div>
  )
}

export default NavBar
