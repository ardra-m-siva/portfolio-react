import React, { useEffect, useRef } from 'react';

const Skills = () => {
        const progressBars = useRef([]);
         useEffect(() => {
                // Intersection Observer for animating progress bars
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                const bar = entry.target;
                                const width = bar.getAttribute("data-width");
                                bar.style.width = width + "%";
                                observer.unobserve(bar);
                            }
                        });
                    },
                    { threshold: 0.5 }
                );
        
                progressBars.current.forEach((bar) => observer.observe(bar));
        
                return () => observer.disconnect();
            }, []);
    
    return (
        <>
            <section id="skills" className="skills-section py-5 text-light">
                <div className="container">
                    <h2  className="text-center mb-5 fw-bold skill-heading">My Skills</h2>
                    <div className="row text-center partition">
                        {/* Left Section - Skills */}
                        <div className="col-md-8 col-sm-12 mb-4">
                            <div className="row partition">
                                {/* Skill Items */}
                                {[
                                    { name: "HTML5", color: "#e34c26", width: "90%", icon: "fa-html5" },
                                    { name: "CSS3", color: "#2965f1", width: "85%", icon: "fa-css3-alt" },
                                    { name: "JavaScript", color: "#f7df1e", width: "80%", icon: "fa-js" },
                                    { name: "React", color: "#61dafb", width: "75%", icon: "fa-react" },
                                    { name: "Figma", color: "#a259ff", width: "80%", icon: "fa-figma" },
                                    { name: "Git", color: "#DC3545", width: "60%", icon: "fa-git-alt" },
                                    { name: "Bootstrap", color: "#563d7c", width: "70%", icon: "fa-bootstrap" },
                                    { name: "MongoDB", color: "#198754", width: "60%", icon: "fa-database" },
                                ].map((skill, index) => (
                                    <div key={index} className="col-md-3 col-sm-6 mb-4">
                                        <div className="skill-card">
                                            <div className="skill-icon d-flex justify-content-center align-items-center">
                                                {
                                                    skill.icon == "fa-database" ?
                                                    <i className={`fa-solid ${skill.icon} fa-3x mb-3 rotate-icon`} style={{ color: skill.color }}></i>
                                                    :
                                                    <i className={`fa-brands ${skill.icon} fa-3x mb-3 rotate-icon`} style={{ color: skill.color }}></i>
                                                }
                                            </div>
                                            <h4>{skill.name}</h4>
                                            <div style={{ height: "13px" }} className="progress mt-3">
                                                <div className="progress-bar" style={{ width: skill.width, backgroundColor: skill.color }}  ref={(el) => (progressBars.current[index] = el)}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Section - Services */}
                        <div className="col-md-4 col-sm-12 mb-4">
                            <h2 className="text-center mb-5 fw-bold services-heading" style={{ color: "#76ABAE" }}>MY SERVICES</h2>
                            <div className="row text-center justify-content-evenly d-flex">
                                {[
                                    { name: "Web Development", color: "#ff5722", icon: "fa-laptop-code", description: "Creating responsive and visually appealing websites using the latest technologies." },
                                    { name: "UI/UX Design", color: "#9c27b0", icon: "fa-paint-brush", description: "Designing user-friendly interfaces with a focus on smooth user experiences." },
                                ].map((service, index) => (
                                    <div key={index} className="col-md-5 col-sm-6 mb-4">
                                        <div className="service-card p-4">
                                            <i className={`fa ${service.icon} fa-3x mb-3`} style={{ color: service.color }}></i>
                                            <h4>{service.name}</h4>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
