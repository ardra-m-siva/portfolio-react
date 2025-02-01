import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <section id="home" className="home-section d-flex align-items-center justify-content-center ">
                <div className="home-content text-center">
                    <h1>Hello, I'm <span style={{ color: '#FF9D23' }}>ARDRA M S</span></h1>
                    <p>Full Stack Developer | UI/UX Designer </p>
                    <Link to={'/more'} className="btn fw-bold">Learn More</Link>
                </div>
                
            </section>
        </>
    );
};

export default Home;