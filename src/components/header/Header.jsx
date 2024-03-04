import './header.css'
import Cta from './CTA'
import me from '../../assets/img/fzt.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
       {/* <h5 className='text-light'></h5> */}
       <div className='text__title'>
       <h1>
        Ziro Naranjo
        </h1>
        </div>
       <h5 className='text-light'>Junior Developer</h5>
       <Cta/>
       <HeaderSocials/>
       <div className='zirosparta'>
        <img src={me} alt="imagen ziro" />
       </div>

       <a href="#contact" className='scroll__down'></a>
      </div>
    </header>
  )
}

export default Header




