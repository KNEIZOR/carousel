"use client";
import { imgs } from "@/imgsArr";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const [isMobile, setIsMobile] = useState(true);
    function getDeviceType() {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile =
            /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
                userAgent
            );
            
        if (isMobile) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        getDeviceType();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: isMobile ? 1 : 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {imgs.map((img, index) => (
                    <div className="slide__wrapper" key={index}>
                        <div className="slide">
                            <div className="slide-top">
                                <Image
                                    src={img.image}
                                    alt="img"
                                    width={isMobile ? 60 : 80}
                                    height={isMobile ? 59 : 80}
                                />
                                <p className="slide-title">{img.title}</p>
                            </div>
                            <p className="slide-text">{img.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
