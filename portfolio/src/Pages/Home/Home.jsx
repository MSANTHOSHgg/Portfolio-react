import React, { useState } from 'react'
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
    return (
        <div>
            <Navbar showNav={showNav}/>
            <SideNavbar closeNav={closeNav} isSideNavOpen={isSideNavOpen}/>
             <About />
             <Skills />
            <Education />
            <Projects />
            <Footer /> 
        </div>
    )
}

export default Home