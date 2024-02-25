import './header.css'
import Cta from './CTA'
import me from '../../assets/img/zirosparta.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
       <h5>Hello  I&apos;m</h5>
       <h1>ZIROoo NARANJO</h1>
       <h5 className='text-light'>Junior Developer</h5>
       <Cta/>
       <HeaderSocials/>
       <div className='zirosparta'>
        <img src={me} alt="imagen ziro" />
       </div>

       <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header




