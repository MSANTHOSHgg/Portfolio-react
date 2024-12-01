import React, { useState } from 'react';
import './Projects.css';
import web1 from '../../assets/WeatherApp/weatherapp.png';
import web2 from '../../../public/StudentForm/sf.png';
import web3 from '../../../public/Ecomerce Project/Nostra.png';
import academic1 from '../../assets/A_P_1/Picture1.png';
import academic2 from '../../assets/A_P_2/P2.png';

const Projects = () => {
    const [showWebProjects, setShowWebProjects] = useState(true);

    return (
        <section id="Project">
            <div className="projects">
                <div>
                    <h1>Projects</h1>
                    <p>I have worked on some projects. Here are some of my projects:</p>
                </div>

                <div className="projects-button">
                    <input
                        id="web"
                        type="button"
                        value="Website"
                        onClick={() => setShowWebProjects(true)}
                    />
                    <input
                        id="aca"
                        type="button"
                        value="Academic"
                        onClick={() => setShowWebProjects(false)}
                    />
                </div>

                {showWebProjects ? (
                    <div className="projects-website">
                        <div className="website">
                            <img src={web1} alt="Weather App" />
                            <h5>React.js</h5>
                            <h3>Weather App</h3>
                            <p>2024</p>
                            <p>
                                Weather app - built with React is a sleek, dynamic, and user-friendly
                                interface that allows users to access real-time weather updates.
                                The app typically integrates third-party APIs like OpenWeatherMap.
                            </p>
                            <a href="https://weatherappusingreactsample.netlify.app/" target="_blank" rel="noopener noreferrer">
                                View page
                            </a>
                        </div>
                        <div className="website">
                            <img src={web2} alt="Student Form" />
                            <h5>HTML</h5>
                            <h5>CSS</h5>
                            <h5>JavaScript</h5>
                            <h3>Student Form</h3>
                            <p>2024</p>
                            <p>
                                Student form page is used to add the details of students and store them
                                in a table. It also has the option to delete specific rows.
                            </p>
                            <a href="../../../public/StudentForm/StudentForm.html" target="_blank" rel="noopener noreferrer">
                                View page
                            </a>
                        </div>
                        <div className="website">
                            <img src={web3} alt="E-commerce Project" />
                            <h5>HTML</h5>
                            <h5>CSS</h5>
                            <h5>JavaScript</h5>
                            <h3>E-commerce</h3>
                            <p>2024</p>
                            <p>
                                Nostra is a responsive e-commerce layout created as a beginner frontend
                                developer project using HTML, CSS, and JavaScript.
                            </p>
                            <a href="../../../public/Ecomerce Project/index.html" target="_blank" rel="noopener noreferrer">
                                View page
                            </a>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="projects-academics">
                            <div className="website">
                                <img src={academic1} alt="Integrated Automatic Electricity Billing System" />
                                <h3>Integrated Automatic Electricity Billing System</h3>
                                <p>2023</p>
                                <p>
                                    The aim of this project is to measure and monitor the electricity consumed by consumers
                                    and display the calculated readings through the cloud app ‘Blynk’. This project helps
                                    in reducing malpractices and damages to the meter.
                                </p>
                            </div>
                            <div className="website">
                                <img src={academic2} alt="Analyzing EEG Patterns" />
                                <h3>Analyzing EEG Patterns as Predictors of Physiological Responses</h3>
                                <p>2024</p>
                                <p>
                                    This project endeavors to conduct a comprehensive analysis of EEG signals
                                    to predict physiological responses in a diverse range of scenarios.
                                </p>
                            </div>
                        </div>
                    )}
            </div>
        </section>
    );
};

export default Projects;
