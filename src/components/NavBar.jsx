import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="float-left fs-4 m-3 mt-0" >
                    <Link to={'/'}><i style={{ color: '#00F5FF' }} className="fa-solid fa-arrow-left" /></Link>
                </div>
            <div className="container d-flex justify-content-center">   
                <div className="text-center">
                    <button style={{ color: '#00F5FF' }} className="navbar-toggler toggler-btn " type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars fa-lg"></i>
                    </button>
                    <div className="collapse navbar-collapse collapse-menu" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-center">
                            <a className=" item" href="#about">About</a>
                            <a className=" item" href="#skills">Skills</a>
                            <a className=" item" href="#projects">Projects</a>
                            <a className=" item" href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;