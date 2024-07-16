import Landing from "./LandingPage";
import About from "./About";
import Navbar from "./Navbar";
import Partners from './Partners';
import Feature from './Feature';
import Footer from "./Footer";


const App = () =>{
  return(
   
      <div>
      
         <Navbar/>
         <Landing/>
         <About/>
         <Feature/>
         <Partners/>
         <Footer/>
        

      </div>  
  )
}
export default App;
