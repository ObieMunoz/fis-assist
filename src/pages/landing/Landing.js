import './Landing.css'
import Logo from '../../assets/fis_logo.png'

const Landing = () => {
  return ( 
    <div className="landing">
      <img src={Logo} alt="logo" className="hero" />
    </div>
   );
}
 
export default Landing;