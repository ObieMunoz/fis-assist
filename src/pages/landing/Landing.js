import './Landing.css'
import Logo from '../../assets/fis_logo.png'

const Landing = () => {
  return ( 
    <div className="landing">
      <div className="container">
          <div className="hero">
              <img src={Logo} alt="logo" />
          </div>
      </div>
    </div>
   );
}
 
export default Landing;