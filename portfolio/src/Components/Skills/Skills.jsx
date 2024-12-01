import React from 'react'
import pegaimg from '../../assets/pegapng.png'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faJava } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <section id="Skills">
            <div className="Skills">
                <h1>Skills</h1>
                <p className="skillinfo">Here are some of skills on which i have learnt</p>
                <div className="Skill-box">
                    <div className="Front-end">
                        <h2 className="skill-title">Frontend</h2>
                        <div className="front">
                            <div>
                                <FontAwesomeIcon icon={faHtml5} />
                                <p>HTML</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCss3Alt} />
                                <p>CSS</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faJs} />
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faReact} />
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                    <div className="others">
                        <h2 className="skill-title">Others</h2>
                        <div className="other">
                            <div>
                                <FontAwesomeIcon icon={faJava} />
                                <p>Java</p>
                            </div>
                            <div>
                                <img src={pegaimg} style={{ width: "20px", height: '20px' }} />
                                <p>Pega</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;