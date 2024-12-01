import React from 'react'
import Profile from '../../assets/Photo sp.jpeg'
import './About.css'
import resume from '../../assets/Santhosh-resume.pdf'

const About = () => {
    return (
        <section id="About">
            <div className="About">
                <div className="Iam">
                    <blockquote>
                        <h1>Hi, I am</h1>
                        <h1>Santhosh M</h1>
                    </blockquote>
                </div>

                <div className="container-auto">
                    <h2>I am a <span id="element"></span></h2>
                </div>

                <p>A skilled front-end developer with a strong Portfolio. Passionate about staying updated on front-end tech.
                    Colaborative and commited to quality, you thrive in dynamic teams. Eager to contribute creativity and bring
                    innovative ideas to life.</p>
                <button className="Resume"  onClick={() => window.open('../../assets/Santhosh-resume.pdf')}>Check Resume</button>
            </div>
            <div className="photo">
                <img src={Profile} alt="Santhosh M's Avatar"/>
            </div>
        </section>
    )
}

export default About;