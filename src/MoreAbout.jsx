import React, { useEffect, useRef } from 'react'
import Navbar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const MoreAbout = () => {
    const backToTopBtn = useRef(null);

    useEffect(() => {
        // Scroll Event for Back-to-Top Button
        const handleScroll = () => {
            // Ensure backToTopBtn is available before accessing classList
            if (backToTopBtn.current) {
                if (window.scrollY > 100) {
                    backToTopBtn.current.classList.add("show");
                } else {
                    backToTopBtn.current.classList.remove("show");
                }
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div>
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Contact />
            {/* <!-- Back to Top Button --> */}
            <button onClick={scrollToTop} style={{ color: 'black' }} ref={backToTopBtn} id="back-to-top" className="back-to-top-btn d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-arrow-up"></i>
            </button>

        </div>
    )
}

export default MoreAbout