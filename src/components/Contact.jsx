import React from 'react'

const Contact = () => {
    return (
        <div>
            <section id="contact" className="contact-section text-light">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title fw-bold">GET IN TOUCH</h2>
                        <p>Feel free to reach out for inquiries or collaborations!</p>
                    </div>

                    <div className="contact-options d-flex justify-content-center">
                        {[
                            { name: "LinkedIn", url: "https://www.linkedin.com/in/ardra-m-sivakumaran", icon: "fa-linkedin" },
                            { name: "GitHub", url: "https://github.com/ardra-m-siva", icon: 'fa-github' },
                            { name: "Email", url: "mailto:ardrasivan2000@gmail.com", icon: "fa-envelope" }
                        ].map((item, index) => (
                            <div key={index} className="contact-item">
                                <a href={item.url} target="_blank" className="contact-link d-flex justify-content-center align-items-center text-light">
                                    {
                                        item.icon == 'fa-envelope' ?
                                            <i style={{ fontSize: '20px' }} className={`fas ${item.icon}`}></i>
                                            :
                                            <i style={{ fontSize: '20px' }} className={`fab ${item.icon}`}></i>
                                    }
                                    <span>{item.name}</span></a>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Contact