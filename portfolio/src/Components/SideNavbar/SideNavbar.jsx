import React from 'react'
import './SideNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SideNavbar = ({ closeNav , isSideNavOpen, links, activeLink, handleLinkClick }) => {
    return (
        <div className={`side-navbar ${isSideNavOpen ? "open" : ""}`}>
            <p style={{ textAlign: "right" }} onClick={closeNav}>
            <FontAwesomeIcon icon={faXmark} />
            </p>
            <div className="side-navbar-Links">
            {links.map((link) => (
                    <p
                        className={`side-navbar-Link ${activeLink === link ? "active" : ""}`}
                        key={link}
                    >
                        <a
                            href={`#${link}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(link);
                            }}
                        >
                            {link}
                        </a>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default SideNavbar;