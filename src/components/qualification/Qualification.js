import React, {useState} from 'react';
import "./qualification.css";


const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }



  return (
    <section className="qualification section" id='qualification' >
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My journey</span>
    
        <div className="qualification__container container">
            
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick = {() => toggleTab(1)} >
                    
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
                
                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick = {() => toggleTab(2)} >

                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
            </div>

            <div className="qualification__sections">

                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    


                    <div className="qualification__data">
                        <div className='left-row' >
                            <h3 className="qualification__title">Full Stack Developer</h3>
                            <span className="qualification__subtitle">Shift Creative Co.</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"> </i>
                                Nov 2023 – May 2025 
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Technical Support<br/>Specialist</h3>
                            <span className="qualification__subtitle">Visaic Inc.</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"> </i>
                                Dec 2023 - Present
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div className='left-row'>
                            <h3 className="qualification__title">Jr. Web Developer</h3>
                            <span className="qualification__subtitle">Maruti Digital Solutions</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt "> </i>
                                July 2022 - June 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>
                    
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Software Developer</h3>
                            <span className="qualification__subtitle">Precision Embedded</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"> </i>
                                Jan 2022 - April 2022
                            </div>
                        </div>

                    </div>

                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">University of Windsor</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - 2025
                            </div>
                        </div>

                    </div> */}
                    
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Master of <br/>Computer Engineering</h3>
                            <span className="qualification__subtitle">University of Windsor </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"> </i>
                                2023 - 2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Bachelor of <br/> Electronics and Comm. <br/> Engineering</h3>
                            <span className="qualification__subtitle">Gujarat Technological University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"> </i>
                                2018 - 2022
                            </div>
                        </div>

                    </div>

                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web developer</h3>
                            <span className="qualification__subtitle">Meta </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"> </i>
                                2023 - 2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div> */}

                    
                </div>
            </div>    
        </div>

    </section>
  )
}

export default Qualification