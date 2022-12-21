import React from "react";
import "./intro.css";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import insta from "../../img/instagram.png";
import boy from "../../img/boy.png";
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import glassemoji from "../../img/glassesimoji.png";
import { motion } from 'framer-motion';



const Intro = () => {

    const transition = { duration: 2, type: 'spring' }

    return (
        <>
            <div className="intro" id="Intro">
                <div className="intro_left">
                    {/* left section  */}
                    <div className="intro_name">
                        <span>Hey! I Am</span>
                        <span>Bijoy Rashit</span>
                        <span>Strong in design and integration with intuitive problem-solving skills. Proficient in <span className="s_html">HTML</span>, <span className="s_css">CSS</span>, <span className="s_js">JavaScript</span>, <span className="s_react">React.js</span>, And <span className="s_node">Node.js</span>. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start my career as an entry-level software engineer with a reputed firm driven by technology.</span>
                    </div>
                    <button className="button intro_btn">Hire Me</button>
                    <div className="intro_icon">
                        <a href="https://github.com/bijoy907">
                        <img src={github} alt="" />
                        </a>

                        <a href="https://www.linkedin.com/in/bijoy-rakshit-7aa561126">
                        <img src={linkedin} alt="" />
                        </a>
                        
                        <img src={insta} alt="" />
                    </div>
                </div>
                <div className="intro_right">
                    <img src={vector1} alt="" />
                    <img src={vector2} alt="" />
                    <img src={boy} alt="" />

                    <motion.img
                        initial={{ left: '-36%' }}
                        whileInView={{ left: '-24%' }}
                        transition={transition}
                        src={glassemoji} alt="" />

                </div>
            </div>
        </>
    )
};

export default Intro;