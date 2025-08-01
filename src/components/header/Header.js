import React, {useState, useEffect} from 'react';
import "./Header.css";

const Header = () => {

    const[toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("home");
    const sections = ["home", "about", "skills", "qualification", "portfolio", "contact"];

     window.addEventListener("scroll",function() {
        const header = document.querySelector(".header");

        if (this.scrollY >=80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    
    useEffect(() => {
    const handleScrollSpy = () => {
      const scrollY = window.scrollY;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveNav(`#${id}`);
          }
        }
      });
    };
        window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <header className="header">
        
        <nav className="nav container">
            
            <a href="index.html" className="nav__logo">Jaimin</a>
            
            <div className={toggle? "nav__menu show-menu" : "nav__menu"}>
                
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick = {()=> setActiveNav('#home')} className={activeNav === "#home"? "nav__link active-link" : "nav__link "}>
                            <i className="uil uil-estate nav__icon"></i> Home 
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick = {()=> setActiveNav('#about')} className={activeNav === "#about"? "nav__link active-link" : "nav__link "}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick = {()=> setActiveNav('#skills')} className={activeNav === "#skills"? "nav__link active-link" : "nav__link "}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#qualification" onClick = {()=> setActiveNav('#qualification')} className={activeNav === "#qualification"? "nav__link active-link" : "nav__link "}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Qualification
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick = {()=> setActiveNav('#portfolio')} className={activeNav === "#portfolio"? "nav__link active-link" : "nav__link "}>
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick = {()=> setActiveNav('#contact')} className={activeNav === "#contact"? "nav__link active-link" : "nav__link "}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>

            </div>
                    <i className="uil uil-times nav__close  " onClick={()=> showMenu(!toggle)}></i>

            <div className="nav__toggle" onClick={()=> showMenu(!toggle)}>
              <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header