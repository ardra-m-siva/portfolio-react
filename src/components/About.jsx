import React from 'react'
import '../App.css'
import ardraImg from '../assets/ardra-removebg-preview.png'
import Resume from '../assets/ArdraMs_resume.pdf'

const About = () => {
    return (
        <div>
            <section id="about" className="about-section text-light py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <!-- Image Section --> */}
                        <div className="col-lg-4 text-center mb-4 mb-lg-0">
                            <div className="image-container d-flex justify-content-center align-items-center">
                                <img src={ardraImg} alt="My Picture"
                                    className="img-fluid rounded-circle shadow" style={{maxWidth:'250px'}} />
                            </div>
                        </div>
                        {/* <!-- Text Section --> */}
                        <div className="col-lg-8">
                            <h2 className="section-title fw-bold text-start">ABOUT ME</h2>
                            <p  className="about-description">
                                Hi, I'm <span style={{ color: '#FF9D23' }}>ARDRA M S</span>, a passionate Full Stack
                                Developer and UI/UX Designer. I specialize in
                                building intuitive, user-friendly web applications and crafting beautiful, responsive
                                designs. With a strong background in modern web technologies, I am dedicated to creating
                                impactful solutions that make a difference.
                            </p>
                            <p  className="about-description">
                                I enjoy learning new tools and techniques to enhance my skills and bring innovative
                                ideas to life. Let's collaborate to build something amazing together!
                            </p>
                            <div className=" mt-4">
                                <a href={Resume} id="download" download="Ardra_M_S_Resume"
                                    className="btn fw-bold px-4 ">
                                    <i className="fa-solid fa-download"></i> <span>Download
                                        Resume</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About