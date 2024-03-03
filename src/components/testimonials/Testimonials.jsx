
import './testimonials.css'
import AVTR1 from '../../assets/img/avatar1.jpg'
import AVTR2 from '../../assets/img/avatar2.jpg'
import AVTR3 from '../../assets/img/avatar3.jpg'
import AVTR4 from '../../assets/img/avatar4.jpg'

import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar:AVTR1,
    name:'Soraya Velasquez',
    review:"¡Increíble experiencia! Mi página web quedó exactamente como la imaginaba. "

  },
  {
    avatar:AVTR2,
    name:'Carlos Naranjo',
    review:"¡No puedo estar más satisfecho!.  página web y diseño para mi negocio superó mis expectativas."

  },
  {
    avatar:AVTR3,
    name:'Alex Mendoza',
    review: "Quiero expresar mi gratitud por el magnífico trabajo realizado en mi página web. "

  },
  {
    avatar:AVTR4,
    name:'Milena Correa',
    review:"¡Excelente trabajo! Desde el primer contacto hasta la entrega final,  compromiso con la calidad "

  },


]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination, ]}
       spaceBetween={40}
       slidesPerView={1}
       
       pagination={{ clickable: true }}>
       
      

       
        {data.map(({avatar,name,review},index ) =>{
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar}  />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
           </SwiperSlide>
          )
        })
       }
        
        </Swiper> 
      



      </section>
  )
}

export default Testimonials
