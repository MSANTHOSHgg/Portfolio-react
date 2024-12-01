import React from 'react'
import './SideNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SideNavbar = ({ isOpen, closeNav }) => {
    return (
        <div className={`side-navbar ${isOpen ? "open" : ""}`}>
            <p style={{ textAlign: "right" }} onClick={closeNav}>
            <FontAwesomeIcon icon={faXmark} />
            </p>
            <div className="side-navbar-Links">
                {["About", "Skills", "Education", "Project", "footer"].map((link) => (
                    <p className="side-navbar-Link" key={link}>
                        <a href={`#${link}`}>{link}</a>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default SideNavbar;