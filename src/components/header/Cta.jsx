
import CV from '../../assets/img/cvziro.pdf'




const Cta = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Talk Me Now</a>
    </div>
  )
}

export default Cta;
