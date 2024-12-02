import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SideNavbar from "../../Components/SideNavbar/SideNavbar";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Education from "../../Components/Education/Education";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/Footer/Footer";

const Home = () => {

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const showNav = () => setIsSideNavOpen(true);
    const closeNav = () => setIsSideNavOpen(false);

    const [activeLink, setActiveLink] = useState("");
    const links = ["About", "Skills", "Education", "Project", "Contact"];

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleLinkClick = (id) => {
        setActiveLink(id);

        const target = document.getElementById(id);
        const isMobile = window.innerWidth <= 768;
        const offset = isMobile ? 70 : 120;

        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <Navbar showNav={showNav} activeLink={activeLink} handleLinkClick={handleLinkClick} links={links} />
            <SideNavbar closeNav={closeNav} isSideNavOpen={isSideNavOpen} activeLink={activeLink} handleLinkClick={handleLinkClick} links={links} />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home