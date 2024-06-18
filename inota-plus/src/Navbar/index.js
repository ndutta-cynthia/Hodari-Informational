import './index.css';
import inota from './inota.png'

const Nav= ()=>{
    return(
        <>
        <div id='maincontainer'>
       <div>
       <img id='image' src={inota}/>
       </div>
        <ul id="navlist">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Partners</li>
            <li>FAQs</li>
        </ul>
        </div>
        <img src='' alt=''/>
        <div id='landingdiv'>
        <h1>Here to offer the best loan management and <br/> credit scoring system for Saccos</h1>
<button>Register</button>
        </div> 
        </>
    )
}
export default Nav;