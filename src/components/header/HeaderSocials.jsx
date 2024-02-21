import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
 



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
     <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
     <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
      
      
    </div>
  )
}

export default HeaderSocials

