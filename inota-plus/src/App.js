
import React from 'react';
import Faqs from './Faqs';
import Feature from "./Feature";
import Footer from "./Footer";
import Partners from './Partners';
import './App.css';
const App = () => {
    return (
        <div className="App">
           <Feature/>
           <Partners/>
            <Faqs />
            <Footer/>
        </div>
    );
};
export default App;
