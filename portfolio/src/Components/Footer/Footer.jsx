import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ContactUs from '../ContactUs/ContactUs';

const Footer = () => {
    return (
        <section className="footer" id="footer">
            <div className='footerContact'>
                <div className="footer-container">
                    <h1>Connect with me</h1>
                    <div className="footer-links">
                        <div className="footer-link">
                            <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:santhoshmuthuselvanr@gmail.com" id="emailLink"
                                target="_blank"><p>Gmail</p></a>
                        </div>
                        <div className="footer-link">
                            <FontAwesomeIcon icon={faLinkedin} /><a href="http://www.linkedin.com/in/santh%20osh-m-198790202"
                                target="_blank">LinkedIn</a>
                        </div>
                        <div className="footer-link">
                            <FontAwesomeIcon icon={faGithub} /><a href="https://github.com/MSANTHOSHgg" target="_blank">GitHub</a>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <ContactUs />
            </div>
        </section >
    )
}

export default Footer;