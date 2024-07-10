import './index.css';
import emata from '../images/emata.png';
import limu from '../images/limu.png';
import upstart from '../images/upstart.png';
import wsa from '../images/wsa.webp';

function Partners(){
    return(
    <div>


    <div class= "logo-container">
      
        <img src={emata} alt="Emata" class="logo"/>
        <img src={upstart} alt="Upstart" class="logo"/>
        <img src={wsa} alt="WSA" class="logo"/>
        <img src={limu} alt="Limuru Fresh" class="logo"/>
       
    </div>
  

    </div>
    )
}
export default Partners;