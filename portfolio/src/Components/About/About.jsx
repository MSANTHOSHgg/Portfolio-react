import React from 'react'
import Profile from '../../assets/Photo sp.jpeg'
import './About.css'
import resume from '../../assets/Santhosh-resume.pdf'
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const About = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(elementRef.current, {
            strings: ["Java Developer", "Front-end Developer"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <section id="About">
            <div className='About-container'>
            <div className="About">
                <div className="Iam">
                    <blockquote>
                        <h1>Hi, I am</h1>
                        <h1>Santhosh M</h1>
                    </blockquote>
                </div>

                <div className="container-auto">
                    <h2>I am a <span ref={elementRef}></span></h2>
                </div>

                <p>A skilled front-end developer with a strong Portfolio. Passionate about staying updated on front-end tech.
                    Colaborative and commited to quality, you thrive in dynamic teams. Eager to contribute creativity and bring
                    innovative ideas to life.</p>
                <div className="Resume">
                    <button>
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                            Check Resume
                        </a></button>
                </div>
            </div>
            <div className="photo">
                <img src={Profile} alt="Santhosh M's Avatar" />
            </div>
            </div>
        </section>
    )
}

export default About;