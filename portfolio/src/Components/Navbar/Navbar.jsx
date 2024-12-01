import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ showNav }) => {
    return (
        <nav className="navbar">
            <div className="navbar-Title">
                <span> <FontAwesomeIcon icon={faLayerGroup} />  </span>
                <p>Portfolio</p>
            </div>
            <div className="navbar-Links">
                {["About", "Skills", "Education", "Project", "Contact"].map((link) => (
                    <p className="navbar-Link" key={link}>
                        <a href={`#${link}`}>{link}</a>
                    </p>
                ))}
            </div>
            <div className="navbar-toggle" onClick={showNav}>
                <span><FontAwesomeIcon icon={faBars} /></span>
            </div>
        </nav>
    )
}

export default Navbar