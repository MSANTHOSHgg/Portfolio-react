import React, { useState } from 'react';
import './Projects.css';
import web1 from '../../Pages/ContactForm/assets/contactimg.png';
import web2 from '../../Pages/To-DoList/assets/todoimg.png';
import web3 from '../../Pages/Blog/assets/blogimg.png';
import academic1 from '../../assets/A_P_1/Picture1.png';
import academic2 from '../../assets/A_P_2/P2.png';
// import { Link } from 'react-router-dom';

const Projects = () => {
    const [showWebProjects, setShowWebProjects] = useState(true);

    return (
        <section id="Project">
            <div className="projects">
                <div style={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"}}>
                    <h1>Projects</h1>
                    <p style={{textAlign:"center"}}>I have worked on some projects. Here are some of my projects:</p>
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
                            <img src={web1} alt="ContactForm" />
                            <h5>React.js</h5><p></p><br />
                            <h3>Contact Form</h3>
                            <p>2024</p>
                            <p>
                                The Contact Form is a simple yet efficient web application built using React on the frontend, coupled with a backend for handling form submissions and storing the data. The goal of this project was to provide users with an intuitive and responsive form to submit inquiries, feedback, or requests.
                            </p>
                            {/* <Link to="/contactform">View page</Link> */}
                            <a href="/contactform" target="_blank" rel="noopener noreferrer">
                                View page
                            </a>
                        </div>
                        <div className="website">
                            <img src={web2} alt="Student Form" />
                            <h5>React.js</h5><p></p><br />
                            <h3>To-Do List</h3>
                            <p>2024</p>
                            <p>
                                The To-Do List application is a simple and intuitive task management tool built using React on the frontend and integrated with a backend to manage and store user data. This app allows users to create, update, and delete tasks in a seamless manner while keeping their data persistent across sessions.
                            </p>
                            {/* <Link to="/todolist">View page</Link> */}
                            <a href="/todolist" target="_blank" rel="noopener noreferrer">
                                View page
                            </a>
                        </div>
                        <div className="website">
                            <img src={web3} alt="E-commerce Project" />
                            <h5>React.js</h5><p></p><br />
                            <h3>Blog</h3>
                            <p>2024</p>
                            <p>
                                The Blog is a full-featured platform designed for users to create, read, update, and delete blog posts, all while interacting with a dynamic and responsive frontend built with React.js. The backend serves as the foundation for storing and managing posts, comments, and user data, ensuring a rich experience for bloggers.
                            </p>
                            {/* <Link to="/Blog">View page</Link> */}
                            <a href="/Blog" target="_blank" rel="noopener noreferrer">
                                View page
                            </a>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="projects-academics">
                            <div className="academics">
                                <img src={academic1} alt="Integrated Automatic Electricity Billing System" />
                                <p></p>
                                <br/>
                                <h3>Integrated Automatic Electricity Billing System</h3>
                                <p>2023</p>
                                <p>
                                    The aim of this project is to measure and monitor the electricity consumed by consumers
                                    and display the calculated readings through the cloud app ‘Blynk’. This project helps
                                    in reducing malpractices and damages to the meter.
                                </p>
                            </div>
                            <div className="academics">
                                <img src={academic2} alt="Analyzing EEG Patterns" />
                                <p></p>
                                <br/>
                                <h3>Analyzing EEG Patterns as Predictors of Physiological Responses</h3>
                                <p>2024</p>
                                <p>
                                    This project investigates the connection between EEG patterns and physiological responses, focusing on how brain activity correlates with physiological responses. This research has exciting applications in healthcare, mental health, and human-computer interaction.
                                </p>
                            </div>
                        </div>
                    )}
            </div>
        </section>
    );
};

export default Projects;
