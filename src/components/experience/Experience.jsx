
import './experience.css'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { BsFiletypeSql } from "react-icons/bs";
import { SiNestjs } from "react-icons/si"; 
import { FaNodeJs } from "react-icons/fa"

const Experience = () => {
  return (
    <section id='experience' >
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className='experience__fronted'>

          <h3>Frontend Development Evolutivo</h3>
           <div className="experience__content">

        <article className='experience__details'>
            <FaHtml5 className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
            <small className='text-light'></small>
            </div>
            
        </article>
        <article className='experience__details'>
            <IoLogoCss3 className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
            <small className='text-light'></small>
            </div>
            
        </article>
        <article className='experience__details'>
           <IoLogoJavascript className='experience__details-icon'/>
           <div>
            <h4>JavaScript</h4>
            <small className='text-light'></small>
           </div>
            
        </article>
        <article className='experience__details'>
            <SiTailwindcss className='experience__details-icon'/>
            <div>
              <h4>TailwindCss</h4>
            <small className='text-light'></small>
            </div>
            
        </article>
        <article className='experience__details'>
           <FaReact className='experience__details-icon'/>
           <div>
            <h4>React</h4>
            <small className='text-light'></small>
           </div>
            
        </article>
          
           </div>
        </div>
{/* ----END OF FRONT----------------------------------------- */}
        <div className='experience__backend'>

            <h3>Backend Development Evolutivo</h3>
           <div className="experience__content">

        <article className='experience__details'>
            <BsFiletypeSql className='experience__details-icon'/>
            <div>
              <h4>SQL</h4>
            <small className='text-light'></small>
            </div>
            
        </article>
        <article className='experience__details'>
            <SiNestjs className='experience__details-icon'/>
            <div>
              <h4>Nestjs</h4>
            <small className='text-light'></small>
            </div>
            
        </article>
        <article className='experience__details'>
           <IoLogoJavascript className='experience__details-icon'/>
           <div>
            <h4>JavaScript</h4>
            <small className='text-light'></small>
           </div>
            
        </article>
        <article className='experience__details'>
            <FaNodeJs className='experience__details-icon'/>
            <div>
              <h4>Nodejs</h4>
            <small className='text-light'></small>
            </div>
            
        </article>
        
          
           </div>
        </div>
     </div>




      </section>
  )
}

export default Experience
