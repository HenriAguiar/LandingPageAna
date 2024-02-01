"use client"
import Slider from "react-slick";

import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

export default class SwipeToSlide extends Component {
    render() {
      const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: true,

      };
      return (
        <div className="container">
          <Slider {...settings}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </Slider>
        </div>
      );
    }
  }