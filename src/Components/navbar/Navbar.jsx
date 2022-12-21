import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar=()=>{

    return(
        <>
        <div className="nav_wrap" id="Navbar">
            <div className="nav_left">
                <div className="nav_name">TechTalk</div>
            </div>
            <div className="nav_right">
                {/* nav right */}
                <div className="nav_list">
                    <ul style={{listStyleType:'none'}}>
                        <li><Link activeClass="active" to="Navbar" spy={true} smooth={true}>Home</Link></li>
                        <li><Link to="services" spy={true} smooth={true}>Serivces</Link></li>
                        <li><Link to="works" spy={true} smooth={true}>Experience</Link></li>
                        <li><Link to="portfolio" spy={true} smooth={true}>Protfolio</Link></li>
                    </ul>
                </div>
                <Link to="contact" spy={true} smooth={true}>
                <button className="button nav_btn">
                    Contact Me
                </button>
                </Link>
            </div>
        </div>
        </>
    )
};

export default Navbar;