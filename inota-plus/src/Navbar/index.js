import './index.css';

import { Link } from 'react-scroll'; 
import React, { useState,useEffect } from 'react';
import { Squash as HamburgerIcon } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import {IoMdClose} from 'react-icons/io'
import inota from '../images/inota.png'


const Navbar=()=>{
    const [isOpen, setIsOpen]= useState(false);

    const handleCloseClick = () => {
      setIsOpen(false);
    };
    const handleHamburgerClick = () => {
      setIsOpen(!isOpen);
    };
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (event.target.closest('.links') === null && event.target.closest('.hamburger') === null) {
          setIsOpen(false)
        }
      };
      if (isOpen) {
        document.addEventListener('click', handleClickOutside, { capture: true });
      } else {
        document.removeEventListener('click', handleClickOutside, { capture: true });
      }
      return () => {
        document.removeEventListener('click', handleClickOutside, { capture: true });
      };
    }, [isOpen]);



    return(
      <>
      <div id='main-container'>
       <div>
       <img id='logo' src={inota} alt='inota'/>
       </div>
        <ul id="navlist">
        <li><Link to="home" smooth={true} className="nav-link">Home</Link></li>
        <li><Link to="about" smooth={true} className="nav-link">About</Link></li>
        <li><Link to="feature" smooth={true} className="nav-link">Features</Link></li>
        <li><Link to="partners" smooth={true} className="nav-link">Partners</Link></li>
        <li><Link to="faqs" smooth={true} className="nav-link">FAQs</Link></li>
        </ul>

        <div className='hamburger'>
        <HamburgerIcon toggled={isOpen} size={20} toggle={handleHamburgerClick} />
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="links"
          >
            <div className="back-button" onClick={handleCloseClick}>
              <IoMdClose size={30} />
            </div>
        <li><Link to="home" smooth={true} className="nav-link">Home</Link></li>
        <li><Link to="about" smooth={true} className="nav-link">About</Link></li>
        <li><Link to="features" smooth={true} className="nav-link">Features</Link></li>
        <li><Link to="partners" smooth={true} className="nav-link">Partners</Link></li>
        <li><Link to="faqs" smooth={true} className="nav-link">FAQs</Link></li>
          </motion.div>
        )}
      </div>
        </div>
      </>  
    )
}

export default Navbar;