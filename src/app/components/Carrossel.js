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
        <div className="containerSetaR" style={{ ...style, display: "block", }} onClick={onClick}>
            <svg className="seta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
                <g clipPath="url(#clip0_198_309)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.125 25C3.125 30.8016 5.42968 36.3656 9.53204 40.468C13.6344 44.5703 19.1984 46.875 25 46.875C30.8016 46.875 36.3656 44.5703 40.468 40.468C44.5703 36.3656 46.875 30.8016 46.875 25C46.875 19.1984 44.5703 13.6344 40.468 9.53204C36.3656 5.42968 30.8016 3.125 25 3.125C19.1984 3.125 13.6344 5.42968 9.53204 9.53204C5.42968 13.6344 3.125 19.1984 3.125 25ZM50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25ZM14.0625 23.4375C13.6481 23.4375 13.2507 23.6021 12.9576 23.8951C12.6646 24.1882 12.5 24.5856 12.5 25C12.5 25.4144 12.6646 25.8118 12.9576 26.1049C13.2507 26.3979 13.6481 26.5625 14.0625 26.5625H32.1656L25.4562 33.2687C25.311 33.414 25.1957 33.5865 25.1171 33.7763C25.0385 33.9661 24.998 34.1696 24.998 34.375C24.998 34.5804 25.0385 34.7839 25.1171 34.9737C25.1957 35.1635 25.311 35.336 25.4562 35.4813C25.6015 35.6265 25.774 35.7418 25.9638 35.8204C26.1536 35.899 26.3571 35.9395 26.5625 35.9395C26.7679 35.9395 26.9714 35.899 27.1612 35.8204C27.351 35.7418 27.5235 35.6265 27.6688 35.4813L37.0438 26.1063C37.1893 25.9611 37.3047 25.7887 37.3835 25.5989C37.4622 25.409 37.5028 25.2055 37.5028 25C37.5028 24.7945 37.4622 24.591 37.3835 24.4011C37.3047 24.2113 37.1893 24.0389 37.0438 23.8937L27.6688 14.5187C27.5235 14.3735 27.351 14.2582 27.1612 14.1796C26.9714 14.101 26.7679 14.0605 26.5625 14.0605C26.3571 14.0605 26.1536 14.101 25.9638 14.1796C25.774 14.2582 25.6015 14.3735 25.4562 14.5187C25.311 14.664 25.1957 14.8365 25.1171 15.0263C25.0385 15.2161 24.998 15.4196 24.998 15.625C24.998 15.8304 25.0385 16.0339 25.1171 16.2237C25.1957 16.4135 25.311 16.586 25.4562 16.7313L32.1656 23.4375H14.0625Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_198_309">
                        <rect width="50" height="50" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="containerSetaL" style={{ ...style, display: "block", }} onClick={onClick}>
            <svg className="seta" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_198_304)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.125 25C3.125 30.8016 5.42968 36.3656 9.53204 40.468C13.6344 44.5703 19.1984 46.875 25 46.875C30.8016 46.875 36.3656 44.5703 40.468 40.468C44.5703 36.3656 46.875 30.8016 46.875 25C46.875 19.1984 44.5703 13.6344 40.468 9.53204C36.3656 5.42968 30.8016 3.125 25 3.125C19.1984 3.125 13.6344 5.42968 9.53204 9.53204C5.42968 13.6344 3.125 19.1984 3.125 25ZM50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25ZM35.9375 23.4375C36.3519 23.4375 36.7493 23.6021 37.0424 23.8951C37.3354 24.1882 37.5 24.5856 37.5 25C37.5 25.4144 37.3354 25.8118 37.0424 26.1049C36.7493 26.3979 36.3519 26.5625 35.9375 26.5625H17.8344L24.5438 33.2687C24.689 33.414 24.8043 33.5865 24.8829 33.7763C24.9615 33.9661 25.002 34.1696 25.002 34.375C25.002 34.5804 24.9615 34.7839 24.8829 34.9737C24.8043 35.1635 24.689 35.336 24.5438 35.4813C24.3985 35.6265 24.226 35.7418 24.0362 35.8204C23.8464 35.899 23.643 35.9395 23.4375 35.9395C23.232 35.9395 23.0286 35.899 22.8388 35.8204C22.649 35.7418 22.4765 35.6265 22.3312 35.4813L12.9562 26.1063C12.8107 25.9611 12.6953 25.7887 12.6165 25.5989C12.5378 25.409 12.4972 25.2055 12.4972 25C12.4972 24.7945 12.5378 24.591 12.6165 24.4011C12.6953 24.2113 12.8107 24.0389 12.9562 23.8937L22.3312 14.5187C22.6246 14.2254 23.0226 14.0605 23.4375 14.0605C23.8524 14.0605 24.2504 14.2254 24.5438 14.5187C24.8371 14.8121 25.002 15.2101 25.002 15.625C25.002 16.0399 24.8371 16.4379 24.5438 16.7313L17.8344 23.4375H35.9375Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_198_304">
                        <rect width="50" height="50" fill="white" />
                    </clipPath>
                </defs>
            </svg>

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
                    }
                },
                {
                    breakpoint: 1450,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
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
                        infinite: false,
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