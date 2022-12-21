import React from "react";
import "./services.css";
import heart from "../../img/heartemoji.png";
import Card from "../card/Card";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import { motion } from "framer-motion";


const Services = () => {

    const transition = {
        duration: 1,
        type: "spring",
    };

    return (
        <>
            <div className="services" id="services">
                {/* left side  */}
                <div className="awesome">
                    <span>My Awesome</span>
                    <span>Services</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, reprehenderit.</span>
                    {/* <a href={} download> */}
                    <button className="button services_btn">Download CV</button>
                    {/* </a> */}
                </div>

                {/* right side */}

                <div className="cards">
                    {/* 1st card  */}
                    <motion.div
                        // initial={{ left: "25rem" }}
                        whileInView={{ left: "18rem" }}
                        transition={transition}
                        style={{ left: '16rem' }}
                    >
                        <Card
                            emoji={heart}
                            heading={'Design'}
                            detail={'Logo, Banner/Poster, Photoshop, Canva'}
                        />
                    </motion.div>

                    {/* 2nd card  */}
                    <motion.div
                        initial={{ left: "-11rem", top: "12rem" }}
                        whileInView={{ left: "-4rem" }}
                        transition={transition}
                    // style={{left: '-4rem',top:"12rem"}}
                    >

                        <Card
                            emoji={glasses}
                            heading={'Developer'}
                            detail={'Html, Css, JS, React, Node'}
                        />
                    </motion.div>

                    {/* third card  */}
                    <motion.div
                        style={{ left: '12rem', top: '19rem' }}
                        initial={{ top: "19rem", left: "25rem" }}
                        whileInView={{ left: "12rem" }}
                        transition={transition}
                    >
                        <Card
                            emoji={humble}
                            heading={'UI/UX'}
                            detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta?"}
                        />
                    </motion.div>
                </div>
            </div>
        </>
    )
};

export default Services;