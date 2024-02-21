
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
            <MdOutlineEmail  className='contact__option-icon'/>
               <h4>Email</h4>
               <h5>zironaranjo@gmail.com</h5>
               <a href="mailto:zironaranjo@gmail.com" target='_blank' rel="noreferrer"><IoIosSend />Send</a>
            </article>

            <article className='contact__option'>
            <RiMessengerFill  className='contact__option-icon'/>
               <h4>messenger</h4>
               <h5>zironaranjo</h5>
               <a href="https://m.me/profile.php?id=100007102785857" target='_blank' rel="noreferrer"><IoIosSend />Send</a>
            </article>

            <article className='contact__option'>
            <IoLogoWhatsapp  className='contact__option-icon'/>
               <h4>WhatsApp</h4>
               <h5>ziro</h5>
               <a href="https://api.whatsapp.com/send?phone+34643267797" target='_blank' rel="noreferrer"><IoIosSend />Send</a>
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
             <button type='submit' className='btn btn-primary'><IoIosSend />Send</button>
             </div>
          </form>
        </div>




    </section>
  )
}

export default Contact
