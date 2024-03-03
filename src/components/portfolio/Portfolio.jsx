
import './portfolio.css'
import { IoLogoGithub } from "react-icons/io"
import { RxGlobe } from "react-icons/rx"

import  IMG1 from'../../assets/img/restaurante.jpg'
import  IMG2 from'../../assets/img/control-citas.jpg'
import  IMG3 from'../../assets/img/control-gastos.jpg'
import  IMG4 from'../../assets/img/tecnology.jpg'
 

const data = [
          {
       id:1,
       image:IMG1,
       title:'Interfaz Restaurante, Intuitiva , Moderna ,Creativa y Desafiante  ',
       github:'https://github.com/zironaranjo/restaurante.git',
       demo: 'https://restaurat-sory-production.up.railway.app'
       
     },
          {
       id:2,
       image:IMG2,
       title:'Gestion de Citas De una Manera Eficiente y Organizada',
       github:'https://github.com/zironaranjo/CitasReact.git',
       demo: 'https://zirocitasreact.netlify.app'
       
     },
          {
       id:3,
       image:IMG3,
       title:'Gastos App,controla y Mantiene tus finanzas Ordenadas',
       github:'https://github.com/zironaranjo/Gestion-gastos.git',
       demo: 'https://gestion-gastosvite.netlify.app/'
       
     },
          {
       id:4,
       image:IMG4,
       title:'Crypto Currency Dashboard & Financial Visualization',
       github:'https://zirocitasreact.netlify.app',
       demo: 'https://dribbble.com/shots/23677077-Control-de-clientes-y-pacientes'
     },
]





const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        {data.map(({id, image, title, github, demo}) => (
          <article className='portfolio__item' key={id}>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank' rel="noreferrer"><IoLogoGithub /></a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer"><RxGlobe /></a>
              </div>
            </div>
          </article>
        ))}
        
      </div>
    </section>
  );
}

export default Portfolio;