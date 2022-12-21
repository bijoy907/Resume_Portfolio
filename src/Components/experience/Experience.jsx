import React from "react";
import "./experience.css"

const Experience=()=>{
    return(
        <>
        <div className="experience" id='experience'>
            <div className="achievment">
                <div className="circle">1+</div>
                <span className="upper_span">Years</span>
                <span className="lower_span">Experience</span>
            </div>

            {/* ******  */}
            <div className="achievment">
                <div className="circle">10+</div>
                <span className="upper_span">Complted</span>
                <span className="lower_span">Projects</span>
            </div>

            {/* ******  */}
            <div className="achievment">
                <div className="circle">1+</div>
                <span className="upper_span">Internship</span>
                <span className="lower_span">Complted</span>
            </div>


        </div>
        </>
    )
}

export default Experience;