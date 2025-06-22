import React, {useState} from 'react';
// import Pro1-img from "../../assets/about.jpg";
import Proj1Img from "../../assets/work1.jpg";
import Proj2Img from "../../assets/work2.jpg";
import Proj3Img from "../../assets/work3.jpg";
import Proj4Img from "../../assets/work4.jpg";
import Proj5Img from "../../assets/work5.jpg";
import "./portfolio.css";
const Portfolio = () => {

    const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index);
        }
    
  return (
    <section className='portfolio section' id='portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>

        <div className="portfolio__container container grid">

            <div className="portfolio__tabs">
                
                <div className={toggleState === 1 ? "portfolio__button portfolio__active button--flex" : "portfolio__button button--flex"} onClick = {() => toggleTab(1)} >
                    All
                </div>

                <div className={toggleState === 2 ? "portfolio__button portfolio__active button--flex" : "portfolio__button button--flex"} onClick = {() => toggleTab(2)} >
                    Web
                </div>
                
                <div className={toggleState === 3 ? "portfolio__button portfolio__active button--flex" : "portfolio__button button--flex"} onClick = {() => toggleTab(3)} >
                    Design
                </div>
            
            </div>

            <div className="portfolio__data ">
            
                <div className={toggleState === 2 || toggleState === 1 ? "portfolio__content portfolio__content-active" : "portfolio__content"}>
                    
                    <div className="proj__info grid">
                        <div className="proj__box">
                           <img src={Proj1Img} alt="" className="proj__img" />
                            <h3 className="proj__title">PhotoBooth</h3>
                            <span className="proj__subtitle"><a href="https://jaiminp0416.github.io/PhotoBooth/" target="_blank" rel="noopener noreferrer" className="proj__subtitle-btn">Demo {""} <i className="bx bx-arrow-right-stroke proj__subtitle-btn-icon "></i></a>
                            </span>
                        </div>
                        
                         <div className="proj__box">
                           <img src={Proj2Img} alt="" className="proj__img" />
                            <h3 className="proj__title">Currency-Converter</h3>
                            <span className="proj__subtitle"><a href="https://jaiminp0416.github.io/Currency-Converter/" target="_blank" rel="noopener noreferrer" className="proj__subtitle-btn">Demo {""} <i className="bx bx-arrow-right-stroke proj__subtitle-btn-icon "></i></a>
                            </span>
                        </div>
                        
                         <div className="proj__box">
                           <img src={Proj3Img} alt="" className="proj__img" />
                            <h3 className="proj__title">TicTacToe</h3>
                            <span className="proj__subtitle"><a href="https://jaiminp0416.github.io/TicTacToe/" target="_blank" rel="noopener noreferrer"className="proj__subtitle-btn">Demo {""} <i className="bx bx-arrow-right-stroke proj__subtitle-btn-icon "></i></a>
                            </span>
                        </div>
                        
                    </div>                        


                </div>

                <div className={toggleState === 3 || toggleState === 1 ? "portfolio__content portfolio__content-active" : "portfolio__content"}>
                    
                    <div className="proj__info grid">
                        
                        <div className="proj__box">
                           <img src={Proj4Img} alt="" className="proj__img" />
                            <h3 className="proj__title">Design 1</h3>
                            <span className="proj__subtitle"><a href="tel:+12269619399" className="proj__subtitle-btn">Demo {""} <i className="bx bx-arrow-right-stroke proj__subtitle-btn-icon "></i></a>
                            </span>
                        </div>
                        
                         <div className="proj__box">
                           <img src={Proj5Img} alt="" className="proj__img" />
                            <h3 className="proj__title">Design 2</h3>
                            <span className="proj__subtitle"><a href="tel:+12269619399" className="proj__subtitle-btn">Demo {""} <i className="bx bx-arrow-right-stroke proj__subtitle-btn-icon "></i></a>
                            </span>
                        </div>
                        
                         <div className="proj__box">
                           <img src={Proj5Img} alt="" className="proj__img" />
                            <h3 className="proj__title">Design 3</h3>
                            <span className="proj__subtitle"><a href="tel:+12269619399" className="proj__subtitle-btn">Demo {""} <i className="bx bx-arrow-right-stroke proj__subtitle-btn-icon "></i></a>
                            </span>
                        </div>

                    </div>                        

                    </div>

            </div>


        </div>
    </section>
  )
}

export default Portfolio