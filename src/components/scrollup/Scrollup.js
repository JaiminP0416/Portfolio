import React from 'react';
import "./scrollup.css";

const Scrollup = () => {

    window.addEventListener("scroll",function() {
        const scrollUp = this.document.querySelector(".scrollup");

        if (this.scrollY >=560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })

  return (

    <a href="#home" className="scrollup">
        < i className='bx  bx-arrow-up-stroke scrollup__icon '></i>
    </a>
  )
}

export default Scrollup






//COMPLEX WITH THE USE OF A BUTTON

// import React, { useState, useEffect } from 'react';
// import "./scrollup.css";

// const Scrollup = () => {

// const [visible, setVisible] = useState(false);

//   const toggleVisibility = () => {
//     if (window.pageYOffset > 100) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);


//   return (

//         visible && (
//             <div className="scrollup__container container">
//                 <button href="#contact" className="button button--flex scrollup__button" onClick={scrollToTop}>
//                                 < i className='bx  bx-arrow-up-stroke scrollup__button-icon '></i> 
//                 </button>
//             </div>

//     )

//   )
// }

// export default Scrollup