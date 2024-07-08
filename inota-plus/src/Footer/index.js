import React from "react";
import './index.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt} from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="logo">
                    <img src='./images/InotaLogo.png' alt="InotaLogo"></img>
                </div>
                <div className="social-media">
                    <div>
                        <FaFacebook className="icon"/>
                    </div>
                    <div>
                        <FaInstagram className="icon"/>
                    </div>
                    <div>
                        <FaLinkedin className="icon"/>
                    </div>
                </div>
                <div className="info">
                    <div className="resources">
                        <b>Resources</b>
                        <ul>
                            <li><a href="#faqs">FAQs</a></li>
                            <br/>
                            <li><a href="#about">About</a></li>
                            <br/>
                            <li><a href="#features" className="features">Features</a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <b className="contact">Contact</b>
                        <br />
                        <br/>
                        <FaPhoneAlt className="phone"/> &nbsp;
                        <span>+254112446610</span>
                        <br />
                        <br />
                        <span>inotaplus@gmail.com</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;