import'./footer.css'
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ZIRO</a>
      <ul className='permalinks'>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#testimonials">TESTIMONIALS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><SiInstagram /></a>
        <a href="https://twiter.com"><FaXTwitter /></a>
      </div>

       <div className='footer__copyright'>
          <small>& Created by Ziro.  Copyright © 2024 . All rights reserved.</small>
       </div>


    </footer>
  )
}

export default Footer
