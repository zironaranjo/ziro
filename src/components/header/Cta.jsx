
import CV from '../../assets/img/cvziro.pdf'
import { PiDownloadSimpleBold } from "react-icons/pi";
import { RiMegaphoneLine } from "react-icons/ri";


const Cta = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'><PiDownloadSimpleBold />&nbsp C.vitae </a>
      <a href="#contact" className='btn btn-primary'>Talk m'   <RiMegaphoneLine /></a>
    </div>
  )
}

export default Cta;
