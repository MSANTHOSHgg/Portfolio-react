import React from 'react'
import './Education.css'
import schoolimg  from '../../assets/school.png'
import collegeimg from '../../assets/College.webp'
const Education = () => {
    return (
        <section id="Education">
            <div className="Education">
                <h1>Education</h1>
            </div>
            <div className="Education-timeline">
                <div id="timeline">
                    <div className="tl-item">
                        <div className="tl-bg" style={{ backgroundImage: `url(${schoolimg})` }}></div>
                        <div className="tl-year">
                            <p className="f2 heading--sanSerif">2017-2018</p>
                        </div>
                        <div className="tl-content">
                            <h1>SSLC/10th</h1>
                            <h1>Periyar Centenary Memorial Matriculation Higher Secondary School, Trichy</h1>
                            <p>90.00%</p>
                        </div>
                    </div>
                    <div className="tl-item">
                        <div className="tl-bg" style={{ backgroundImage: `url(${schoolimg})` }}></div>
                        <div className="tl-year">
                            <p className="f2 heading--sanSerif">2019-2020</p>
                        </div>
                        <div className="tl-content">
                            <h1>HSC/12th</h1>
                            <h1 className="f3 text--accent ttu">Periyar Centenary Memorial Matriculation Higher Secondary School, Trichy
                            </h1>
                            <p>74.83%</p>
                        </div>
                    </div>
                    <div className="tl-item">
                        <div className="tl-bg" style={{ backgroundImage: `url(${collegeimg})` }}></div>
                        <div className="tl-year">
                            <p className="f2 heading--sanSerif">2020-2024</p>
                        </div>
                        <div className="tl-content">
                            <h1>B.E</h1>
                            <h1 className="f3 text--accent ttu">M.Kumarasamy College Of Engineering, Karur</h1>
                            <p>85.37%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Education-container">
                <div>
                    <div className="educationimg" style={{ backgroundImage: `url(${schoolimg})` }}>
                        <div>
                            <p>2017-2018,2019-2020</p>
                            <h1>Periyar Centenary Memorial Matriculation Higher Secondary School, Trichy</h1>
                            <span>
                                <div>
                                    <h1>SSLC/10th</h1>
                                    <p>90%</p>
                                </div>
                                <div>
                                    <h1>HSC/12th</h1>
                                    <p>74.83%</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="educationimg" style={{ backgroundImage: `url(${collegeimg})` }}>
                        <div>
                            <p>2020-2024</p>
                            <h1>B.E</h1>
                            <h1>M.Kumarasamy College Of Engineering, Karur</h1>
                            <p>85.37%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;