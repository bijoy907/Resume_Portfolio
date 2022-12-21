import React from "react";
import "./portfolio.css";
import "swiper/css"
import { Swiper, SwiperSlide } from 'swiper/react';
import app1 from "../../img/app1.png";
import app2 from "../../img/app2.png";
import app3 from "../../img/app3.png";
import app4 from "../../img/app4.png";
import app5 from "../../img/app5.png";
import app6 from "../../img/app6.png";


const Portfolio = () => {

    return (
        <>
            <div className="portfolio">
                {/* heading  */}
                <span>Recent Projects</span>
                <span>Portfolio</span>

                {/* slider  */}
                <Swiper
                spaceBetween={35}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio_slider"
                >

                    {/* ******  */}
                    <SwiperSlide>
                        <img src={app1} alt="" />
                    </SwiperSlide>

                    {/* ******  */}
                    <SwiperSlide>
                        <img src={app2} alt="" />
                    </SwiperSlide>

                    {/* ******  */}
                    <SwiperSlide>
                        <img src={app3} alt="" />
                    </SwiperSlide>

                    {/* ******  */}
                    <SwiperSlide>
                        <img src={app4} alt="" />
                    </SwiperSlide>

                    {/* ******  */}
                    <SwiperSlide>
                        <img src={app5} alt="" />
                    </SwiperSlide>

                    {/* *******  */}
                    <SwiperSlide>
                        <img src={app6} alt="" />
                    </SwiperSlide>



                </Swiper>
            </div>
        </>
    )
};

export default Portfolio;