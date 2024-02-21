
import './about.css'
import ME from '../../assets/img/zirosparta.png'
import { FaAward } from "react-icons/fa6"
import { FaUserFriends } from "react-icons/fa"
import { FaFolderOpen } from "react-icons/fa"




const About = () => {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About Me</h2>


      <div className='container about__container'>
         <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="img-about" />
          </div>
         </div>
      <div className="about__content">
        <div className='about__cards'>

            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experinece</h5>
              <small>1+ Year Working</small>
            </article>
            <article className='about__card'>
            <FaUserFriends className='about__icon'/>
              <h5>Client</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
            <FaFolderOpen  className='about__icon'/>
              <h5>Proyects</h5>
              <small>50+ Completed</small>
            </article>
            </div>

         <p>Trabajo en Equipo
         </p>
        <div className='btn__btn'>
         <a href="#contact" className='btn btn-primary'>Talk Me</a>
       </div>
         </div>
       </div> 
      





    </section>
  )
}

export default About




