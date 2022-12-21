import React from "react";
import './footer.css';
import footer from "../../img/wave.png";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { TfiLocationPin } from "react-icons/tfi";

const Footer=()=>{

    return(
        <>
        <div className="footer">
            <img src={footer} alt="" style={{width:'100%'}}/>
            <div className="f_content">
                <span><TfiLocationPin size='2rem'/>Garia, kolkata-700084</span>
            <div className="f_icon">
                <FaGithub size='3rem'/>
                <BsInstagram size='3rem' />
                <SiFacebook  size='3rem' />
            </div>
            </div>
        </div>
        </>
    )
};

export default Footer;