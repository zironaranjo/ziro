
import CV from '../../assets/img/cvziro.pdf'
import { PiDownloadSimpleBold } from "react-icons/pi";
import { RiMegaphoneLine } from "react-icons/ri";


const Cta = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'> C.vitae <PiDownloadSimpleBold /></a>
      <a href="#contact" className='btn btn-primary'>Talk m'   <RiMegaphoneLine /></a>
    </div>
  )
}

export default Cta;
