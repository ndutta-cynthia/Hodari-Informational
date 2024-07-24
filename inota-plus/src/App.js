import Landing from "./LandingPage";
import About from "./About";
import Navbar from "./Navbar";
import Partners from './Partners';
import Feature from './Feature';
import Footer from "./Footer";
import Faqs from './Faqs';


const App = () =>{
  return(
   
      <div>
      
         <Navbar/>
         <Landing/>
         <About/>
         <Feature/>
         <Partners/>
         <Faqs />
         <Footer/>
        

      </div>  
  )
}
export default App;
