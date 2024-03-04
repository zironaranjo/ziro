
import './about.css'
import ME from '../../assets/img/zirosparta.png'
import { FaAward } from "react-icons/fa6"
import { FaUserFriends } from "react-icons/fa"
import { FaFolderOpen } from "react-icons/fa"
import { MdLocalPhone } from "react-icons/md"



const About = () => {
  return (
    <section id='about' >
      <h5 >Get to Know</h5>
      <h2 >About Me</h2>


      <div className='container about__container'>
         <div className="about__me">
          {/* <div className="about__me-image">
            <img src={ME} alt="img-about" />
          </div> */}
          <p className='parrafo'>Well Done Is Better Than Well Said.</p>
         </div>
      <div className="about__content">
        <div className='about__cards'>

            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Adaptable y Evolutivo</small>
            </article>
            <article className='about__card'>
            <FaUserFriends className='about__icon'/>
              <h5>Client</h5>
              <small>Area local</small>
            </article>
            <article className='about__card'>
            <FaFolderOpen  className='about__icon'/>
              <h5>Proyects</h5>
              <small>15+ Completed</small>
            </article>
            </div>

         <p>Trabajo en Equipo
         </p>
        <div className='btn__btn'>
         <a href="#contact" className='btn btn-primary'><MdLocalPhone /></a>
       </div>
         </div>
       </div> 
      





    </section>
  )
}

export default About




