import React from "react";
import "./work.css";
import upwork from "../../img/Upwork.png";
import fiverr from "../../img/fiverr.png";
import amazon from "../../img/amazon.png";
import shopify from "../../img/Shopify.png";
import Fb from "../../img/Facebook.png";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';

const Work = () => {

    return (
        <>
            <div className="works" id="works">
                <div className="awesome">
                    <span>Works for All Them</span>
                    <span>Clients & Brands</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, reprehenderit.</span>
                    <Link to="contact" smooth={true} spy={true}>
                    <button className="button services_btn">Hire Me</button>
                    </Link>
                </div>

                {/* right side  */}
                <div className="w_right">
                    <motion.div 
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w_maincircle"
                    >
                        {/* upwork  */}
                        <div className="w_secCircle">
                            <img src={upwork} alt="" />
                        </div>
                        {/* amazon  */}
                        <div className="w_secCircle">
                            <img src={amazon} alt="" />
                        </div>
                        {/* fiverr  */}
                        <div className="w_secCircle">
                            <img src={fiverr} alt="" />
                        </div>
                        {/* shopify */}
                        <div className="w_secCircle">
                            <img src={shopify} alt="" />
                        </div>
                        {/* fb  */}
                        <div className="w_secCircle">
                            <img src={Fb} alt="" />
                        </div>
                    </motion.div>
                        {/* bg circle  */}
                        <div className="w_backCircle blueCircle"></div>
                        <div className="w_backCircle YellowCircle"></div>
                </div>
            </div>
        </>
    )
};
export default Work;
