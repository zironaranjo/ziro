
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { RiMessengerFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

// eslint-disable-next-line no-unused-vars
import { useRef } from 'react';
import emailjs from 'emailjs-com';




const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4lyko88', 'template_28wr8o6', form.current,  '82WTvd-wbaDFuvNdN')
  
    e.target.reset() 
  };

  return (
    <section id='contact' >
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">

            <article className='contact__option'>

             <div className='color__email'>
            <MdOutlineEmail  className='contact__option-icon'/>
             </div>
               <h4></h4>
               <h5>zironaranjo@gmail.com</h5>
               <div className='color__contact'>
               <a href="mailto:zironaranjo@gmail.com" target='_blank' rel="noreferrer" ><IoIosSend />Enviar</a>
               </div>
            </article>



            <article className='contact__option'>
              <div className='color__messenger'>
            <RiMessengerFill  className='contact__option-icon'/>
             </div>
               <h4></h4>
               <h5>zironaranjo</h5>
               <div className='color__contact'>
               <a href="https://m.me/profile.php?id=100007102785857" target='_blank' rel="noreferrer"><IoIosSend />Enviar</a>
               </div>
            </article>



            <article className='contact__option'>
             <div className='color__whatsapp'>
            <IoLogoWhatsapp  className='contact__option-icon'/>
            </div>
               <h4></h4>
               <h5>ziro</h5>
               <div className='color__contact'>
               <a href="https://api.whatsapp.com/send?phone+34643267797" target='_blank' rel="noreferrer" ><IoIosSend />Enviar</a>
               </div>
            </article>



          </div>
          {/* ----END CONTACT--OPCION */}
          <form ref={form } onSubmit={sendEmail}>
            <input
             type="text"
             name='name'
             placeholder='Your Name'
             required
             />

             <input 
             type="email"
             name='email'
             placeholder='Email'
             required
             />

             <textarea name="message"  rows="10" placeholder='Your Message' required></textarea>
             <div className='button__send'>
             <button type='submit' className='btn '><IoIosSend />Send</button>
             </div>
          </form>
        </div>




    </section>
  )
}

export default Contact
