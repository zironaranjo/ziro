import './nav.css'
import { FaHome } from "react-icons/fa"
import { FaUser } from "react-icons/fa6"
import { FaBook } from "react-icons/fa"
import { RiServiceFill } from "react-icons/ri"
import { PiContactlessPaymentFill } from "react-icons/pi"
import { useState } from 'react'



const Nav = () => {

     const [activeNav,setActiveNav] = useState('#')




  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')}className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href="#contact"onClick={() => setActiveNav('#contat')}className={activeNav === '#contact' ? 'active' : ''}><PiContactlessPaymentFill /></a>
    </nav>
  )
}

export default Nav
