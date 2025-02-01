import React from 'react'
import '../App.css'
import signFlowImg from '../assets/SignUpFLow.png'
import restarentImg from '../assets/restaurent.png'

const Projects = () => {
  return (
    <>
        <section id="projects" className="projects-section">
                <div className="text-center">
                    <div>
                        <h2 className="section-title fw-bold text-center">MY PROJECTS</h2>
                        <p style={{fontSize:'17px'}}>Explore my projects that showcase my skills and creativity.</p>
                    </div>
                    <div className="project-categories">
                        {/* <!-- Personal Projects --> */}
                        <div className="project-category">
                            <h3>Web Development Projects</h3>
                            <div className="project-list d-flex align-items-center justify-content-center">
                                <div className="project-item ">
                                    <h4>Portfolio Website</h4>
                                    <p>My Portfolio Website showcases my skills, projects, and expertise in web
                                        development and UI/UX design. It's a responsive platform with a seamless user
                                        experience.</p>
                                </div>
                                <div className="project-item">
                                    <h4>Restaurant Website</h4>
                                    <p>A modern, visually appealing restaurant website with a minimalistic design,
                                        smooth animations, and an interactive user experience.</p>
                                    <a href=" https://graceful-yeot-ff9801.netlify.app/#" target="_blank"
                                        className="demo-link fw-bold py-2 px-3">View Demo</a>
                                </div>
                                <div className="project-item">
                                    <h4>Parallax Website</h4>
                                    <p>A visually engaging website featuring breathtaking images of outer space,
                                        designed with a parallax scrolling effect to create depth and a sense of
                                        movement.</p>
                                    <a href="  https://tiny-bombolone-3cb5a0.netlify.app/" target="_blank"
                                        className="demo-link fw-bold py-2 px-3">View Demo</a>
                                </div>
                                <div className="project-item">
                                    <h4>Ludo Pixel : A Game For All Abilities</h4>
                                    <p>Inclusive multiplayer Ludo game designed for visually impaired players. Built
                                        with HTML, CSS, JavaScript, and jQuery, it features audio cues and accessible
                                        gameplay.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- UI/UX Design Projects --> */}
                    <div className="project-category">
                        <h3>UI/UX Design Projects</h3>
                        <div className="project-list d-flex">
                            <div className="project-image-container">
                                <img src={signFlowImg} alt="Sign-up Flow Design" className="project-image"/>
                                <div className="project-text">
                                    <h4>Sign-up Flow Design</h4>
                                    <p className="text-light">A user-friendly and visually appealing sign-up and login flow
                                        design created using
                                        Figma.</p>
                                </div>
                            </div>
                            <div className="project-image-container">
                                <img src={restarentImg} alt="Restaurant Website Design"
                                    className="project-image"/>
                                <div className="project-text">
                                    <h4>Restaurant Website UI</h4>
                                    <p className="text-light">A high-fidelity restaurant UI design focusing on minimalism
                                        and smooth user
                                        interactions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Projects