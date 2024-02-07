"use client"
import Slider from "react-slick";
import React, { Component, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import CardR from "./CardR";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="containerSetaR d-flex align-items-center justify-content-start" style={{ ...style, display: "block", }} onClick={onClick}>
            <div>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_288_1525" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                        <rect width="30" height="30" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_288_1525)">
                        <path d="M10.3264 30L7.5 27.3375L20.5971 15L7.5 2.6625L10.3264 0L26.25 15L10.3264 30Z" fill="#1C1B1F" />
                    </g>
                </svg>
            </div>
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="containerSetaL d-flex align-items-center justify-content-end" style={{ ...style, display: "block", }} onClick={onClick}>
            <div>
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_288_1522" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="31">
                        <rect width="30" height="30" transform="matrix(-1 0 0 1 30 0.153687)" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_288_1522)">
                        <path d="M19.6736 30.1537L22.5 27.4912L9.40287 15.1537L22.5 2.81619L19.6736 0.153687L3.75 15.1537L19.6736 30.1537Z" fill="#1C1B1F" />
                    </g>
                </svg>
            </div>


        </div>
    );
}


export default class Carrossel extends Component {

    render() {
        var settings = {
            className: "slider",
            dots: true,
            centerMode: true,
            infinite: true,
            speed: 500,
            slidesToShow: 13,
            centerPadding: "0px",

            slidesToScroll: 1,
            arrows: true,
            customPaging: function (i) {
                return (
                    <a>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10.4644" r="10" fill="#D9D9D9" />
                        </svg>
                    </a>
                );
            },

            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 4771,
                    settings: {
                        slidesToShow: 12,
                    }
                },
                {
                    breakpoint: 4500,
                    settings: {
                        slidesToShow: 11,
                    }
                },
                {
                    breakpoint: 3100,
                    settings: {
                        slidesToShow: 10,
                    }
                },
                {
                    breakpoint: 3744,
                    settings: {
                        slidesToShow: 9,
                    }
                },
                {
                    breakpoint: 3368,
                    settings: {
                        slidesToShow: 8,
                    }
                },
                {
                    breakpoint: 2991,
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 2660,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 2260,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1900,
                    settings: {
                        slidesToShow: 4,
                        centerMode: false,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 1450,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1090,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 732,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                        infinite: true,
                    }
                },



            ]
        };
        return (
            <div className="container-fluid p-0" >
                <div className="d-flex align-items-center justify-content-center divSlider">
                    <Slider {...settings} className="slider">
                        <CardR></CardR>
                        <CardR></CardR>
                        <CardR></CardR>
                        <CardR></CardR>
                        <CardR></CardR>
                        <CardR></CardR>
                        <CardR></CardR>
                    </Slider>
                </div>
            </div>
        );
    }
}