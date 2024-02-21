
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
    name:'tina snapr',
    review:' esta es la prueba del exito ziro sigue adelanteeeeeeeeeeeeeeeee.'

  },
  {
    avatar:AVTR2,
    name:'tina snapr',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, ea doloribus odio provident reprehenderit expedita autem. Exercitationem adipisci labore quo. Sint error in incidunt.'

  },
  {
    avatar:AVTR3,
    name:'tina snapr',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, ea doloribus odio provident reprehenderit expedita autem. Exercitationem adipisci labore quo. Sint error in incidunt.'

  },
  {
    avatar:AVTR4,
    name:'tina snapr',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, ea doloribus odio provident reprehenderit expedita autem. Exercitationem adipisci labore quo. Sint error in incidunt.'

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
