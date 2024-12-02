import React  from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ showNav,activeLink,handleLinkClick,links }) => {


    


    return (
        <nav className="navbar">
            <div className="navbar-Title">
                <span>
                    <FontAwesomeIcon icon={faLayerGroup} />
                </span>
                <p>Portfolio</p>
            </div>
            <div className={`navbar-Links`}>
                {links.map((link) => (
                    <p
                        className={`navbar-Link ${activeLink === link ? "active" : ""}`}
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
            <div className="navbar-toggle" onClick={showNav}>
                <span>
                    <FontAwesomeIcon icon={faBars} />
                </span>
            </div>
        </nav>
    )

}
export default Navbar;