import React from "react";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./TopCarousel.css";

const TopCarousel = () => {
  return (
    <div>
      <Carousel className="container-fluid">
        <Carousel.Item interval={1000}>
          <Image
            className="carousel-image"
            src="https://svgshare.com/i/zqb.svg"
            alt="3 people learning code"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image
            className="carousel-image"
            src="https://svgshare.com/i/zqT.svg"
            alt="api integration image"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image
            className="carousel-image"
            src="https://svgshare.com/i/zpR.svg"
            alt="fireware update image"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopCarousel;
