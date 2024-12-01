import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section class="footer" id="footer">
            <div class="footer-container">
                <h1>Connect with me</h1>
                <div class="footer-links">
                    <div class="footer-link">
                        <i class="fa-solid fa-envelope"></i><a href="mailto:santhoshmuthuselvanr@gmail.com" id="emailLink"
                            target="_blank"><p>Gmail</p></a>
                    </div>
                    <div class="footer-link">
                        <i class="fa-brands fa-linkedin-in"></i><a href="http://www.linkedin.com/in/santh%20osh-m-198790202"
                            target="_blank">LinkedIn</a>
                    </div>
                    <div class="footer-link">
                        <i class="fa-brands fa-github"></i><a href="https://github.com/MSANTHOSHgg" target="_blank">GitHub</a>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;