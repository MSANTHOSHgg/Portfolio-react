import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleNav }) => {
    return (
        <nav className="navbar">
            <div className="navbar-Title">
                <FontAwesomeIcon icon={faLayerGroup} />
                <p>Portfolio</p>
            </div>
            <div className="navbar-Links">
                {["About", "Skills", "Education", "Project", "footer"].map((link) => (
                    <p className="navbar-Link" key={link}>
                        <a href={`#${link}`}>{link}</a>
                    </p>
                ))}
            </div>
            <div className="navbar-toggle" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
    )
}

export default Navbar