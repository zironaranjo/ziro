
import './services.css'
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
       
       <div className="container services__container">

      <article className='service'>
          <div className="service__head">
            <h3> Web Development</h3>
          </div>
          <ul className='service__list' >
               <li>
               <FaCheck className='service__list-icon'/>
               <p>webs, atractivas funcionales. </p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Adaptables a tu Negocio.</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Estrategias de SEO.</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Dispositivos Responsive</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Mantenimiento Adaptacion.</p>
               </li>
              </ul>
           </article>
{/* -----END OF UI/UX-------------------------------------------------------- */}

<article className='service'>
          <div className="service__head">
            <h3>Mobile Applications</h3>
          </div>
          <ul className='service__list' >
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Aplicaciones Nativas y Multiplataforma.</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Diseño centrado en el usuario.</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Mantenimiento y Actualizacion.</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Soporte y Funcionamiento.</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Mobile Intuitivo.</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Actualizacion Tecnologia.</p>
               </li>
              </ul>
           </article>
{/* -----WEB DEVELOPMENT-------------------------------------------------------- */}

<article className='service'>
          <div className="service__head">
            <h3>Systems and Networks</h3>
          </div>
          <ul className='service__list' >
               <li>
               <FaCheck className='service__list-icon'/>
               <p> sistemas microinformáticos.</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Configuración y mantenimiento.</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>Instalación y administración de redes.</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p> virtualización y almacenamiento de datos.</p>
               </li>
               <li>
               <FaCheck className='service__list-icon'/>
               <p>protocolos de red (TCP/IP, DNS, DHCP, etc.)..</p>
               </li>
              </ul>
           </article>
{/* -----END OF CONTENT CREATION-------------------------------------------------------- */}

</div>



    </section>
  )
}

export default Services
